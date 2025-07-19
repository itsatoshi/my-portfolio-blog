'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxW="container.lg" py={12}>
      <VStack spacing={8} textAlign="center">
        {/* Profile Image */}
        <Box
          position="relative"
          w={200}
          h={200}
          borderRadius="full"
          overflow="hidden"
          bgColor="earth.300"
          border="8px solid white"
          boxShadow="md"
          bgImage="url('/images/backgrounds/topography.svg')"
        >
          <Image
            src="/images/memoji.png"
            alt=""
            sizes="200px"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box>
          <Heading size="3xl" mb={4} color="brand.600">
            Welcome to My Portfolio
          </Heading>
          <Text fontSize="xl" color="neutral.700" maxW="2xl" lineHeight="tall">
            A modern portfolio blog built with Next.js, Chakra UI, and a
            carefully crafted design system featuring warm golden-pink tones and
            contemporary typography.
          </Text>
        </Box>

        <VStack spacing={4}>
          <Button as={Link} href="/design-system">
            View Design System
          </Button>

          <Text fontSize="sm" color="neutral.600">
            Explore our typography, color palette, and component library
          </Text>
        </VStack>

        <Box
          bg="neutral.50"
          border="1px solid"
          borderColor="neutral.200"
          borderRadius="lg"
          p={8}
          maxW="2xl"
        >
          <Heading size="lg" mb={4} color="brand.600">
            Built with Modern Tools
          </Heading>
          <VStack spacing={3} align="start">
            <Text color="neutral.700">
              <strong>Typography:</strong> Sora for headings, Zen Maru Gothic
              for body text
            </Text>
            <Text color="neutral.700">
              <strong>Colors:</strong> Warm golden-pink palette with dusty rose,
              warm bronze, and sage tones
            </Text>
            <Text color="neutral.700">
              <strong>Framework:</strong> Next.js 14 with App Router and
              TypeScript
            </Text>
            <Text color="neutral.700">
              <strong>UI Library:</strong> Chakra UI with custom theme system
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
