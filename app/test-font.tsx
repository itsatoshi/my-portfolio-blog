'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function TestFont() {
  return (
    <VStack spacing={6} p={6} align="start">
      <Heading size="lg">Complete Font System Test</Heading>
      
      {/* Heading Font Tests */}
      <Box>
        <Text fontSize="sm" color="neutral.600" mb={3}>
          Heading Font - Sora:
        </Text>
        <VStack align="start" spacing={2}>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontSize: '2rem', fontWeight: 100 }}>
            Thin Heading (100)
          </div>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontSize: '1.875rem', fontWeight: 200 }}>
            Extra Light Heading (200)
          </div>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontSize: '1.75rem', fontWeight: 300 }}>
            Light Heading (300)
          </div>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontSize: '1.625rem', fontWeight: 400 }}>
            Regular Heading (400)
          </div>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontSize: '1.5rem', fontWeight: 500 }}>
            Medium Heading (500)
          </div>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontSize: '1.375rem', fontWeight: 600 }}>
            Semi-bold Heading (600)
          </div>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontSize: '1.25rem', fontWeight: 700 }}>
            Bold Heading (700)
          </div>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontSize: '1.125rem', fontWeight: 800 }}>
            Extra Bold Heading (800)
          </div>
        </VStack>
      </Box>

      {/* Chakra Heading Tests */}
      <Box>
        <Text fontSize="sm" color="neutral.600" mb={3}>
          Chakra Headings with Sora:
        </Text>
        <VStack align="start" spacing={2}>
          <Heading as="h1" size="2xl" variant="primary">
            Primary Heading H1
          </Heading>
          <Heading as="h2" size="xl" variant="secondary">
            Secondary Heading H2
          </Heading>
          <Heading as="h3" size="lg" variant="earth">
            Earth Heading H3
          </Heading>
          <Heading as="h4" size="md" variant="sage">
            Sage Heading H4
          </Heading>
        </VStack>
      </Box>
      
      {/* Body Font Tests */}
      <Box>
        <Text fontSize="sm" color="neutral.600" mb={3}>
          Body Font - Zen Maru Gothic:
        </Text>
        <VStack align="start" spacing={1}>
          <div style={{ fontFamily: 'var(--font-zen-maru-gothic)', fontWeight: 300 }}>
            Light (300): やさしい雰囲気のフォント - Gentle atmosphere font
          </div>
          <div style={{ fontFamily: 'var(--font-zen-maru-gothic)', fontWeight: 400 }}>
            Regular (400): Standard readable body text for paragraphs
          </div>
          <div style={{ fontFamily: 'var(--font-zen-maru-gothic)', fontWeight: 500 }}>
            Medium (500): Slightly emphasized content text
          </div>
          <div style={{ fontFamily: 'var(--font-zen-maru-gothic)', fontWeight: 700 }}>
            Bold (700): Strong emphasis for important content
          </div>
        </VStack>
      </Box>

      {/* Chakra Body Text Tests */}
      <Box>
        <Text fontSize="sm" color="neutral.600" mb={3}>
          Chakra Text with Zen Maru Gothic:
        </Text>
        <VStack align="start" spacing={2}>
          <Text variant="subtitle">
            This is subtitle text - larger and medium weight
          </Text>
          <Text variant="body">
            This is standard body text using Zen Maru Gothic. It should be friendly and approachable while maintaining excellent readability for longer content.
          </Text>
          <Text variant="caption">
            This is caption text - smaller and muted for secondary information
          </Text>
        </VStack>
      </Box>

      {/* Font Pairing Demo */}
      <Box borderWidth="1px" borderColor="neutral.200" borderRadius="lg" p={4} bg="neutral.50">
        <Heading size="lg" mb={3} fontFamily="heading">
          Modern Tech Sophistication
        </Heading>
        <Text fontFamily="body" fontSize="md" lineHeight="tall">
          The combination of Sora for headings and Zen Maru Gothic for body text creates a contemporary startup-inspired typography system. Sora&apos;s clean geometric character brings modern tech elegance and precision to headings, while Zen Maru Gothic maintains friendly approachability and excellent readability for body content. This pairing is perfect for tech professionals, startups, designers, and anyone building a modern, forward-thinking digital presence.
        </Text>
      </Box>
    </VStack>
  );
} 