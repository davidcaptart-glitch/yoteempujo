import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yo Te Empujo | Imparables — Salidas inclusivas en la montaña",
  description:
    "Organizamos salidas a la montaña con joëlette para que cualquier persona, independientemente de su movilidad, pueda disfrutar de la naturaleza. Únete como Imparable o voluntario.",
  keywords: [
    "joëlette",
    "senderismo inclusivo",
    "movilidad reducida",
    "voluntariado montaña",
    "imparables",
    "yo te empujo",
  ],
  openGraph: {
    title: "Yo Te Empujo | Imparables",
    description: "Salidas inclusivas en la naturaleza para que nadie se quede fuera.",
    siteName: "Yo Te Empujo",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
