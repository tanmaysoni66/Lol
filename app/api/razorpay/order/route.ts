import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { sendTrainingEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { amount, currency, email, name } = await req.json();

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { error: 'Razorpay credentials missing on server' },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: Math.round(amount * 100), // convert to paise
      currency: currency || 'INR',
      receipt: `rcpt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Send Payment Initiated Email
    await sendTrainingEmail({
      type: 'INITIATED',
      customerEmail: email,
      customerName: name,
      amount: amount.toString(),
      currency,
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Order creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
