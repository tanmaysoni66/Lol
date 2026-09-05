import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendTrainingEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    const signature = req.headers.get('x-razorpay-signature');
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!secret || !signature) {
      return NextResponse.json({ error: 'Missing webhook configuration' }, { status: 400 });
    }

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(bodyText)
      .digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(bodyText);
    const payment = event.payload.payment.entity;
    
    // We can extract email/name from notes if we pass them, or from the contact/email fields
    const customerEmail = payment.email || 'customer@example.com';
    // Name might not be directly available unless passed in notes, using a fallback
    const customerName = payment.notes?.name || 'Customer';
    const amount = (payment.amount / 100).toString(); // convert back to rupees
    const currency = payment.currency;

    if (event.event === 'payment.captured') {
      await sendTrainingEmail({
        type: 'SUCCESS',
        customerEmail,
        customerName,
        amount,
        currency,
      });
    } else if (event.event === 'payment.failed') {
      await sendTrainingEmail({
        type: 'CANCELLED',
        customerEmail,
        customerName,
        amount,
        currency,
      });
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook processing failed:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
