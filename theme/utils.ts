import { useTheme } from '@chakra-ui/react';

// Hook to access theme values easily
export const useCustomTheme = () => {
  const theme = useTheme();
  return theme;
};

// Color palette helpers
export const brandColors = {
  primary: 'brand.500',
  primaryHover: 'brand.600',
  primaryActive: 'brand.700',
  primaryLight: 'brand.50',
  secondary: 'accent.500',
  secondaryHover: 'accent.600',
  text: 'gray.800',
  textSecondary: 'gray.600',
  textMuted: 'gray.500',
  background: 'gray.50',
  backgroundWhite: 'white',
  border: 'gray.200',
} as const;

// Common spacing values
export const spacing = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 20,
  '4xl': 24,
} as const;

// Common shadow values
export const shadows = {
  card: 'card',
  cardHover: 'cardHover',
  subtle: 'sm',
  medium: 'md',
  strong: 'lg',
} as const;

// Responsive breakpoints helper
export const breakpoints = {
  mobile: 'base',
  tablet: 'md',
  desktop: 'lg',
  wide: 'xl',
} as const;

// Animation durations
export const transitions = {
  fast: '0.1s',
  normal: '0.2s',
  slow: '0.3s',
  slower: '0.5s',
} as const;

// Common component sizes
export const sizes = {
  button: {
    small: 'sm',
    medium: 'md',
    large: 'lg',
  },
  heading: {
    small: 'sm',
    medium: 'lg',
    large: 'xl',
    extraLarge: '2xl',
  },
} as const; 