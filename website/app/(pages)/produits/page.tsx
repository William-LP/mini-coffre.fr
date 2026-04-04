import { Metadata } from 'next';
import ProductsGrid from '@/app/components/ProductsGrid';
import { products } from '@/app/lib/products';

export const metadata: Metadata = {
  title: "Les Mini Coffres — L'Écrin d'Acier",
  description: "Découvrez notre gamme de mini coffres muraux discrets en Ø60mm et Ø100mm. Versions double bouton, triple bouton et à clé.",
};

export default function ProduitsPage() {
  return (
    <div className="min-h-screen bg-(--bg) pt-24">
      {/* Hero */}
      <div className="bg-white border-b border-(--border) py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-(--text) mb-4">Les Mini Coffres</h1>
          <p className="text-(--muted) text-base leading-relaxed">
            6 modèles disponibles en deux diamètres et trois types de fermeture.
          </p>
        </div>
      </div>

      <ProductsGrid products={products} />
    </div>
  );
}
