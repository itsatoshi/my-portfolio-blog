'use client';

import { Box, Button,Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { mutedColors } from '../../theme/utils';

export default function ColorShowcase() {
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

  const mutedCardStyles = {
    bg: 'neutral.50',
    borderRadius: 'xl',
    border: '1px solid',
    borderColor: 'neutral.200',
    p: 6,
    transition: 'all 0.3s ease-in-out',
    _hover: {
      borderColor: 'brand.300',
      transform: 'translateY(-2px)',
      boxShadow: 'md',
    },
  };

  return (
    <VStack spacing={8} p={6} align="start" w="full">
      <Heading size="lg">Muted Earth Tone Palette</Heading>
      
      {/* Primary Color Swatches */}
      <Box w="full">
        <Text fontSize="sm" color="neutral.600" mb={4}>
          Primary Colors:
        </Text>
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4}>
          <VStack spacing={2}>
            <Box 
              w="16" h="16" 
              bg={mutedColors.lavender} 
              borderRadius="lg"
              border="1px solid"
              borderColor="neutral.200"
            />
            <Text fontSize="xs" color="neutral.600" textAlign="center">
              Lavender<br/>{mutedColors.lavender}
            </Text>
          </VStack>
          
          <VStack spacing={2}>
            <Box 
              w="16" h="16" 
              bg={mutedColors.gray} 
              borderRadius="lg"
              border="1px solid"
              borderColor="neutral.200"
            />
            <Text fontSize="xs" color="neutral.600" textAlign="center">
              Gray<br/>{mutedColors.gray}
            </Text>
          </VStack>
          
          <VStack spacing={2}>
            <Box 
              w="16" h="16" 
              bg={mutedColors.taupe} 
              borderRadius="lg"
              border="1px solid"
              borderColor="neutral.200"
            />
            <Text fontSize="xs" color="neutral.600" textAlign="center">
              Taupe<br/>{mutedColors.taupe}
            </Text>
          </VStack>
          
          <VStack spacing={2}>
            <Box 
              w="16" h="16" 
              bg={mutedColors.olive} 
              borderRadius="lg"
              border="1px solid"
              borderColor="neutral.200"
            />
            <Text fontSize="xs" color="neutral.600" textAlign="center">
              Olive<br/>{mutedColors.olive}
            </Text>
          </VStack>
          
          <VStack spacing={2}>
            <Box 
              w="16" h="16" 
              bg={mutedColors.sage} 
              borderRadius="lg"
              border="1px solid"
              borderColor="neutral.200"
            />
            <Text fontSize="xs" color="neutral.600" textAlign="center">
              Sage<br/>{mutedColors.sage}
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Component Examples */}
      <Box w="full">
        <Text fontSize="sm" color="neutral.600" mb={4}>
          Component Examples:
        </Text>
        <VStack spacing={4} align="start">
          {/* Headings */}
          <HStack spacing={4} flexWrap="wrap">
            <Heading variant="primary" size="md">Primary Heading</Heading>
            <Heading variant="earth" size="md">Earth Heading</Heading>
            <Heading variant="sage" size="md">Sage Heading</Heading>
          </HStack>
          
          {/* Buttons */}
          <HStack spacing={3} flexWrap="wrap">
            <Button variant="solid" size="sm">Brand Button</Button>
            <Button variant="earth" size="sm">Earth Button</Button>
            <Button variant="sage" size="sm">Sage Button</Button>
            <Button variant="outline" size="sm">Outline Button</Button>
          </HStack>
          
          {/* Text variants */}
          <VStack align="start" spacing={2}>
            <Text variant="body">Standard body text in the new muted theme</Text>
            <Text variant="subtitle">Subtitle text with medium emphasis</Text>
            <Text variant="caption">Caption text for secondary information</Text>
            <Text variant="muted">Muted text for less important content</Text>
          </VStack>
        </VStack>
      </Box>

      {/* Card Examples */}
      <Box w="full">
        <Text fontSize="sm" color="neutral.600" mb={4}>
          Card Styles:
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box sx={cardStyles}>
            <Heading size="sm" mb={2} variant="primary">Standard Card</Heading>
            <Text variant="body" fontSize="sm">
              Clean white card with subtle shadow and hover effects
            </Text>
          </Box>
          
          <Box sx={mutedCardStyles}>
            <Heading size="sm" mb={2} variant="earth">Muted Card</Heading>
            <Text variant="body" fontSize="sm">
              Soft neutral background with subtle border styling
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Palette Description */}
      <Box 
        w="full" 
        bg="neutral.50" 
        p={6} 
        borderRadius="xl"
        border="1px solid"
        borderColor="neutral.200"
      >
        <Heading size="md" mb={3} variant="primary">
          About This Palette
        </Heading>
        <Text variant="body" lineHeight="tall">
          This sophisticated earth tone palette features muted, calming colors that create 
          a professional yet approachable aesthetic. The lavender provides subtle warmth, 
          while the taupe, olive, and sage tones ground the palette in natural harmony. 
          Perfect for portfolios, blogs, and professional applications that need to convey 
          both creativity and reliability.
        </Text>
      </Box>
    </VStack>
  );
} 