import Stripe from 'stripe';
import { checkRateLimit } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

const MODEL_PRICES: Record<string, number> = {
  'c60-db': 4900,
  'c60-tb': 5900,
  'c60-cl': 5400,
  'c100-db': 7900,
  'c100-tb': 8900,
  'c100-cl': 8400,
};

export async function POST(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = (forwarded ? forwarded.split(',')[0].trim() : null)
    ?? request.headers.get('x-real-ip')
    ?? 'unknown';

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: 'Trop de tentatives. Veuillez patienter avant de réessayer.' },
      { status: 429, headers: { 'Retry-After': '60' } },
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const { modelId, quantity, email } = await request.json();

  const unitPrice = MODEL_PRICES[modelId];
  if (!unitPrice) {
    return Response.json({ error: 'Modèle inconnu' }, { status: 400 });
  }

  const clampedQuantity = Math.max(1, Math.min(10, quantity));
  const amount = unitPrice * clampedQuantity;

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'eur',
    receipt_email: email || undefined,
    metadata: {
      modelId,
      quantity: String(clampedQuantity),
    },
  });

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
