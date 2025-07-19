import './globals.css';

import { Box, Flex } from '@chakra-ui/react';
import type { Metadata } from 'next';

import Footer from './components/Footer';
import Header from './components/Header';
import { Providers } from './providers';

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
    <html lang="en">
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
