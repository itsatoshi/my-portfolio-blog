'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import { brandColors, spacing } from '../theme/utils';
import ColorShowcase from './components/ColorShowcase';
import TestFont from './test-font';

export default function Home() {
  const cardStyles = {
    bg: 'white',
    borderRadius: 'xl',
    boxShadow: 'card',
    p: 6,
    transition: 'all 0.3s ease-in-out',
    _hover: {
      boxShadow: 'cardHover',
      transform: 'translateY(-4px)',
    },
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={spacing.xl} align="center" py={16}>
        {/* Color Showcase */}
        <ColorShowcase />
        
        {/* Font Test Section */}
        <TestFont />
        
        {/* Original Content */}
        <Box textAlign="center">
          <Heading variant="primary" size="2xl" mb={4}>
            Welcome to My Portfolio Blog
          </Heading>
          <Text variant="subtitle" maxW="2xl">
            A modern portfolio blog built with Next.js, Chakra UI, and a
            sophisticated muted earth tone palette featuring custom typography
          </Text>
        </Box>

        {/* Technology Stack */}
        <VStack spacing={spacing.md}>
          <Heading variant="secondary" size="lg">
            Technology Stack
          </Heading>
          <HStack spacing={spacing.sm} flexWrap="wrap" justify="center">
            <Button variant="solid" size="sm">
              React 19
            </Button>
            <Button variant="earth" size="sm">
              Next.js 15
            </Button>
            <Button variant="sage" size="sm">
              Chakra UI
            </Button>
            <Button variant="outline" size="sm">
              TypeScript
            </Button>
          </HStack>
        </VStack>

        {/* Call to Action */}
        <HStack spacing={spacing.md}>
          <Button variant="solid" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            View Portfolio
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}
