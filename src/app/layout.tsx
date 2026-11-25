import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.title}`,
  description: site.summary,
  authors: [{ name: site.name, url: site.github }],
  keywords: [
    "WordPress Engineer",
    "WordPress Developer",
    "Web Developer",
    "Kolawole Emmanuel",
    "Nigeria",
    "Portfolio",
  ],
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.summary,
    url: site.url,
    siteName: site.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.title}`,
    description: site.summary,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
