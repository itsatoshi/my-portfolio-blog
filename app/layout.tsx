import type { Metadata } from 'next';
import { Providers } from './providers';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, Flex } from '@chakra-ui/react';
import './globals.css';

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
