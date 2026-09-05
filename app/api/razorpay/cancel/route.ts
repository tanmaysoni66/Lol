import { NextResponse } from 'next/server';
import { sendTrainingEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { amount, currency, email, name } = await req.json();

    // Send Payment Cancelled Email explicitly when user closes the modal
    await sendTrainingEmail({
      type: 'CANCELLED',
      customerEmail: email,
      customerName: name,
      amount: amount.toString(),
      currency,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Cancel email failed:', error);
    return NextResponse.json(
      { error: 'Failed to send cancel notification' },
      { status: 500 }
    );
  }
}
