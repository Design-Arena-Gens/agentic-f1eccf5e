import type { Metadata } from 'next';
import './globals.css';
import { Inter, Cinzel } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Shattered Realms — Fantasy Roguelite RPG',
  description:
    'Descend into ever-shifting dungeons, forge powerful builds, and defy fate in a handcrafted fantasy roguelite.',
  openGraph: {
    title: 'Shattered Realms — Fantasy Roguelite RPG',
    description:
      'Descend into ever-shifting dungeons, forge powerful builds, and defy fate in a handcrafted fantasy roguelite.',
    url: 'https://agentic-f1eccf5e.vercel.app',
    siteName: 'Shattered Realms',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Shattered Realms — Fantasy Roguelite RPG'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shattered Realms — Fantasy Roguelite RPG',
    description:
      'Descend into ever-shifting dungeons, forge powerful builds, and defy fate in a handcrafted fantasy roguelite.'
  },
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
