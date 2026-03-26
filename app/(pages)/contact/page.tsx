import { Metadata } from 'next';
import { Phone, MapPin, Clock, Shield } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Contact — L'Écrin d'Acier",
  description: "Contactez L'Écrin d'Acier pour toute question sur nos mini coffres muraux.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-(--bg) pt-24">
      {/* Hero */}
      <div className="bg-white border-b border-(--border) py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-(--text) mb-4">Contact</h1>
          <p className="text-(--muted) text-base leading-relaxed">
            Une question ? Vous souhaitez commander ? Notre équipe vous répond rapidement.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Coordonnées */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-(--text) mb-6">Nos coordonnées</h2>

            {[
              {
                icon: Phone,
                title: 'Téléphone',
                content: '06 19 64 19 02',
                link: 'tel:0619641902',
                sub: 'Du lundi au vendredi',
              },
              {
                icon: MapPin,
                title: 'Adresse',
                content: 'Leugny, 86220, France',
                link: null,
                sub: 'Vienne, Nouvelle-Aquitaine',
              },
              {
                icon: Clock,
                title: 'Horaires',
                content: 'Lun–Ven : 9h–18h',
                link: null,
                sub: 'Réponse sous 24–48h',
              },
              {
                icon: Shield,
                title: 'SIRET',
                content: '942 949 470',
                link: null,
                sub: 'Entreprise française certifiée',
              },
            ].map(({ icon: Icon, title, content, link, sub }) => (
              <div key={title} className="p-5 rounded-xl border border-(--border) bg-white flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-(--gold-light) flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-(--gold)" />
                </div>
                <div>
                  <div className="text-(--muted) text-xs mb-1">{title}</div>
                  {link ? (
                    <a href={link} className="text-(--text) font-medium text-sm hover:text-(--gold) transition-colors">
                      {content}
                    </a>
                  ) : (
                    <div className="text-(--text) font-medium text-sm">{content}</div>
                  )}
                  <div className="text-(--subtle) text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-xl border border-(--border) bg-white">
              <h2 className="text-xl font-bold text-(--text) mb-6">Envoyer un message</h2>

              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
