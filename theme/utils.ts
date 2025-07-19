import { useTheme } from '@chakra-ui/react';

// Direct access to muted warm tone colors
export const mutedColors = {
  dustyRose: '#795e6b', // Muted pinkish-purple
  blushBrown: '#9c7e7d', // Muted brownish-pink
  warmBronze: '#b18c65', // Muted golden-brown
  oliveBuff: '#bdb37e', // Muted olive-yellow
  sageMist: '#adb89b', // Muted sage green
  white: '#ffffff',
  black: '#000000',
};

// Brand color shortcuts
export const brandColors = {
  primary: mutedColors.dustyRose,
  accent: mutedColors.blushBrown,
  earth: mutedColors.warmBronze,
  sage: mutedColors.oliveBuff,
  neutral: mutedColors.sageMist,
  background: mutedColors.white,
  text: mutedColors.black,
};

// Spacing constants
export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
};

// Shadow presets
export const shadows = {
  subtle:
    '0 1px 3px 0 rgba(121, 94, 107, 0.1), 0 1px 2px 0 rgba(121, 94, 107, 0.06)',
  medium:
    '0 4px 6px -1px rgba(121, 94, 107, 0.1), 0 2px 4px -1px rgba(121, 94, 107, 0.06)',
  large:
    '0 10px 15px -3px rgba(121, 94, 107, 0.1), 0 4px 6px -2px rgba(121, 94, 107, 0.05)',
  xl: '0 20px 25px -5px rgba(121, 94, 107, 0.1), 0 10px 10px -5px rgba(121, 94, 107, 0.04)',
};

// Breakpoints
export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
};

// Transition presets
export const transitions = {
  fast: '150ms ease-in-out',
  medium: '250ms ease-in-out',
  slow: '350ms ease-in-out',
};

// Size constants
export const sizes = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  button: {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
  },
};

// Color palette helpers
export const getColorPalette = () => ({
  warm: {
    dustyRose: mutedColors.dustyRose,
    blushBrown: mutedColors.blushBrown,
    warmBronze: mutedColors.warmBronze,
    oliveBuff: mutedColors.oliveBuff,
    sageMist: mutedColors.sageMist,
  },
  neutral: {
    white: mutedColors.white,
    black: mutedColors.black,
  },
});

// Hook to access custom theme
export const useCustomTheme = () => {
  const theme = useTheme();
  return theme;
};
