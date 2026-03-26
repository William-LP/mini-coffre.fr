import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Award, Users, MapPin, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "L'Écrin d'Acier — À propos",
  description: "Découvrez l'histoire de L'Écrin d'Acier, fabricant français de mini coffres muraux depuis 1983.",
};

const milestones = [
  {
    year: '1983',
    title: 'Fondation',
    description: 'Michel SOULIER fonde L\'Écrin d\'Acier à Leugny, dans la Vienne. La vision : créer des mini coffres discrets et fiables pour le marché français.',
  },
  {
    year: '1990s',
    title: 'Développement de la gamme',
    description: 'Extension de la gamme avec les premiers modèles Ø100mm et l\'introduction des différents types de fermeture.',
  },
  {
    year: '2009',
    title: 'Nouvelle direction',
    description: 'Gilles BERTON reprend la direction de l\'entreprise, poursuivant l\'héritage d\'excellence artisanale tout en modernisant les procédés de fabrication.',
  },
  {
    year: "Aujourd'hui",
    title: 'Continuation de l\'excellence',
    description: 'L\'Écrin d\'Acier continue de fabriquer ses coffres en France avec le même engagement envers la qualité et la fiabilité.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Sécurité avant tout',
    description: 'Chaque coffre est conçu avec une obsession pour la sécurité. Aucun compromis sur la qualité des matériaux et des mécanismes.',
  },
  {
    icon: Award,
    title: 'Savoir-faire artisanal',
    description: 'Quatre décennies d\'expertise transmises avec rigueur. Chaque pièce reflète un savoir-faire unique, né de l\'expérience et de la passion.',
  },
  {
    icon: Users,
    title: 'Service client',
    description: 'Petite entreprise à taille humaine, nous accordons une attention personnalisée à chaque client.',
  },
  {
    icon: MapPin,
    title: 'Made in France',
    description: 'Tous nos coffres sont conçus et fabriqués à Leugny, dans la Vienne, soutenant l\'industrie locale.',
  },
];

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-(--bg) pt-24">
      {/* Hero */}
      <div className="bg-white border-b border-(--border) py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-(--text) mb-4">L'Écrin d'Acier</h1>
          <p className="text-(--muted) text-base leading-relaxed">
            Fabricant français de mini coffres muraux depuis 1983. Une histoire de passion, de rigueur et d'engagement.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-2xl font-bold text-(--text) mb-5">
              Une entreprise familiale au service de votre sécurité
            </h2>
            <div className="space-y-4 text-(--muted) text-sm leading-relaxed">
              <p>
                L'Écrin d'Acier est née de la conviction que la sécurité ne devrait pas être visible. Nos mini coffres muraux sont conçus pour être discrets au point d'être invisibles, tout en offrant une protection réelle.
              </p>
              <p>
                Depuis plus de 40 ans, nous perfectionnons notre art. Chaque coffre qui sort de notre atelier de Leugny est le résultat de décennies d'expérience et d'un souci constant de la qualité.
              </p>
              <p>
                Notre philosophie tient en trois mots :{' '}
                <span className="text-(--gold) font-medium">Simplicité</span>,{' '}
                <span className="text-(--gold) font-medium">Discrétion</span> et{' '}
                <span className="text-(--gold) font-medium">Efficacité</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Calendar, label: 'Fondée en', value: '1983', sub: 'par Michel SOULIER' },
              { icon: MapPin, label: 'Basée à', value: 'Leugny', sub: 'Vienne, 86220' },
              { icon: Users, label: 'Direction', value: 'G. BERTON', sub: 'depuis 2009' },
              { icon: Award, label: 'Expertise', value: '40+ ans', sub: 'de fabrication' },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="p-5 rounded-xl border border-(--border) bg-white">
                <Icon size={16} className="text-(--gold) mb-3" />
                <div className="text-(--subtle) text-xs mb-1">{label}</div>
                <div className="text-(--text) font-bold text-lg mb-0.5">{value}</div>
                <div className="text-(--subtle) text-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>


        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-(--navy) text-white font-semibold rounded text-sm hover:opacity-90 transition-opacity"
          >
            Nous contacter <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
