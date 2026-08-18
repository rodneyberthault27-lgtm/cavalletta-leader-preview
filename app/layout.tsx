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
    default: "Cavalletta Leader | Scooters e Motos Elétricas em São Paulo",
    template: "%s | Cavalletta Leader",
  },
  description:
    "Conheça scooters, motos, triciclos e bicicletas elétricas Cavalletta com test-drive, WhatsApp e atendimento na Galeria Extra Ricardo Jafet, loja 26.",
  keywords: [
    "Cavalletta Leader",
    "Cavalletta São Paulo",
    "scooter elétrica",
    "moto elétrica",
    "bicicleta elétrica",
    "triciclo elétrico",
    "Cavalletta C12",
    "Cavalletta C3 Pro",
    "Cavalletta T3",
    "Cavalletta AE8",
    "moto elétrica sem CNH",
    "Galeria Extra Ricardo Jafet",
  ],
  applicationName: "Cavalletta Leader",
  authors: [{ name: "Cavalletta Leader" }],
  creator: "Cavalletta Leader",
  publisher: "Cavalletta Leader",
  category: "Mobilidade elétrica",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Cavalletta Leader",
    title: "Cavalletta Leader | Scooters e Motos Elétricas em São Paulo",
    description:
      "Portfólio Cavalletta Leader com C3 Pro, T3, AE8, C12 e C15, fotos oficiais, test-drive e atendimento pelo WhatsApp.",
    images: [
      {
        url: "/campaign/c3-pro-urban-hero.png",
        width: 1672,
        height: 941,
        alt: "Cavalletta C3 Pro em mobilidade urbana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cavalletta Leader | Mobilidade elétrica com atitude",
    description:
      "Scooters, motos, triciclos e bikes elétricas Cavalletta com test-drive e atendimento em São Paulo.",
    images: ["/campaign/c3-pro-urban-hero.png"],
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
