'use client';

const inputClass = "w-full px-4 py-3 bg-white border border-(--border) rounded-lg text-(--text) text-sm placeholder-[var(--subtle)] focus:outline-none focus:border-(--gold-mid) transition-colors";
const labelClass = "block text-(--muted) text-xs font-medium uppercase tracking-wider mb-2";

export default function ContactForm() {
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
        <label className={labelClass}>Téléphone</label>
        <input type="tel" className={inputClass} placeholder="06 xx xx xx xx" />
      </div>

      <div>
        <label className={labelClass}>Sujet *</label>
        <select className={inputClass} required>
          <option value="">Sélectionnez un sujet</option>
          <option value="info">Demande d'informations</option>
          <option value="commande">Passer une commande</option>
          <option value="devis">Demande de devis</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          rows={5}
          className={inputClass}
          placeholder="Décrivez votre demande..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-(--navy) text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity"
      >
        Envoyer le message
      </button>

      <p className="text-center text-xs text-(--subtle)">
        En envoyant ce formulaire, vous acceptez d'être recontacté par L'Écrin d'Acier.
      </p>
    </form>
  );
}
