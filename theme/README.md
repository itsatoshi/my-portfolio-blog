# Theme Documentation

This directory contains the custom Chakra UI theme configuration for the portfolio blog.

## Structure

```
theme/
├── index.ts          # Main theme export
├── colors.ts         # Color palette
├── typography.ts     # Font and text styles
├── foundations/      # Basic design tokens
│   └── index.ts
├── components/       # Component style overrides
│   └── index.ts
├── utils.ts          # Theme utilities and helpers
└── README.md         # This file
```

## Usage

### Basic Usage

The theme is automatically applied through the `Providers` component in `app/providers.tsx`.

### Using Theme Values

```tsx
import { Box, Button, Heading } from '@chakra-ui/react';
import { brandColors, spacing, mutedColors } from '../theme/utils';

function MyComponent() {
  return (
    <Box bg={brandColors.background} p={spacing.md}>
      <Heading variant="primary" size="lg">
        Custom Themed Heading
      </Heading>
      <Button variant="earth" size="md">
        Earth Tone Button
      </Button>
    </Box>
  );
}
```

### Using Custom Component Variants

```tsx
// Use custom Box variants
<Box variant="card">
  <Heading variant="primary">Card Title</Heading>
  <Text variant="body">Card content</Text>
</Box>

<Box variant="mutedCard">
  <Heading variant="earth">Muted Card</Heading>
  <Text variant="muted">Subtle background card</Text>
</Box>

// Use new button variants
<Button variant="earth" size="lg">Earth Button</Button>
<Button variant="sage" size="lg">Sage Button</Button>
```

### Accessing Theme in JavaScript

```tsx
import { useCustomTheme, mutedColors } from '../theme/utils';

function MyComponent() {
  const theme = useCustomTheme();

  // Access theme colors
  const primaryColor = theme.colors.brand[500];
  const earthColor = theme.colors.earth[500];

  // Access muted colors directly
  const sageColor = mutedColors.sageMist;

  return <div>Component content</div>;
}
```

## Color Palette

### Warm Golden-Pink Palette

**Primary Colors:**

- **Dusty Rose**: `#795e6b` - Muted pinkish-purple (brand primary)
- **Blush Brown**: `#9c7e7d` - Muted brownish-pink (accent)
- **Warm Bronze**: `#b18c65` - Muted golden-brown (earth)
- **Olive Buff**: `#bdb37e` - Muted olive-yellow (sage)
- **Sage Mist**: `#adb89b` - Muted sage green (neutral)
- **Pure White**: `#ffffff` - Clean white for contrast
- **Deep Black**: `#000000` - Pure black for text

### Extended Color Scales

**Brand Colors (Dusty Rose)**

