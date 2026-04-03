import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karvio | IT Support & Karriereberatung Schweiz",
  description:
    "Karvio bietet IT Support, Bewerbungsservice und Karrierebegleitung in der Schweiz. Lebenslauf, Lehrstellenbewerbung und digitale Kompetenz – persönlich und professionell.",
  keywords: [
    "IT Support Schweiz",
    "Karriereberatung Schweiz",
    "Bewerbungsservice Schweiz",
    "Lebenslauf schreiben lassen",
    "Lehrstelle Bewerbung Hilfe",
    "Digitale Kompetenzen Kurs",
    "ATS Lebenslauf Schweiz",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://karvio.ch",
  },
  openGraph: {
    title: "Karvio | IT Support & Karriereberatung Schweiz",
    description: "Persönliche IT- und Karriereberatung in der Schweiz. Wir begleiten Sie vom ersten Gespräch bis zum Ziel.",
    url: "https://karvio.ch",
    type: "website",
    locale: "de_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YL51RXTY6P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YL51RXTY6P');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
