import "@/style/globals.css";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Pymeforma Studio - Your Digital Gateway to Social Media Excellence",
  description:
    "Pymeforma Studio specializes in creating stunning visual content for Facebook and Instagram, and crafting bespoke websites with a focus on design and functionality.",
  keywords: [
    "social media",
    "website design",
    "digital studio",
    "Facebook marketing",
    "Instagram content creation",
  ],
  authors: [{ name: "Pymeforma Studio", url: "https://pymeforma.com" }],
  openGraph: {
    type: "website",
    url: "https://pymeforma.com",
    title: "Pymeforma Studio - Digital Creativity Unleashed",
    description:
      "Elevate your brand's online presence with our expert social media strategies and innovative website designs.",
    siteName: "Pymeforma Studio",
    images: [
      {
        url: "https://pymeforma.com/og.png",
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
    <html lang="es">
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
