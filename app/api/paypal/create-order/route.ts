import { NextResponse } from 'next/server';
import paypal from '@paypal/checkout-server-sdk';
import client from '@/lib/paypal';
import { sendTrainingEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { amount, currency, email, name } = await req.json();

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency || 'USD',
            value: amount.toString(),
          },
        },
      ],
    });

    const response = await client.execute(request);

    // Send Payment Initiated Email
    await sendTrainingEmail({
      type: 'INITIATED',
      customerEmail: email,
      customerName: name,
      amount: amount.toString(),
      currency: currency || 'USD',
    });

    return NextResponse.json({ id: response.result.id });
  } catch (error: any) {
    console.error('PayPal Order creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
