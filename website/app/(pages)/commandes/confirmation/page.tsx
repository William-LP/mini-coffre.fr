import Stripe from 'stripe';
import { ShieldCheck, XCircle } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function verifyPaymentIntent(paymentIntentId: string): Promise<boolean> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return paymentIntent.status === 'succeeded';
  } catch {
    return false;
  }
}

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{
    redirect_status?: string;
    payment_intent?: string;
    payment_intent_client_secret?: string;
  }>;
}) {
  const { redirect_status, payment_intent } = await searchParams;

  let success = false;
  if (redirect_status === 'succeeded' && payment_intent) {
    success = await verifyPaymentIntent(payment_intent);
  }

  return (
    <div className="min-h-screen bg-(--bg) pt-24 flex items-center justify-center px-4">
      <div className="max-w-md w-full p-10 rounded-xl border border-(--border) bg-white text-center">
        {success ? (
          <>
            <ShieldCheck size={48} className="text-(--gold) mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-(--text) mb-3">Merci pour votre commande&nbsp;!</h1>
            <p className="text-(--muted) text-sm leading-relaxed mb-8">
              Votre paiement a bien été reçu. Vous recevrez un email de confirmation sous peu. Notre équipe vous contactera pour organiser la livraison.
            </p>
          </>
        ) : (
          <>
            <XCircle size={48} className="text-red-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-(--text) mb-3">Paiement non abouti</h1>
            <p className="text-(--muted) text-sm leading-relaxed mb-8">
              Votre paiement n'a pas pu être traité. Aucun montant n'a été débité. Vous pouvez réessayer ou nous contacter.
            </p>
          </>
        )}
        <div className="flex flex-col gap-3">
          {!success && (
            <Link
              href="/commandes"
              className="py-3 bg-(--navy) text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Réessayer
            </Link>
          )}
          <Link
            href="/"
            className="py-3 border border-(--border) text-(--muted) rounded-lg text-sm hover:border-(--gold-mid) transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
