// Base muted warm tones
const baseColors = {
  dustyRose: '#795e6b', // Muted pinkish-purple (brand primary)
  blushBrown: '#9c7e7d', // Muted brownish-pink (accent)
  warmBronze: '#b18c65', // Muted golden-brown (earth)
  oliveBuff: '#bdb37e', // Muted olive-yellow (sage)
  sageMist: '#adb89b', // Muted sage green (neutral)
  pureWhite: '#ffffff', // Pure white
  deepBlack: '#000000', // Pure black
};

// Generate color scales for each base color
const generateColorScale = (baseHex: string) => {
  // Convert hex to HSL for manipulation
  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h * 360, s * 100, l * 100];
  };

  const hslToHex = (h: number, s: number, l: number) => {
    h /= 360;
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h * 12) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const [h, s, l] = hexToHsl(baseHex);

  return {
    50: hslToHex(h, Math.max(s - 40, 10), Math.min(l + 35, 95)),
    100: hslToHex(h, Math.max(s - 30, 15), Math.min(l + 25, 85)),
    200: hslToHex(h, Math.max(s - 20, 20), Math.min(l + 15, 75)),
    300: hslToHex(h, Math.max(s - 10, 25), Math.min(l + 8, 65)),
    400: hslToHex(h, s, Math.min(l + 3, 55)),
    500: baseHex,
    600: hslToHex(h, Math.min(s + 5, 80), Math.max(l - 8, 25)),
    700: hslToHex(h, Math.min(s + 10, 85), Math.max(l - 15, 20)),
    800: hslToHex(h, Math.min(s + 15, 90), Math.max(l - 25, 15)),
    900: hslToHex(h, Math.min(s + 20, 95), Math.max(l - 35, 10)),
  };
};

export const colors = {
  // Brand colors (Dusty Rose - muted pinkish-purple)
  brand: generateColorScale(baseColors.dustyRose),

  // Accent colors (Blush Brown - muted brownish-pink)
  accent: generateColorScale(baseColors.blushBrown),

  // Earth colors (Warm Bronze - muted golden-brown)
  earth: generateColorScale(baseColors.warmBronze),

  // Sage colors (Olive Buff - muted olive-yellow)
  sage: generateColorScale(baseColors.oliveBuff),

  // Neutral colors (Sage Mist - muted sage green)
  neutral: generateColorScale(baseColors.sageMist),

  // Portfolio-specific color extensions
  portfolio: {
    background: baseColors.pureWhite,
    surface: '#faf9f8',
    onSurface: baseColors.deepBlack,
    primary: baseColors.dustyRose,
    onPrimary: baseColors.pureWhite,
    secondary: baseColors.blushBrown,
    onSecondary: baseColors.deepBlack,
    accent: baseColors.warmBronze,
    onAccent: baseColors.deepBlack,
    muted: baseColors.sageMist,
    onMuted: baseColors.deepBlack,
  },
};
