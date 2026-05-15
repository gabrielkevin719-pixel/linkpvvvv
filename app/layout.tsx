import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "linkpriv",
  description: "Mc Mirella - Conteúdo Exclusivo",
  openGraph: {
    title: "linkpriv",
    description: "Mc Mirella",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "linkpriv",
    description: "Mc Mirella",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body>{children}</body>
    </html>
  );
}
