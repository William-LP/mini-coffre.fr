import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L'Écrin d'Acier — Mini Coffres Muraux Français",
  description: "Fabricant français de mini coffres muraux discrets depuis 1983. Simplicité, discrétion et efficacité. Modèles Ø60mm et Ø100mm en double bouton, triple bouton ou à clé.",
  keywords: "mini coffre mural, coffre discret, sécurité maison, fabrication française, écrin acier",
  metadataBase: new URL('https://ecrin-acier.fr'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ background: 'var(--bg)' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
