'use client';

import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box as="header" bg="gray.100" py={4} shadow="sm">
      <Container maxW="container.xl">
        <Flex align="center">
          <Heading as="h1" size="lg" color="gray.800">
            My Portfolio Blog
          </Heading>
          <Spacer />
          {/* Navigation items can be added here */}
        </Flex>
      </Container>
    </Box>
  );
}
