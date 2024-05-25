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
      message: 'Viestisi on lähetetty. Otamme pian yhteyttä.',
    });
  } catch (err) {
    return NextResponse.json(
      {
        message:
          'Jotain meni pieleen. Ota yhteyttä sähköpostitse kari.alppi@gmail.com tai soita 040 77 06 163.',
      },
      { status: 500 }
    );
  }
}
