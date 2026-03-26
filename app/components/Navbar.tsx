'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: "L'Écrin d'Acier" },
  { href: '/produits', label: 'Les Mini Coffres' },
  { href: '/commandes', label: 'Commandes' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm border-b border-(--border)' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      {/* Top info bar */}
      <div className="bg-(--navy) py-1.5 px-4 text-center text-xs text-white/80 hidden md:block">
        <div className="flex items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone size={11} />
            06 19 64 19 02
          </span>
          <span className="opacity-50">|</span>
          <span>Fabricant français depuis 1983 · Paiement sécurisé · Livraison rapide</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-(--navy) flex items-center justify-center">
              <Shield size={18} className="text-(--gold-mid)" fill="currentColor" />
            </div>
            <div className="leading-tight">
              <div className="text-(--text) font-bold text-sm tracking-widest uppercase">L'Écrin</div>
              <div className="text-(--gold) font-bold text-xs tracking-[0.3em] uppercase">d'Acier</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-(--muted) hover:text-(--text) transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-(--navy) text-white text-sm font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-(--text) p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-(--border) px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-(--muted) hover:text-(--text) hover:bg-(--bg) rounded transition-all duration-200 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block text-center px-5 py-3 bg-(--navy) text-white font-semibold rounded text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
