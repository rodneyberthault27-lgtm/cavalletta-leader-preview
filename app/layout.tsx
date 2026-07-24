import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cavalletta-leader.rodead.chatgpt.site"),
  title: {
    default: "Cavalletta Leader | Scooters e Motos Eletricas em Sao Paulo",
    template: "%s | Cavalletta Leader",
  },
  description:
    "Compre scooters, motos, triciclos e bicicletas eletricas Cavalletta com test-drive, WhatsApp e atendimento na Galeria Extra Ricardo Jafet, loja 26.",
  keywords: [
    "Cavalletta Leader",
    "Cavalletta Sao Paulo",
    "scooter eletrica",
    "moto eletrica",
    "bicicleta eletrica",
    "triciclo eletrico",
    "Cavalletta C12",
    "Cavalletta C3 Pro",
    "Cavalletta T3",
    "moto eletrica sem CNH",
    "Galeria Extra Ricardo Jafet",
  ],
  applicationName: "Cavalletta Leader",
  authors: [{ name: "Cavalletta Leader" }],
  creator: "Cavalletta Leader",
  publisher: "Cavalletta Leader",
  category: "Mobilidade eletrica",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Cavalletta Leader",
    title: "Cavalletta Leader | Scooters e Motos Eletricas em Sao Paulo",
    description:
      "Vitrine premium Cavalletta com C3 Pro, C12, C15, T3, bicicletas eletricas, test-drive e atendimento pelo WhatsApp.",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C3proproduct-1.jpg?v=1783566490",
        width: 1000,
        height: 1000,
        alt: "Scooter eletrica Cavalletta C3 Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cavalletta Leader | Mobilidade eletrica com atitude",
    description:
      "Scooters, motos, triciclos e bikes eletricas Cavalletta com test-drive e atendimento em Sao Paulo.",
    images: ["https://cdn.shopify.com/s/files/1/0584/7826/4380/files/C3proproduct-1.jpg?v=1783566490"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
