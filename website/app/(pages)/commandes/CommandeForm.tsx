'use client';

import { useState } from 'react';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { models } from './models';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const MODEL_PRICES: Record<string, number> = {
  'c60-db': 49,
  'c60-tb': 59,
  'c60-cl': 54,
  'c100-db': 79,
  'c100-tb': 89,
  'c100-cl': 84,
};

const inputClass = "w-full px-4 py-3 bg-white border border-(--border) rounded-lg text-(--text) text-sm placeholder-[var(--subtle)] focus:outline-none focus:border-(--gold-mid) transition-colors";
const labelClass = "block text-(--muted) text-xs font-medium uppercase tracking-wider mb-2";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  modelId: string;
  quantity: number;
  address: string;
  message: string;
};

function PaymentStep({ formData, clientSecret, onBack }: {
  formData: FormData;
  clientSecret: string;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const model = models.find(m => m.id === formData.modelId);
  const unitPrice = MODEL_PRICES[formData.modelId] ?? 0;
  const total = unitPrice * formData.quantity;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setError(null);
    setPending(true);

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/commandes/confirmation`,
      },
    });

    if (stripeError) {
      setError(stripeError.message ?? 'Une erreur est survenue.');
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Order summary */}
      <div className="p-4 rounded-lg bg-(--gold-light) border border-(--gold-mid)/30 text-sm">
        <p className="text-(--muted) font-medium uppercase tracking-wider text-xs mb-2">Récapitulatif</p>
        <p className="text-(--text) font-semibold">{model?.name}</p>
        <p className="text-(--muted) text-xs mt-1">
          {formData.quantity} × {unitPrice} € = <span className="font-bold text-(--text)">{total} €</span>
        </p>
        <p className="text-(--muted) text-xs mt-1">{formData.firstName} {formData.lastName} — {formData.email}</p>
      </div>

      {/* Stripe card fields */}
      <div>
        <p className={labelClass}>Informations de paiement *</p>
        <div className="border border-(--border) rounded-lg p-4 bg-white">
          <PaymentElement />
        </div>
      </div>

      {error && (
        <div className="flex items-start gap-2 text-red-600 text-sm">
          <AlertCircle size={15} className="shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-3 border border-(--border) rounded-lg text-(--muted) text-sm hover:border-(--gold-mid) transition-colors"
        >
          Retour
        </button>
        <button
          type="submit"
          disabled={!stripe || pending}
          className="flex-1 py-3.5 bg-(--navy) text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <Lock size={14} />
          {pending ? 'Traitement...' : `Payer ${total} €`}
        </button>
      </div>
    </form>
  );
}

export default function CommandeForm() {
  const [step, setStep] = useState<'info' | 'payment'>('info');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    modelId: '',
    quantity: 1,
    address: '',
    message: '',
  });

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: field === 'quantity' ? Number(e.target.value) : e.target.value,
      }));
    };
  }

  async function handleInfoSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const res = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        modelId: formData.modelId,
        quantity: formData.quantity,
        email: formData.email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? 'Une erreur est survenue.');
      setPending(false);
      return;
    }

    setClientSecret(data.clientSecret);
    setStep('payment');
    setPending(false);
  }

  if (step === 'payment' && clientSecret) {
    return (
      <Elements stripe={stripePromise} options={{ clientSecret, locale: 'fr' }}>
        <PaymentStep
          formData={formData}
          clientSecret={clientSecret}
          onBack={() => { setStep('info'); setClientSecret(null); }}
        />
      </Elements>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleInfoSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Prénom *</label>
          <input type="text" className={inputClass} placeholder="Votre prénom" required value={formData.firstName} onChange={set('firstName')} />
        </div>
        <div>
          <label className={labelClass}>Nom *</label>
          <input type="text" className={inputClass} placeholder="Votre nom" required value={formData.lastName} onChange={set('lastName')} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input type="email" className={inputClass} placeholder="votre@email.fr" required value={formData.email} onChange={set('email')} />
      </div>

      <div>
        <label className={labelClass}>Téléphone *</label>
        <input type="tel" className={inputClass} placeholder="06 xx xx xx xx" required value={formData.phone} onChange={set('phone')} />
      </div>

      <div>
        <label className={labelClass}>Modèle souhaité *</label>
        <select className={inputClass} required value={formData.modelId} onChange={set('modelId')}>
          <option value="">Choisissez un modèle</option>
          {models.map(m => (
            <option key={m.id} value={m.id}>{m.name} — {MODEL_PRICES[m.id]} €</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Quantité</label>
        <input type="number" min="1" max="10" className={inputClass} value={formData.quantity} onChange={set('quantity')} />
      </div>

      <div>
        <label className={labelClass}>Adresse de livraison *</label>
        <textarea rows={3} className={inputClass} placeholder="Rue, code postal, ville..." required value={formData.address} onChange={set('address')} />
      </div>

      <div>
        <label className={labelClass}>Message ou remarques</label>
        <textarea rows={3} className={inputClass} placeholder="Informations complémentaires..." value={formData.message} onChange={set('message')} />
      </div>

      {error && (
        <div className="flex items-start gap-2 text-red-600 text-sm">
          <AlertCircle size={15} className="shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full py-3.5 bg-(--navy) text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {pending ? 'Chargement...' : (
          <>
            Continuer vers le paiement
            <ArrowRight size={14} />
          </>
        )}
      </button>
    </form>
  );
}
