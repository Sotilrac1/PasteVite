import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "PasteVite — Instant Text Snippets & Keyboard Extension",
  description:
    "PasteVite lets you create formatted text buttons to instantly paste repeated phrases, copy to clipboard, and type faster with the custom iOS keyboard extension.",
  metadataBase: new URL("https://pastevite.app"),
  openGraph: {
    title: "PasteVite — Instant Text Snippets & Keyboard Extension",
    description:
      "Create smart text buttons. Paste anything instantly — in any app.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PasteVite — Instant Text Snippets & Keyboard Extension",
    description: "Create smart text buttons. Paste anything instantly — in any app.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
