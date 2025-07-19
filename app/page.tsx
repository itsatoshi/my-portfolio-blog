'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="center" py={16}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Portfolio Blog
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl">
            A modern portfolio blog built with Next.js, Chakra UI, and the
            latest React technologies
          </Text>
        </Box>

        <VStack spacing={4}>
          <Text fontSize="lg" fontWeight="medium">
            Technologies used in this project:
          </Text>
          <HStack spacing={4} flexWrap="wrap" justify="center">
            <Button colorScheme="blue" variant="outline" size="sm">
              React 19
            </Button>
            <Button colorScheme="blue" variant="outline" size="sm">
              Next.js 15
            </Button>
            <Button colorScheme="blue" variant="outline" size="sm">
              Chakra UI
            </Button>
            <Button colorScheme="blue" variant="outline" size="sm">
              TypeScript
            </Button>
            <Button colorScheme="blue" variant="outline" size="sm">
              React Query
            </Button>
            <Button colorScheme="blue" variant="outline" size="sm">
              React Hook Form
            </Button>
            <Button colorScheme="blue" variant="outline" size="sm">
              Playwright
            </Button>
          </HStack>
        </VStack>

        <HStack spacing={4}>
          <Button colorScheme="blue" size="lg">
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
