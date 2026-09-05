import { NextResponse } from 'next/server';
import paypal from '@paypal/checkout-server-sdk';
import client from '@/lib/paypal';
import { sendTrainingEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { orderID, amount, currency, email, name } = await req.json();

    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    const response = await client.execute(request);

    if (response.result.status === 'COMPLETED') {
      await sendTrainingEmail({
        type: 'SUCCESS',
        customerEmail: email,
        customerName: name,
        amount: amount.toString(),
        currency: currency || 'USD',
      });
      return NextResponse.json({ success: true, data: response.result });
    } else {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('PayPal Order capture failed:', error);
    return NextResponse.json(
      { error: 'Failed to capture order' },
      { status: 500 }
    );
  }
}
