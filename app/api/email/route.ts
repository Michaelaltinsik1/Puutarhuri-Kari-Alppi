import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const nodemailer_email = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PASS;

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: nodemailer_email,
      pass: password,
    },
  });

  const mailOptions: Mail.Options = {
    from: nodemailer_email,
    to: nodemailer_email,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      message: 'Ditt meddelande har skickats. Vi hör av oss inom kort',
    });
  } catch (err) {
    return NextResponse.json(
      {
        message:
          'Något gick fel. Kontakta oss via email michaelaltinisik1@gmail.com eller ring 0725577888',
      },
      { status: 500 }
    );
  }
}
