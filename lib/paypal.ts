import paypal from '@paypal/checkout-server-sdk';

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'sb';
const clientSecret = process.env.PAYPAL_CLIENT_SECRET || 'sb';

// Use SandboxEnvironment for development, and LiveEnvironment for production
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export default client;
