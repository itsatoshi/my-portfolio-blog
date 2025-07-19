import { ComponentStyleConfig } from '@chakra-ui/react';

// Button component styles
const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: 'lg',
    _focus: {
      boxShadow: 'outline',
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 2,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 3,
    },
    lg: {
      fontSize: 'lg',
      px: 8,
      py: 4,
    },
  },
  variants: {
    solid: {
      bg: 'brand.500',
      color: 'white',
      _hover: {
        bg: 'brand.600',
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      },
      _active: {
        bg: 'brand.700',
        transform: 'translateY(0)',
      },
      transition: 'all 0.2s',
    },
    outline: {
      border: '2px solid',
      borderColor: 'brand.500',
      color: 'brand.500',
      _hover: {
        bg: 'brand.50',
        transform: 'translateY(-1px)',
        boxShadow: 'md',
      },
      transition: 'all 0.2s',
    },
    ghost: {
      color: 'brand.500',
      _hover: {
        bg: 'brand.50',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

// Heading component styles
const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    lineHeight: 'shorter',
  },
  sizes: {
    xs: {
      fontSize: 'md',
    },
    sm: {
      fontSize: 'lg',
    },
    md: {
      fontSize: 'xl',
    },
    lg: {
      fontSize: '2xl',
    },
    xl: {
      fontSize: '3xl',
    },
    '2xl': {
      fontSize: '4xl',
    },
  },
  variants: {
    primary: {
      color: 'brand.600',
    },
    secondary: {
      color: 'gray.600',
    },
  },
  defaultProps: {
    size: 'md',
  },
};

// Text component styles
const Text: ComponentStyleConfig = {
  baseStyle: {
    lineHeight: 'base',
  },
  variants: {
    body: {
      fontSize: 'md',
      color: 'gray.700',
    },
    caption: {
      fontSize: 'sm',
      color: 'gray.500',
    },
    subtitle: {
      fontSize: 'lg',
      color: 'gray.600',
      fontWeight: 'medium',
    },
  },
  defaultProps: {
    variant: 'body',
  },
};

// Container component styles
const Container: ComponentStyleConfig = {
  baseStyle: {
    maxW: '7xl',
    px: { base: 4, md: 6, lg: 8 },
  },
};

// Box component styles (can be used for custom cards)
const Box: ComponentStyleConfig = {
  variants: {
    card: {
      bg: 'white',
      borderRadius: 'xl',
      boxShadow: 'card',
      p: 6,
      transition: 'all 0.3s ease-in-out',
      _hover: {
        boxShadow: 'cardHover',
        transform: 'translateY(-4px)',
      },
    },
  },
};

export const components = {
  Button,
  Heading,
  Text,
  Container,
  Box,
}; 