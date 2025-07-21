'use client';

import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import { mutedColors } from '../../theme/utils';

export default function ColorShowcase() {
  const colorPalette = [
    {
      name: 'Dusty Rose',
      hex: mutedColors.dustyRose,
      description: 'Muted pinkish-purple (Brand Primary)',
    },
    {
      name: 'Blush Brown',
      hex: mutedColors.blushBrown,
      description: 'Muted brownish-pink (Accent)',
    },
    {
      name: 'Warm Bronze',
      hex: mutedColors.warmBronze,
      description: 'Muted golden-brown (Earth)',
    },
    {
      name: 'Olive Buff',
      hex: mutedColors.oliveBuff,
      description: 'Muted olive-yellow (Sage)',
    },
    {
      name: 'Sage Mist',
      hex: mutedColors.sageMist,
      description: 'Muted sage green (Neutral)',
    },
  ];

  return (
    <VStack spacing={8} align="stretch" p={6}>
      <Box>
        <Heading size="lg" mb={4} color="brand.600">
          Warm Golden-Pink Palette
        </Heading>
        <Text color="neutral.700" fontSize="md" lineHeight="tall">
          A sophisticated collection of warm, muted tones that blend golden
          browns with dusty pinks and sage greens. This palette evokes comfort,
          elegance, and natural warmth.
        </Text>
      </Box>

      {/* Color Swatches */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {colorPalette.map((color) => (
          <Box
            key={color.name}
            borderWidth="1px"
            borderColor="neutral.200"
            borderRadius="lg"
            overflow="hidden"
            shadow="subtle"
          >
            <Box
              bg={color.hex}
              h="120px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color={color.hex === mutedColors.dustyRose ? 'white' : 'black'}
                fontWeight="bold"
                fontSize="lg"
                textShadow="0 1px 2px rgba(0,0,0,0.1)"
              >
                {color.hex.toUpperCase()}
              </Text>
            </Box>
            <Box p={4} bg="white">
              <Text fontWeight="semibold" color="gray.800" mb={1}>
                {color.name}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {color.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Component Examples */}
      <Box>
        <Heading size="md" mb={4} color="brand.600">
          Components with New Palette
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {/* Primary Button Examples */}
          <Box
            borderWidth="1px"
            borderColor="neutral.200"
            borderRadius="lg"
            p={4}
          >
            <Text fontSize="sm" color="neutral.600" mb={3}>
              Button Variants:
            </Text>
            <VStack spacing={3} align="start">
              <Button variant="solid" colorScheme="brand">
                Dusty Rose Primary
              </Button>
              <Button variant="outline" colorScheme="brand">
                Outlined Button
              </Button>
              <Button variant="ghost" colorScheme="brand">
                Ghost Button
              </Button>
              <Button variant="earth">Warm Bronze Earth</Button>
              <Button variant="sage">Olive Buff Sage</Button>
            </VStack>
          </Box>

          {/* Heading Examples */}
          <Box
            borderWidth="1px"
            borderColor="neutral.200"
            borderRadius="lg"
            p={4}
          >
            <Text fontSize="sm" color="neutral.600" mb={3}>
              Heading Variants:
            </Text>
            <VStack spacing={3} align="start">
              <Heading size="md" variant="primary">
                Primary Heading
              </Heading>
              <Heading size="md" variant="secondary">
                Secondary Heading
              </Heading>
              <Heading size="md" variant="earth">
                Earth Tone Heading
              </Heading>
              <Heading size="md" variant="sage">
                Sage Heading
              </Heading>
            </VStack>
          </Box>

          {/* Text Examples */}
          <Box
            borderWidth="1px"
            borderColor="neutral.200"
            borderRadius="lg"
            p={4}
          >
            <Text fontSize="sm" color="neutral.600" mb={3}>
              Text Examples:
            </Text>
            <VStack spacing={2} align="start">
              <Text variant="subtitle" color="brand.600">
                Subtitle in dusty rose
              </Text>
              <Text variant="body">
                Body text using the new warm palette creates a cozy,
                sophisticated feel.
              </Text>
              <Text variant="caption" color="neutral.600">
                Caption text in muted sage tones
              </Text>
            </VStack>
          </Box>

          {/* Card Example */}
          <Box
            borderWidth="1px"
            borderColor="neutral.200"
            borderRadius="lg"
            p={4}
          >
            <Text fontSize="sm" color="neutral.600" mb={3}>
              Card Example:
            </Text>
            <Box
              bg="brand.50"
              borderColor="brand.200"
              borderWidth="1px"
              borderRadius="md"
              p={4}
            >
              <Heading size="sm" color="brand.700" mb={2}>
                Warm Palette Card
              </Heading>
              <Text fontSize="sm" color="brand.600">
                This card showcases the gentle, warm tones of the new palette.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Color Philosophy */}
      <Box
        bg="neutral.50"
        borderWidth="1px"
        borderColor="neutral.200"
        borderRadius="lg"
        p={6}
      >
        <Heading size="md" mb={4} color="brand.600">
          Palette Philosophy
        </Heading>
        <Text color="neutral.700" lineHeight="tall">
          This warm golden-pink palette creates an atmosphere of comfort and
          sophistication. The dusty rose brings gentle elegance, while the warm
          bronze and olive tones ground the palette in natural, earthy warmth.
          The sage mist provides a calming balance, making this perfect for
          creative portfolios that want to feel both professional and
          approachable. The overall effect is cozy yet refined - like a warm
          sunset over autumn fields.
        </Text>
      </Box>
    </VStack>
  );
}
