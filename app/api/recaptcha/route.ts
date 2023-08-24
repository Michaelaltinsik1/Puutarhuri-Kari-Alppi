import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

const secret = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req: Request, res: Response) {
  const { token } = await req.json();
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
      }
    );

    if (response.data.success) {
      if (response.data.success > 0.4)
        return NextResponse.json({
          isValid: true,
          message: 'success',
        });
      else {
        return NextResponse.json({
          isValid: false,
          message: 'success',
        });
      }
    } else {
      return NextResponse.json({ message: 'failure' });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' });
  }
}
