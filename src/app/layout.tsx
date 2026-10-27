import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HONG TET ENGINEERING (S) PTE. LTD. | Metal Fabrication & Roofing Singapore",
    template: "%s | HONG TET ENGINEERING (S) PTE. LTD.",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Hong Tet Engineering",
    "Metal Fabrication Singapore",
    "Structural Steel Fabrication Singapore",
    "I-Beam Installation Singapore",
    "Roofing Contractor Singapore",
    "Stainless Steel Railings Singapore",
    "Architectural Glass Installation Singapore",
    "Commercial Renovation Singapore",
    "Skilled Manpower Supply Singapore",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "HONG TET ENGINEERING (S) PTE. LTD. | Metal Fabrication & Roofing Singapore",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_SG",
    type: "website",
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1200,
        height: 630,
        alt: "Hong Tet Engineering Singapore Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HONG TET ENGINEERING (S) PTE. LTD. | Engineering Services Singapore",
    description: siteConfig.description,
    images: [siteConfig.assets.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html
      lang="en-SG"
      className={cn("h-full", "antialiased", roboto.variable)}
    >
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLMs.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className={cn("min-h-full flex flex-col font-sans", roboto.className)}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
