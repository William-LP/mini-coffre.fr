import Link from 'next/link';
import Image from 'next/image';
import { Lock, ArrowRight } from 'lucide-react';
import { products } from '@/app/lib/products';

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
          {products.map(({ id, diameter, variant, shortDesc, image, tag }) => (
            <Link
              key={id}
              href="/produits"
              className="flex items-start gap-4 p-5 rounded-xl border border-(--border) bg-white hover:border-(--gold-mid)/40 hover:shadow-md transition-all duration-200"
            >
              <div className="relative w-14 h-14 rounded-lg shrink-0 overflow-hidden">
                <Image
                  src={image}
                  alt={`Mini coffre Ø ${diameter} mm ${variant}`}
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
                <div className="text-(--subtle) text-xs mb-1.5">Ø {diameter} mm</div>
                <p className="text-(--muted) text-sm leading-relaxed">{shortDesc}</p>
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
