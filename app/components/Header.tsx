'use client';

import {
  Box,
  Container,
  Heading,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Header() {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="1px solid"
      borderColor="neutral.200"
      py={4}
    >
      <Container maxW="container.xl">
        <HStack justify="space-between" align="center">
          <ChakraLink as={Link} href="/">
            <Heading size="lg" color="brand.600">
              @itsatoshi
            </Heading>
          </ChakraLink>

          <HStack spacing={6}>
            <ChakraLink
              as={Link}
              href="/"
              color="neutral.700"
              _hover={{ color: 'brand.600' }}
              transition="color 0.2s"
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={Link}
              href="/design-system"
              color="neutral.700"
              _hover={{ color: 'brand.600' }}
              transition="color 0.2s"
            >
              Design System
            </ChakraLink>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
