import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s｜${siteConfig.siteName}`,
  },
  description: siteConfig.defaultDescription,
  keywords: siteConfig.seoKeywords,
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    images: [{ url: siteConfig.ogImage }],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#122142",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.company.name,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/images/og-default.jpg`,
  telephone: siteConfig.company.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.company.city,
    addressRegion: siteConfig.company.prefecture,
    streetAddress: siteConfig.company.addressLine,
    postalCode: siteConfig.company.postalCode,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-charcoal-dark focus:px-4 focus:py-2 focus:rounded-sm"
        >
          本文へスキップ
        </a>
        <MobileMenuProvider>
          <Header />
          <main id="main-content" className="pt-16 md:pt-[76px]">
            {children}
          </main>
          <Footer />
          <MobileBottomNav />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
