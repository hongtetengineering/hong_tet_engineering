import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "HONG TET ENGINEERING (S) PTE. LTD. | Metal Fabrication & Roofing Singapore",
  description:
    "Reliable structural steel fabrication, I-beam installation, roofing, stainless-steel railings, architectural glass, renovation and skilled manpower supply in Singapore. Call +65 9898 9760.",
  keywords: [
    "Hong Tet Engineering",
    "Metal Fabrication Singapore",
    "Structural Steel Fabrication",
    "I-Beam Installation",
    "Roofing Contractor Singapore",
    "Stainless Steel Railings",
    "Glass Installation",
    "Manpower Supply Singapore",
  ],
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
    title:
      "HONG TET ENGINEERING (S) PTE. LTD. | Reliable Engineering Singapore",
    description:
      "Reliable engineering, metal fabrication, and construction solutions built to last in Singapore.",
    images: ["/logo/full-logo-transparent.webp"],
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", roboto.variable)}
    >
      <body className={cn("min-h-full flex flex-col font-sans", roboto.className)}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
