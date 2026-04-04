import Link from 'next/link';
import { Calendar, User, MapPin, ArrowRight } from 'lucide-react';

const stats = [
  { value: '40+', label: 'Années d\'expérience' },
  { value: '6', label: 'Modèles disponibles' },
  { value: '100%', label: 'Fabrication française' },
  { value: '3', label: 'Types de fermeture' },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-(--bg)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-(--text) mb-5 leading-tight">
              L'Écrin d'Acier,{' '}
              <span className="text-(--gold)">votre partenaire sécurité</span>
            </h2>

            <div className="space-y-4 text-(--muted) text-sm leading-relaxed mb-7">
              <p>
                Fondée en 1983 par Michel SOULIER, L'Écrin d'Acier est une entreprise française spécialisée dans la conception et la fabrication de mini coffres muraux discrets.
              </p>
              <p>
                Depuis 2009, Gilles BERTON perpétue cette tradition d'excellence artisanale, mariant robustesse de l'acier et discrétion du design.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-7">
              {[
                { icon: Calendar, label: 'Fondée', value: '1983' },
                { icon: User, label: 'Gérant', value: 'G. BERTON' },
                { icon: MapPin, label: 'Localisation', value: 'Leugny, 86' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="p-4 rounded-xl border border-(--border) bg-white text-center">
                  <Icon size={14} className="text-(--gold) mx-auto mb-2" />
                  <div className="text-(--subtle) text-xs mb-1">{label}</div>
                  <div className="text-(--text) font-semibold text-sm">{value}</div>
                </div>
              ))}
            </div>

            <Link
              href="/a-propos"
              className="inline-flex items-center gap-1.5 text-(--gold) hover:text-(--gold)/80 text-sm font-medium transition-colors group"
            >
              En savoir plus
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="p-8 rounded-xl border border-(--border) bg-white flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl font-bold text-(--navy) mb-2">{value}</div>
                <div className="text-(--muted) text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
