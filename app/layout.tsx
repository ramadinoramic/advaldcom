import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const siteUrl = 'https://advald.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Advald — Acquisition infrastructure for iGaming',
  description:
    'Media, tracking, and AI automation operated as one system. Performance marketing for iGaming operators, affiliates, and performance brands.',
  openGraph: {
    title: 'Advald — Acquisition infrastructure for iGaming',
    description:
      'Media, tracking, and AI automation operated as one system. Performance marketing for iGaming operators, affiliates, and performance brands.',
    url: siteUrl,
    siteName: 'Advald',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Advald — Acquisition infrastructure for iGaming',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advald — Acquisition infrastructure for iGaming',
    description:
      'Media, tracking, and AI automation operated as one system.',
    images: ['/og.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FAFAF7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans bg-bg text-ink">
        {children}
        <Script
          defer
          data-domain="advald.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
