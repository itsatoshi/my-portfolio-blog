import { useTheme } from '@chakra-ui/react';

// Hook to access theme values easily
export const useCustomTheme = () => {
  const theme = useTheme();
  return theme;
};

// Color palette helpers updated with new muted palette
export const brandColors = {
  // Primary brand colors (muted lavender)
  primary: 'brand.500',
  primaryHover: 'brand.600',
  primaryActive: 'brand.700',
  primaryLight: 'brand.50',
  
  // Secondary accent colors (muted taupe)
  secondary: 'accent.500',
  secondaryHover: 'accent.600',
  
  // Earth tone colors
  earth: 'earth.500',
  earthHover: 'earth.600',
  
  // Sage colors
  sage: 'sage.500',
  sageHover: 'sage.600',
  
  // Text colors
  text: 'neutral.800',
  textSecondary: 'neutral.600',
  textMuted: 'neutral.500',
  textContrast: 'black',
  
  // Background colors
  background: 'neutral.50',
  backgroundWhite: 'white',
  backgroundMuted: 'neutral.100',
  
  // Border colors
  border: 'neutral.200',
  borderMuted: 'neutral.300',
} as const;

// Muted color palette for direct access
export const mutedColors = {
  lavender: '#92898f',
  gray: '#a19799',
  taupe: '#a17f6f',
  olive: '#9e8962',
  sage: '#757a59',
  black: '#000000',
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