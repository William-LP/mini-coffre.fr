import { Shield, Eye, Zap, Wrench, Lock, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sécurité maximale',
    description: 'Acier traité haute résistance, conçu pour protéger vos objets de valeur avec une fiabilité éprouvée.',
  },
  {
    icon: Eye,
    title: 'Discrétion absolue',
    description: 'Design épuré, encombrement minimal. Installez votre coffre sans que personne ne le remarque.',
  },
  {
    icon: Zap,
    title: 'Simplicité d\'usage',
    description: 'Mécanisme intuitif en double-bouton, triple-bouton ou à clé. Accès rapide, sans compromis.',
  },
  {
    icon: Wrench,
    title: 'Montage facile',
    description: 'Installation murale simple, réalisable par tout bricoleur. Tout le matériel est fourni.',
  },
  {
    icon: Lock,
    title: 'Plusieurs modèles',
    description: 'Disponible en Ø 60mm et Ø 100mm pour s\'adapter à vos besoins.',
  },
  {
    icon: Star,
    title: 'Savoir-faire français',
    description: 'Conçu et fabriqué en France depuis 1983. Expertise artisanale transmise avec exigence.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-(--bg)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-(--text) mb-3">
            Pourquoi choisir L'Écrin d'Acier
          </h2>
          <p className="text-(--muted) max-w-xl mx-auto">
            Quatre décennies d'expertise au service de votre tranquillité d'esprit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 bg-white rounded-xl border border-(--border) hover:border-(--gold-mid)/50 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-(--gold-light) flex items-center justify-center mb-4">
                <Icon size={18} className="text-(--gold)" />
              </div>
              <h3 className="text-(--text) font-semibold mb-2">{title}</h3>
              <p className="text-(--muted) text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
