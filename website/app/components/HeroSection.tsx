import Link from 'next/link';
import { Shield, Lock, Award, Truck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--gold-light) text-(--gold) text-xs font-medium tracking-wider uppercase mb-8">
          <Award size={12} />
          Fabricant français depuis 1983
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) mb-6 leading-tight tracking-tight">
          La sécurité,{' '}
          <span className="text-(--gold) underline decoration-wavy decoration-1 underline-offset-4">
            discrète
          </span>{' '}
          et efficace
        </h1>

        <p className="text-(--muted) text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Mini coffres muraux conçus et fabriqués en France — discrets, robustes, fiables. Simplicité, discrétion, efficacité.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link
            href="/produits"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-(--navy) text-white font-semibold rounded text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <Lock size={15} />
            Découvrir nos coffres
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-(--border) text-(--muted) font-semibold rounded text-sm tracking-wide hover:border-(--navy) hover:text-(--text) transition-colors"
          >
            Nous contacter
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {[
            { icon: Shield, label: 'Paiement sécurisé' },
            { icon: Truck, label: 'Livraison rapide' },
            { icon: Award, label: 'Fabrication française' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-(--border) bg-(--bg) text-sm text-(--muted)">
              <Icon size={14} className="text-(--gold)" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
