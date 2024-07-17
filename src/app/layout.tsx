import "@/style/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CSPostHogProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const space_grotesk = Space_Grotesk({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title:
    "Pymeforma Studio - Tu Puerta Digital a la Excelencia en Redes Sociales",
  description:
    "Pymeforma Studio se especializa en crear contenido visual impresionante para Facebook e Instagram, y en diseñar sitios web personalizados con un enfoque en el diseño y la funcionalidad.",
  keywords: [
    "redes sociales",
    "diseño de sitios web",
    "estudio digital",
    "marketing en Facebook",
    "creación de contenido en Instagram",
  ],
  authors: [{ name: "Pymeforma Studio", url: "https://pymeforma.com" }],
  openGraph: {
    type: "website",
    url: "https://pymeforma.com",
    title: "Pymeforma Studio - Creatividad Digital Desatada",
    description:
      "Eleva la presencia en línea de tu marca con nuestras expertas estrategias en redes sociales e innovadores diseños de sitios web.",
    siteName: "Pymeforma Studio",
    images: [
      {
        url: "https://pymeforma.com/pymeforma-studio-og.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <CSPostHogProvider>
        <body className={`${inter.variable} ${space_grotesk.variable}`}>
          {children}
          {/* Vercel Analytics */}
          <Analytics />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
