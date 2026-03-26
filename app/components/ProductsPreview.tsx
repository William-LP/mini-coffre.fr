import Link from 'next/link';
import Image from 'next/image';
import { Lock, ArrowRight } from 'lucide-react';

const IMG = '/images/produits';

const products = [
  { id: 1, diameter: 'Ø 60 mm', variant: 'Double bouton', description: 'Ouverture par 2 boutons simultanés. Accès rapide et discret.', image: `${IMG}/thumbnail_coffre120220929-88372-je5jor.jpeg`, tag: 'Compact' },
  { id: 2, diameter: 'Ø 60 mm', variant: 'Triple bouton', description: 'Sécurité renforcée par une combinaison à 3 boutons.', image: `${IMG}/p102074120220929-398019-5rypon.jpeg`, tag: 'Populaire' },
  { id: 3, diameter: 'Ø 60 mm', variant: 'À clé', description: 'Mécanisme classique à clé. Robuste et fiable.', image: `${IMG}/dsc_067920220929-398019-1n072cc.jpeg`, tag: '' },
  { id: 4, diameter: 'Ø 100 mm', variant: 'Double bouton', description: 'Grand format double bouton. Capacité augmentée.', image: `${IMG}/dsc_068720220929-88372-qey2vu.jpeg`, tag: 'Grand format' },
  { id: 5, diameter: 'Ø 100 mm', variant: 'Triple bouton', description: 'Grand volume + combinaison triple bouton. Protection optimale.', image: `${IMG}/dsc_070320220929-398019-tck0o6.jpeg`, tag: 'Recommandé' },
  { id: 6, diameter: 'Ø 100 mm', variant: 'À clé', description: 'Grand coffre à clé pour objets de taille plus importante.', image: `${IMG}/cimg173820220929-398019-nk83c2.jpeg`, tag: '' },
];

export default function ProductsPreview() {
  return (
    <section className="py-20 bg-(--bg)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-(--text)">Les Mini Coffres</h2>
            <p className="text-(--muted) mt-1 text-sm">6 modèles en deux formats, trois types de fermeture</p>
          </div>
          <Link
            href="/produits"
            className="flex items-center gap-1.5 text-sm text-(--gold) hover:text-(--gold)/80 transition-colors group font-medium"
          >
            Voir tous les détails
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(({ id, diameter, variant, description, image, tag }) => (
            <Link
              key={id}
              href="/produits"
              className="flex items-start gap-4 p-5 rounded-xl border border-(--border) bg-white hover:border-(--gold-mid)/40 hover:shadow-md transition-all duration-200"
            >
              <div className="relative w-14 h-14 rounded-lg shrink-0 overflow-hidden">
                <Image
                  src={image}
                  alt={`Mini coffre ${diameter} ${variant}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-(--text) font-semibold text-sm">{variant}</span>
                  {tag && (
                    <span className="px-2 py-0.5 bg-(--navy)/10 text-(--navy) text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  )}
                </div>
                <div className="text-(--subtle) text-xs mb-1.5">{diameter}</div>
                <p className="text-(--muted) text-sm leading-relaxed">{description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/commandes"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-(--navy) text-white font-semibold rounded text-sm hover:opacity-90 transition-opacity"
          >
            <Lock size={14} />
            Commander maintenant
          </Link>
        </div>
      </div>
    </section>
  );
}
