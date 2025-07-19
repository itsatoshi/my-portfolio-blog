import './globals.css';

import { Box, Flex } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Lexend, Zen_Maru_Gothic } from 'next/font/google';

import Footer from './components/Footer';
import Header from './components/Header';
import { Providers } from './providers';

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-zen-maru-gothic',
  display: 'swap',
  preload: true,
});

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lexend',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'My Portfolio Blog',
  description: 'A modern portfolio blog built with Next.js and Chakra UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${zenMaruGothic.variable} ${lexend.variable}`}>
      <body>
        <Providers>
          <Flex direction="column" minHeight="100vh">
            <Header />
            <Box as="main" flex="1" py={8}>
              {children}
            </Box>
            <Footer />
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
