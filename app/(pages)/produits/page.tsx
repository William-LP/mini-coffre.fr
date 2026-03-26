import { Metadata } from 'next';
import ProductsGrid, { type Product } from '@/app/components/ProductsGrid';

export const metadata: Metadata = {
  title: "Les Mini Coffres — L'Écrin d'Acier",
  description: "Découvrez notre gamme de mini coffres muraux discrets en Ø60mm et Ø100mm. Versions double bouton, triple bouton et à clé.",
};

const IMG = '/images/produits';

const products: Product[] = [
  {
    id: 1,
    diameter: 60,
    variant: 'Double bouton',
    shortDesc: 'Ouverture par 2 boutons simultanés',
    description: 'Le modèle Ø60mm double bouton est idéal pour une utilisation quotidienne. Son mécanisme simple à deux boutons simultanés garantit un accès rapide tout en offrant une sécurité satisfaisante.',
    features: ['2 boutons simultanés', 'Diamètre compact 60mm', 'Montage mural inclus', 'Acier traité'],
    image: `${IMG}/thumbnail_coffre120220929-88372-je5jor.jpeg`,
    images: [
      `${IMG}/thumbnail_coffre120220929-88372-je5jor.jpeg`,
      `${IMG}/dsc_067220220929-398019-2gw5m8.jpeg`,
      `${IMG}/dsc_067620220929-398019-1vdfipp.jpeg`,
      `${IMG}/dsc_066020220929-88372-p40g70.jpeg`,
    ],
  },
  {
    id: 2,
    diameter: 60,
    variant: 'Triple bouton',
    shortDesc: 'Sécurité renforcée par 3 boutons',
    description: 'La version triple bouton du Ø60mm offre un niveau de sécurité accru grâce à une combinaison à trois boutons. Plus de possibilités de combinaisons, donc une meilleure protection.',
    features: ['3 boutons simultanés', 'Plus de combinaisons', 'Diamètre compact 60mm', 'Acier traité'],
    image: `${IMG}/p102074120220929-398019-5rypon.jpeg`,
    images: [
      `${IMG}/p102074120220929-398019-5rypon.jpeg`,
      `${IMG}/p102070320220929-88372-1ajybeb.jpeg`,
      `${IMG}/p102064620220929-88372-1y2c3fu.jpeg`,
    ],
    popular: true,
  },
  {
    id: 3,
    diameter: 60,
    variant: 'À clé',
    shortDesc: 'Mécanisme classique et fiable',
    description: 'Le coffre Ø60mm à clé reprend le mécanisme classique de verrouillage. Robuste et éprouvé, c\'est la solution idéale pour ceux qui préfèrent une fermeture traditionnelle.',
    features: ['Serrure à clé', 'Mécanisme éprouvé', 'Diamètre compact 60mm', 'Acier traité'],
    image: `${IMG}/dsc_067920220929-398019-1n072cc.jpeg`,
    images: [
      `${IMG}/dsc_067920220929-398019-1n072cc.jpeg`,
      `${IMG}/dsc_068320220929-398019-h03vyt.jpeg`,
    ],
  },
  {
    id: 4,
    diameter: 100,
    variant: 'Double bouton',
    shortDesc: 'Grand format, accès rapide',
    description: 'Le Ø100mm double bouton offre une capacité de rangement plus importante. Idéal pour stocker des documents, bijoux ou objets de valeur de plus grande taille.',
    features: ['2 boutons simultanés', 'Diamètre large 100mm', 'Grande capacité', 'Acier traité'],
    image: `${IMG}/dsc_068720220929-88372-qey2vu.jpeg`,
    images: [
      `${IMG}/dsc_068720220929-88372-qey2vu.jpeg`,
      `${IMG}/dsc_071320220929-88372-1szv3dc.jpeg`,
      `${IMG}/dsc_070320220929-88372-ij5tx8.jpeg`,
    ],
    tag: 'Grand format',
  },
  {
    id: 5,
    diameter: 100,
    variant: 'Triple bouton',
    shortDesc: 'Sécurité maximale, grand volume',
    description: 'Notre modèle phare : le Ø100mm triple bouton combine le grand volume du format 100mm avec la sécurité renforcée du mécanisme à trois boutons.',
    features: ['3 boutons simultanés', 'Diamètre large 100mm', 'Capacité maximale', 'Acier haute résistance'],
    image: `${IMG}/dsc_070320220929-398019-tck0o6.jpeg`,
    images: [
      `${IMG}/dsc_070320220929-398019-tck0o6.jpeg`,
      `${IMG}/dsc_071920220929-398019-a7dxm8.jpeg`,
    ],
    popular: true,
    tag: 'Recommandé',
  },
  {
    id: 6,
    diameter: 100,
    variant: 'À clé',
    shortDesc: 'Grand coffre, fermeture traditionnelle',
    description: 'Le Ø100mm à clé est notre modèle le plus spacieux avec une fermeture classique. Solution robuste et durable pour ranger des objets de plus grande taille.',
    features: ['Serrure à clé', 'Diamètre large 100mm', 'Grande capacité', 'Acier traité'],
    image: `${IMG}/cimg173820220929-398019-nk83c2.jpeg`,
    images: [
      `${IMG}/cimg173820220929-398019-nk83c2.jpeg`,
    ],
  },
];

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
