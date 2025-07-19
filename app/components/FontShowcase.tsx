'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function FontShowcase() {
  return (
    <VStack spacing={6} align="start" p={6} bg="white" borderRadius="xl" boxShadow="card">
      <Heading variant="secondary" size="lg">
        Font Showcase
      </Heading>
      
      <Box>
        <Text fontSize="sm" color="gray.500" mb={2}>
          Heading Font (Inter):
        </Text>
        <Heading variant="primary" size="xl" fontFamily="heading">
          This is a heading using Inter font
        </Heading>
      </Box>

      <Box>
        <Text fontSize="sm" color="gray.500" mb={2}>
          Body Font (Kosugi Maru):
        </Text>
        <Text fontSize="lg" fontFamily="body">
          This is body text using Kosugi Maru font from Google Fonts. 
          This font has a friendly, rounded appearance that&apos;s perfect for 
          creating a welcoming and approachable feel in your portfolio blog.
        </Text>
        <Text fontSize="md" fontFamily="body" mt={2}>
          Here&apos;s some regular body text: Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Kosugi Maru provides excellent 
          readability while maintaining a unique character.
        </Text>
      </Box>

      <Box>
        <Text fontSize="sm" color="gray.500" mb={2}>
          Mono Font (JetBrains Mono):
        </Text>
        <Text fontFamily="mono" fontSize="md" bg="gray.50" p={3} borderRadius="md">
          const example = &quot;This is code using JetBrains Mono&quot;;
          <br />
          console.log(example);
        </Text>
      </Box>
    </VStack>
  );
} 