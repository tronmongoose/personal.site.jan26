import type { Metadata } from "next";
import "./globals.css";
import { content } from "@/content/content";

export const metadata: Metadata = {
  title: "Erik Huckle — Terminal Portfolio",
  description: content.profile.tagline,
  metadataBase: new URL("https://www.erikhuckle.com"),
  openGraph: {
    title: "Erik Huckle — Terminal Portfolio",
    description: content.profile.tagline,
    url: "https://www.erikhuckle.com",
    siteName: "Erik Huckle Portfolio",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Erik Huckle — Terminal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erik Huckle — Terminal Portfolio",
    description: content.profile.tagline,
    images: ["/og.svg"],
    creator: "@erikhuckle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
