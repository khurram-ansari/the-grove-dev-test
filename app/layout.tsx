import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import BaseHeader from '@/components/BaseHeader';
import BaseFooter from '@/components/BaseFooter';

const inter = Inter({ subsets: ['latin'] });

const fontSerif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'The Groves',
  description: 'Unforgettable experience in Saudi Arabia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased', inter.className, fontSerif.variable)}>
        <BaseHeader />
        {children}
        <BaseFooter />
      </body>
    </html>
  );
}
