import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions légales — L'Écrin d'Acier",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-base font-semibold text-(--text) mb-3">{title}</h2>
    <div className="text-(--muted) text-sm leading-relaxed space-y-1">{children}</div>
  </div>
);

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-(--bg) pt-24">
      <div className="bg-white border-b border-(--border) py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-(--text) mb-4">Mentions légales</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">

        <Section title="Éditeur du site">
          <p>L'Écrin d'Acier</p>
          <p>Leugny, 86220, France</p>
          <p>SIRET : 942 949 470</p>
          <p>Téléphone : <a href="tel:0619641902" className="text-(--gold) hover:underline">06 19 64 19 02</a></p>
          <p>Gérant : Gilles BERTON</p>
        </Section>

        <Section title="Hébergement">
          <p>
            Ce site est hébergé par{' '}
            <a href="https://zapia.fr" target="_blank" rel="noopener noreferrer" className="text-(--gold) hover:underline">
              zapia.fr
            </a>
          </p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logos) est la propriété exclusive de L'Écrin d'Acier,
            sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </Section>

        <Section title="Réalisation">
          <p>
            Site réalisé par{' '}
            <a href="https://zapia.fr" target="_blank" rel="noopener noreferrer" className="text-(--gold) hover:underline">
              zapia.fr
            </a>
          </p>
        </Section>

        <Section title="Données personnelles">
          <p>
            Les informations collectées via les formulaires de ce site sont destinées exclusivement à L'Écrin d'Acier
            et ne sont pas transmises à des tiers. Conformément à la loi Informatique et Libertés et au RGPD,
            vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant
            par téléphone ou courrier.
          </p>
        </Section>

        <Section title="Cookies">
          <p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire n'est utilisé.</p>
        </Section>

      </div>
    </div>
  );
}
