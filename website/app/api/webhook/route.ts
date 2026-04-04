import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('[webhook] STRIPE_WEBHOOK_SECRET is not set');
    return Response.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  // Must use raw text — HMAC signature is computed over the raw bytes.
  // Using request.json() would reconstruct the body and break signature verification.
  const rawBody = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return Response.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error(`[webhook] Signature verification failed: ${message}`);
    return Response.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  switch (event.type) {
    case 'payment_intent.succeeded': {
      const pi = event.data.object as Stripe.PaymentIntent;
      console.log('[webhook] payment_intent.succeeded', {
        id: pi.id,
        amount: pi.amount,
        currency: pi.currency,
        receipt_email: pi.receipt_email,
        metadata: pi.metadata,
        created: new Date(pi.created * 1000).toISOString(),
      });
      break;
    }

    case 'payment_intent.payment_failed': {
      const pi = event.data.object as Stripe.PaymentIntent;
      console.warn('[webhook] payment_intent.payment_failed', {
        id: pi.id,
        receipt_email: pi.receipt_email,
      });
      break;
    }

    default:
      break;
  }

  return Response.json({ received: true });
}
