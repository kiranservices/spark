import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site-data";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kiran Services | Workforce Solutions & Manpower Deployment",
    template: "%s | Kiran Services",
  },
  description: site.description,
  keywords: [
    "Kiran Services",
    "workforce solutions India",
    "manpower supply Andhra Pradesh",
    "staffing company",
    "industrial manpower",
    "PF ESI compliance",
  ],
  authors: [{ name: "Kiran Services" }],
  creator: "Kiran Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Kiran Services | India's Trusted Workforce Solutions Partner",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Services | Workforce Solutions",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phonePrimary,
  email: site.email,
  foundingDate: "2013",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42/347-28, Simhapuri Colony, Chinna Chowk",
    addressLocality: "Y.S.R District",
    addressRegion: "Andhra Pradesh",
    postalCode: "516002",
    addressCountry: "IN",
  },
  areaServed: "India",
  slogan: site.tagline,
  sameAs: [],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

