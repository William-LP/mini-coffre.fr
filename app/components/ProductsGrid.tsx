'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

export type Product = {
  id: number;
  diameter: number;
  variant: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
  images: string[];
  popular?: boolean;
  tag?: string;
};

function Carousel({ product, onClose }: { product: Product; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const images = product.images;

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-(--border)">
          <div>
            <p className="text-xs text-(--gold) font-medium uppercase tracking-wider">Ø {product.diameter} mm</p>
            <h3 className="font-bold text-(--text) text-lg">{product.variant}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-(--bg) flex items-center justify-center text-(--muted) hover:text-(--text) transition-colors"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-4/3 bg-(--bg)">
          <Image
            key={images[current]}
            src={images[current]}
            alt={`${product.variant} — photo ${current + 1}`}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 672px"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full shadow flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full shadow flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 px-6 py-3 border-t border-(--border) overflow-x-auto">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setCurrent(i)}
                className={`relative shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                  i === current ? 'border-(--gold-mid)' : 'border-(--border) opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={src}
                  alt={`Miniature ${i + 1}`}
                  fill
                  className="object-contain p-1"
                  sizes="56px"
                />
              </button>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-4 border-t border-(--border) flex items-center justify-between gap-4">
          <p className="text-(--muted) text-sm">{product.shortDesc}</p>
          <Link
            href="/commandes"
            className="shrink-0 px-5 py-2 bg-(--navy) text-white text-sm font-semibold rounded hover:opacity-90 transition-opacity"
          >
            Commander
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <div
      className={`relative bg-white rounded-xl border flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md cursor-pointer ${
        product.popular ? 'border-(--gold-mid)' : 'border-(--border)'
      }`}
      onClick={onOpen}
    >
      {product.popular && (
        <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-(--navy) text-white text-xs font-bold rounded-full">
          {product.tag || 'Populaire'}
        </div>
      )}
      {product.tag && !product.popular && (
        <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-(--bg) text-(--muted) text-xs rounded-full border border-(--border)">
          {product.tag}
        </div>
      )}
      {product.images.length > 1 && (
        <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-black/50 text-white text-xs rounded-full">
          {product.images.length} photos
        </div>
      )}

      <div className="relative w-full aspect-4/3 bg-(--bg)">
        <Image
          src={product.image}
          alt={`Mini coffre ${product.diameter}mm ${product.variant}`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-(--text) font-bold text-lg mb-1">{product.variant}</h3>
        <p className="text-(--gold) text-xs font-medium tracking-wider uppercase mb-3">{product.shortDesc}</p>
        <p className="text-(--muted) text-sm leading-relaxed mb-5 flex-1">{product.description}</p>

        <ul className="space-y-1.5 mb-5">
          {product.features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm text-(--muted)">
              <Check size={13} className="text-(--gold) shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <button
          className="w-full py-2.5 text-center bg-(--navy) text-white text-sm font-semibold rounded hover:opacity-90 transition-opacity"
          onClick={e => { e.stopPropagation(); onOpen(); }}
        >
          Voir les photos
        </button>
      </div>
    </div>
  );
}

export default function ProductsGrid({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<Product | null>(null);

  const small = products.filter(p => p.diameter === 60);
  const large = products.filter(p => p.diameter === 100);

  return (
    <>
      {selected && <Carousel product={selected} onClose={() => setSelected(null)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Ø 60 mm */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full border-2 border-(--gold-mid) bg-(--gold-light) flex items-center justify-center">
              <span className="text-(--gold) font-bold text-xs">Ø 60</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-(--text)">Format Compact — Ø 60 mm</h2>
              <p className="text-(--muted) text-sm">Discret, léger, idéal pour une installation invisible</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {small.map(product => (
              <ProductCard key={product.id} product={product} onOpen={() => setSelected(product)} />
            ))}
          </div>
        </div>

        {/* Ø 100 mm */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full border-2 border-(--navy)/40 bg-(--navy)/5 flex items-center justify-center">
              <span className="text-(--navy) font-bold text-xs">Ø 100</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-(--text)">Format Standard — Ø 100 mm</h2>
              <p className="text-(--muted) text-sm">Plus de capacité pour vos objets de valeur</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {large.map(product => (
              <ProductCard key={product.id} product={product} onOpen={() => setSelected(product)} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-(--navy) rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Vous avez des questions ?</h3>
          <p className="text-white/60 mb-7 max-w-md mx-auto text-sm">
            Notre équipe vous conseille sur le modèle le plus adapté à vos besoins.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/commandes"
              className="px-6 py-3 bg-(--gold-mid) text-(--navy) font-bold rounded text-sm hover:opacity-90 transition-opacity"
            >
              Commander
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Nous contacter <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
