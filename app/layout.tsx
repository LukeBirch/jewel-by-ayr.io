import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://www.jewelbyayr.com"),
  title: {
    default: "Jewel by Ayr | Handmade Jewellery Inspired by Bali",
    template: "%s | Jewel by Ayr",
  },
  description:
    "Discover handmade jewellery crafted with natural stones and inspired by the beauty of Bali.",
  keywords: [
    "handmade jewellery",
    "natural stone jewellery",
    "Bali-inspired jewellery",
    "Jewel by Ayr",
  ],
  openGraph: {
    title: "Jewel by Ayr | Handmade Jewellery Inspired by Bali",
    description:
      "Handmade jewellery crafted with natural stones and inspired by Bali.",
    url: "https://www.jewelbyayr.com",
    siteName: "Jewel by Ayr",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
