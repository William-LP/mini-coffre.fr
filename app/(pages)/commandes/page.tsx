import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Truck, CreditCard, Phone, Check } from 'lucide-react';
import CommandeForm from './CommandeForm';
import { models } from './models';


const steps = [
  { num: '1', title: 'Remplissez le formulaire', desc: 'Choisissez votre modèle et indiquez vos coordonnées.' },
  { num: '2', title: 'Confirmation sous 24h', desc: 'Nous vous recontactons pour confirmer et convenir du paiement.' },
  { num: '3', title: 'Paiement sécurisé', desc: 'Règlement par virement bancaire ou autre moyen à convenir.' },
  { num: '4', title: 'Livraison rapide', desc: 'Expédition dans les meilleurs délais avec suivi de colis.' },
];

export default function CommandesPage() {
  return (
    <div className="min-h-screen bg-(--bg) pt-24">
      {/* Hero */}
      <div className="bg-white border-b border-(--border) py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-(--text) mb-4">Passer commande</h1>
          <p className="text-(--muted) text-base leading-relaxed">
            Sélectionnez votre modèle et remplissez le formulaire. Nous traiterons votre commande dans les meilleurs délais.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="p-5 rounded-xl border border-(--border) bg-white">
              <div className="w-8 h-8 rounded-full bg-(--navy) text-white flex items-center justify-center text-sm font-bold mb-4">
                {num}
              </div>
              <h3 className="text-(--text) font-semibold text-sm mb-1.5">{title}</h3>
              <p className="text-(--muted) text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Form + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="p-8 rounded-xl border border-(--border) bg-white">
              <h2 className="text-xl font-bold text-(--text) mb-6">Formulaire de commande</h2>

              <CommandeForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="p-6 rounded-xl border border-(--border) bg-white">
              <h3 className="text-(--text) font-semibold mb-4 text-sm">Nos garanties</h3>
              <ul className="space-y-3">
                {[
                  { icon: CreditCard, text: 'Paiement 100% sécurisé' },
                  { icon: Truck, text: 'Livraison rapide en France' },
                  { icon: Shield, text: 'Fabrication française' },
                  { icon: Phone, text: 'Support téléphonique' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-(--muted) text-sm">
                    <Check size={13} className="text-(--gold) shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-(--gold-mid)/30 bg-(--gold-light)">
              <h3 className="text-(--text) font-semibold mb-2 text-sm">Besoin d'aide ?</h3>
              <p className="text-(--muted) text-xs mb-4 leading-relaxed">
                Notre équipe est disponible pour vous conseiller sur le modèle le plus adapté.
              </p>
              <a href="tel:0619641902" className="flex items-center gap-2 text-(--gold) text-sm font-medium">
                <Phone size={14} />
                06 19 64 19 02
              </a>
            </div>

            <div className="p-6 rounded-xl border border-(--border) bg-white">
              <h3 className="text-(--text) font-semibold mb-3 text-sm">Nos modèles</h3>
              <ul className="space-y-2">
                {models.map(({ id, name, icon: Icon }) => (
                  <li key={id} className="flex items-center gap-2 text-(--muted) text-xs">
                    <Icon size={11} className="text-(--gold) shrink-0" />
                    {name}
                  </li>
                ))}
              </ul>
              <Link href="/produits" className="mt-4 block text-(--gold) text-xs font-medium hover:underline">
                Voir les détails des produits →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
