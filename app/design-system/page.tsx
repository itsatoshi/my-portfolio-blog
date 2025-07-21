'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

import ColorShowcase from '../components/ColorShowcase';
import TestFont from '../test-font';

export default function DesignSystemPage() {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={12} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading size="2xl" mb={4} color="brand.600">
            Design System
          </Heading>
          <Text
            fontSize="lg"
            color="neutral.700"
            maxW="2xl"
            mx="auto"
            lineHeight="tall"
          >
            A comprehensive overview of our design system featuring typography,
            color palette, and component styles. Built with Chakra UI and
            optimized for modern web experiences.
          </Text>
        </Box>

        {/* Typography Section */}
        <Box>
          <Heading
            size="xl"
            mb={6}
            color="brand.600"
            borderBottom="2px solid"
            borderColor="brand.200"
            pb={2}
          >
            Typography
          </Heading>
          <TestFont />
        </Box>

        {/* Color System Section */}
        <Box>
          <Heading
            size="xl"
            mb={6}
            color="brand.600"
            borderBottom="2px solid"
            borderColor="brand.200"
            pb={2}
          >
            Color System
          </Heading>
          <ColorShowcase />
        </Box>

        {/* Component Guidelines */}
        <Box>
          <Heading
            size="xl"
            mb={6}
            color="brand.600"
            borderBottom="2px solid"
            borderColor="brand.200"
            pb={2}
          >
            Design Principles
          </Heading>
          <VStack spacing={6} align="stretch">
            <Box
              bg="brand.50"
              border="1px solid"
              borderColor="brand.200"
              borderRadius="lg"
              p={6}
            >
              <Heading size="md" mb={3} color="brand.700">
                Modern Warmth with Tech Precision
              </Heading>
              <Text color="brand.600" lineHeight="tall">
                Our design system combines the clean geometric precision of Sora
                typography with a warm golden-pink color palette. This creates a
                unique aesthetic that bridges cutting-edge technology with human
                warmth and comfort.
              </Text>
            </Box>

            <Box
              bg="neutral.50"
              border="1px solid"
              borderColor="neutral.200"
              borderRadius="lg"
              p={6}
            >
              <Heading size="md" mb={3} color="neutral.700">
                Accessibility First
              </Heading>
              <Text color="neutral.600" lineHeight="tall">
                All color combinations meet WCAG AA standards for contrast
                ratios. Typography is optimized for readability across all
                screen sizes, and interactive elements provide clear visual
                feedback.
              </Text>
            </Box>

            <Box
              bg="earth.50"
              border="1px solid"
              borderColor="earth.200"
              borderRadius="lg"
              p={6}
            >
              <Heading size="md" mb={3} color="earth.700">
                Flexible and Scalable
              </Heading>
              <Text color="earth.600" lineHeight="tall">
                Built with Chakra UI&apos;s theme system, our design tokens can
                be easily customized and extended. Component variants provide
                consistent styling while allowing for creative flexibility.
              </Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
