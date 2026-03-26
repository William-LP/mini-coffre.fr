'use client';

import { Lock } from 'lucide-react';
import { models } from './models';

const inputClass = "w-full px-4 py-3 bg-white border border-(--border) rounded-lg text-(--text) text-sm placeholder-[var(--subtle)] focus:outline-none focus:border-(--gold-mid) transition-colors";
const labelClass = "block text-(--muted) text-xs font-medium uppercase tracking-wider mb-2";

export default function CommandeForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Prénom *</label>
          <input type="text" className={inputClass} placeholder="Votre prénom" required />
        </div>
        <div>
          <label className={labelClass}>Nom *</label>
          <input type="text" className={inputClass} placeholder="Votre nom" required />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input type="email" className={inputClass} placeholder="votre@email.fr" required />
      </div>

      <div>
        <label className={labelClass}>Téléphone *</label>
        <input type="tel" className={inputClass} placeholder="06 xx xx xx xx" required />
      </div>

      <div>
        <label className={labelClass}>Modèle souhaité *</label>
        <select className={inputClass} required>
          <option value="">Choisissez un modèle</option>
          {models.map(m => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Quantité</label>
        <input type="number" min="1" max="10" defaultValue="1" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Adresse de livraison *</label>
        <textarea rows={3} className={inputClass} placeholder="Rue, code postal, ville..." required />
      </div>

      <div>
        <label className={labelClass}>Message ou remarques</label>
        <textarea rows={3} className={inputClass} placeholder="Informations complémentaires..." />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-(--navy) text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <Lock size={14} />
        Envoyer ma commande
      </button>
    </form>
  );
}
