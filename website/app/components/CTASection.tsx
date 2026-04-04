import Link from 'next/link';
import { Phone, Mail, Shield } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-(--navy)">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mx-auto mb-7">
          <Shield size={24} className="text-(--gold-mid)" />
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">
          Prêt à sécuriser vos objets de valeur ?
        </h2>
        <p className="text-white/60 text-base mb-9 max-w-xl mx-auto leading-relaxed">
          Contactez-nous pour plus d'informations sur nos modèles, tarifs et conditions de commande.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-(--gold-mid) text-(--navy) font-bold rounded text-sm hover:opacity-90 transition-opacity"
          >
            Contacter L'Écrin d'Acier
          </Link>
          <Link
            href="/produits"
            className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded text-sm hover:bg-white/10 transition-colors"
          >
            Voir les produits
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="tel:0619641902"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <Phone size={14} className="text-(--gold-mid)" />
            06 19 64 19 02
          </a>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <a
            href="mailto:contact@mini-coffre.fr"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <Mail size={14} className="text-(--gold-mid)" />
            contact@mini-coffre.fr
          </a>
        </div>
      </div>
    </section>
  );
}
