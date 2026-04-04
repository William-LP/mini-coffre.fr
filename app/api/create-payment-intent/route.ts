import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const MODEL_PRICES: Record<string, number> = {
  'c60-db': 4900,
  'c60-tb': 5900,
  'c60-cl': 5400,
  'c100-db': 7900,
  'c100-tb': 8900,
  'c100-cl': 8400,
};

export async function POST(request: Request) {
  const { modelId, quantity, email } = await request.json();

  const unitPrice = MODEL_PRICES[modelId];
  if (!unitPrice) {
    return Response.json({ error: 'Modèle inconnu' }, { status: 400 });
  }

  const amount = unitPrice * Math.max(1, Math.min(10, quantity));

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'eur',
    receipt_email: email || undefined,
  });

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