- Primary: `brand.500` (#795e6b)
- Light variants: `brand.50` to `brand.400`
- Dark variants: `brand.600` to `brand.900`

**Accent Colors (Blush Brown)**

- Primary: `accent.500` (#9c7e7d)
- Light variants: `accent.50` to `accent.400`
- Dark variants: `accent.600` to `accent.900`

**Earth Colors (Warm Bronze)**

- Primary: `earth.500` (#b18c65)
- Light variants: `earth.50` to `earth.400`
- Dark variants: `earth.600` to `earth.900`

**Sage Colors (Olive Buff)**

- Primary: `sage.500` (#bdb37e)
- Light variants: `sage.50` to `sage.400`
- Dark variants: `sage.600` to `sage.900`

**Neutral Colors (Sage Mist)**

- Primary: `neutral.500` (#adb89b)
- Light variants: `neutral.50` to `neutral.400`
- Dark variants: `neutral.600` to `neutral.900`

## Typography

- **Heading Font**: Sora (Google Fonts via next/font/google)
- **Body Font**: Zen Maru Gothic (Google Fonts via next/font/google)
- **Mono Font**: JetBrains Mono, Fira Code

### Font Implementation

Both fonts use Google Fonts optimization through Next.js:

```typescript
// In app/layout.tsx
import { Sora, Zen_Maru_Gothic } from 'next/font/google';

const sora = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sora',
  display: 'swap',
  preload: true,
});

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-zen-maru-gothic',
  display: 'swap',
  preload: true,
});

// Applied to html element
<html className={`${zenMaruGothic.variable} ${sora.variable}`}>
```

The theme then references them via CSS variables:

```typescript
// In theme/typography.ts
fonts: {
  heading: `var(--font-sora), 'Sora', -apple-system, BlinkMacSystemFont, sans-serif`,
  body: `var(--font-zen-maru-gothic), 'Zen Maru Gothic', fallbacks...`,
}
```

### Font Characteristics & Pairing

**Sora (Headings)**

- **Style**: Modern geometric sans-serif with tech-inspired precision
- **Character**: Clean, contemporary, sophisticated with startup appeal
- **Best for**: Headings, titles, tech portfolios, modern brands, digital products
- **Weights**: 100, 200, 300, 400, 500, 600, 700, 800
- **Special Feature**: Optimized for digital interfaces with excellent screen clarity

**Zen Maru Gothic (Body)**

- **Style**: Rounded, friendly sans-serif
- **Character**: Approachable, modern, readable
- **Best for**: Body text, UI elements, content
- **Weights**: 300, 400, 500, 700

**Why This Pairing Works:**
The combination of Sora's clean geometric precision and Zen Maru Gothic's friendly rounded style creates a sophisticated tech-forward typography system. Sora brings modern startup elegance and professional clarity to headings, perfect for digital products and contemporary brands, while Zen Maru Gothic maintains approachability and warmth in body content. This pairing is ideal for tech professionals, startups, designers, SaaS products, and anyone building a modern, forward-thinking digital presence.

### Font Weights Available

**Sora (Headings):**

- **Thin (100)**: Ultra-light, elegant headings
- **Extra Light (200)**: Very light, refined headings
- **Light (300)**: Subtle, clean headings
- **Regular (400)**: Standard heading weight
- **Medium (500)**: Slightly emphasized headings
- **Semi-bold (600)**: Medium emphasis headings
- **Bold (700)**: Strong emphasis headings
- **Extra Bold (800)**: Maximum impact headings

**Zen Maru Gothic (Body):**

- **Light (300)**: Subtle, elegant text
- **Regular (400)**: Standard body text
- **Medium (500)**: Emphasized content
- **Bold (700)**: Strong emphasis

### Design Philosophy

**Warm Golden-Pink Aesthetic:**
The palette combines sophisticated warm tones with gentle pinks and golden browns to create a cozy, elegant atmosphere. This color scheme is perfect for creative portfolios, lifestyle brands, and professional applications that want to convey warmth, sophistication, and approachability.

**Modern Warmth with Tech Precision:**
The geometric Sora headings paired with warm golden-pink tones creates a unique aesthetic that bridges cutting-edge technology with human warmth and comfort. Perfect for professionals who want to showcase innovation while maintaining a welcoming, approachable feel.

**Color Psychology:**

- **Dusty Rose**: Sophistication, creativity, gentle elegance
- **Blush Brown**: Stability, warmth, earthy comfort
- **Warm Bronze**: Growth, richness, golden hour warmth
- **Olive Buff**: Wisdom, natural harmony, muted sophistication
- **Sage Mist**: Balance, tranquility, gentle nature

## Component Variants

### Button

- `solid` (default): Brand dusty rose color
- `outline`: Outlined with brand color
- `ghost`: Transparent with brand color text
- `earth`: Earth tone (warm bronze) variant
- `sage`: Sage (olive buff) variant

### Heading

- `primary`: Brand dusty rose color
- `secondary`: Neutral sage mist color
- `earth`: Earth tone warm bronze color
- `sage`: Sage olive buff color

### Text

- `body` (default): Standard body text
- `caption`: Smaller, muted text
- `subtitle`: Larger, medium weight text
- `muted`: Muted neutral text

### Box

- `card`: Clean white card with shadow
- `mutedCard`: Neutral background with subtle border

## Accessibility

The warm golden-pink palette maintains excellent contrast ratios:

- All text colors meet WCAG AA standards
- Primary colors provide sufficient contrast against white/light backgrounds
- Pure black (#000000) is available for maximum contrast when needed
- Sora's clean geometric design ensures excellent readability across all screen sizes

## Usage Examples

```tsx
// Color combinations
<Box bg="neutral.50" borderColor="brand.200">
  <Heading variant="earth">Warm Bronze Heading</Heading>
  <Text color="neutral.700">Readable body text</Text>
</Box>

// Button variations
<Button variant="sage">Olive Buff Action</Button>
<Button variant="earth">Warm Bronze Action</Button>
<Button variant="outline">Outlined Action</Button>
```

## Palette Inspiration

This warm golden-pink palette evokes:

- **Sunset over autumn fields** - the gentle transition from warm bronze to dusty rose
- **Cozy coffee shops** - the blend of warm browns and sage greens
- **Sophisticated comfort** - the balance of elegance and approachability
- **Natural warmth** - earth tones that feel both modern and timeless
