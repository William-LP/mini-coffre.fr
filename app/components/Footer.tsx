import Link from 'next/link';
import { Shield, Phone, MapPin, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-(--navy) text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-(--gold-mid)/20 flex items-center justify-center border border-(--gold-mid)/30">
                <Shield size={20} className="text-(--gold-mid)" fill="currentColor" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-base tracking-widest uppercase">L'Écrin</div>
                <div className="text-(--gold-mid) font-bold text-xs tracking-[0.3em] uppercase">d'Acier</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-5">
              Fabricant français de mini coffres muraux discrets depuis 1983.
              Simplicité, discrétion et efficacité.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
              <Phone size={14} className="text-(--gold-mid)" />
              <a href="tel:0619641902" className="hover:text-white transition-colors">06 19 64 19 02</a>
            </div>
            <div className="flex items-start gap-2 text-white/60 text-sm">
              <MapPin size={14} className="text-(--gold-mid) mt-0.5 shrink-0" />
              <span>Leugny, 86220, France</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-5 text-white/80">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/a-propos', label: "L'Écrin d'Acier" },
                { href: '/produits', label: 'Les Mini Coffres' },
                { href: '/commandes', label: 'Commandes' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-5 text-white/80">Informations</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/mentions-legales" className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2">
                  <FileText size={13} />
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/plan-du-site" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                  Plan du site
                </Link>
              </li>
            </ul>
            <div className="space-y-1.5 text-xs text-white/35">
              <div>SIRET : 942 949 470</div>
              <div>Fondée en 1983 par Michel SOULIER</div>
              <div>Gérant : Gilles BERTON (depuis 2009)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>© {new Date().getFullYear()} L'Écrin d'Acier — Tous droits réservés</span>
          <span>Site réalisé par <a href="https://zapia.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">zapia.fr</a></span>
          <span className="flex items-center gap-1.5">
            <Shield size={11} className="text-(--gold-mid)" />
            Paiement 100% sécurisé
          </span>
        </div>
      </div>
    </footer>
  );
}
