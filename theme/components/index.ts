import { ComponentStyleConfig } from '@chakra-ui/react';

// Button component styles updated with new palette
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
      color: 'brand.700',
      _hover: {
        bg: 'brand.50',
        borderColor: 'brand.600',
        transform: 'translateY(-1px)',
        boxShadow: 'md',
      },
      transition: 'all 0.2s',
    },
    ghost: {
      color: 'brand.600',
      _hover: {
        bg: 'brand.50',
        color: 'brand.700',
      },
    },
    // New earth tone variant
    earth: {
      bg: 'earth.500',
      color: 'white',
      _hover: {
        bg: 'earth.600',
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      },
      _active: {
        bg: 'earth.700',
        transform: 'translateY(0)',
      },
      transition: 'all 0.2s',
    },
    // New sage variant
    sage: {
      bg: 'sage.500',
      color: 'white',
      _hover: {
        bg: 'sage.600',
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      },
      _active: {
        bg: 'sage.700',
        transform: 'translateY(0)',
      },
      transition: 'all 0.2s',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

// Heading component styles updated
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
      color: 'neutral.700',
    },
    earth: {
      color: 'earth.600',
    },
    sage: {
      color: 'sage.600',
    },
  },
  defaultProps: {
    size: 'md',
  },
};

// Text component styles updated
const Text: ComponentStyleConfig = {
  baseStyle: {
    lineHeight: 'base',
  },
  variants: {
    body: {
      fontSize: 'md',
      color: 'neutral.700',
    },
    caption: {
      fontSize: 'sm',
      color: 'neutral.500',
    },
    subtitle: {
      fontSize: 'lg',
      color: 'neutral.600',
      fontWeight: 'medium',
    },
    muted: {
      fontSize: 'md',
      color: 'neutral.500',
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

// Box component styles (for custom cards)
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
    mutedCard: {
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