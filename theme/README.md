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
  const sageColor = mutedColors.sage;

  return <div>Component content</div>;
}
```

## Color Palette

### Muted Earth Tone Palette

**Primary Colors:**

- **Lavender**: `#92898f` - Muted grayish purple (brand primary)
- **Gray**: `#a19799` - Muted gray (neutral base)
- **Taupe**: `#a17f6f` - Muted brownish taupe (accent)
- **Olive**: `#9e8962` - Muted olive/khaki (earth)
- **Sage**: `#757a59` - Darker olive/sage green (sage)
- **Black**: `#000000` - Pure black for contrast

### Extended Color Scales

**Brand Colors (Lavender)**

- Primary: `brand.500` (#92898f)
- Light variants: `brand.50` to `brand.400`
- Dark variants: `brand.600` to `brand.900`

**Accent Colors (Taupe)**

- Primary: `accent.500` (#a17f6f)
- Light variants: `accent.50` to `accent.400`
- Dark variants: `accent.600` to `accent.900`

**Earth Colors (Olive)**

- Primary: `earth.500` (#9e8962)
- Light variants: `earth.50` to `earth.400`
- Dark variants: `earth.600` to `earth.900`

**Sage Colors (Sage Green)**

- Primary: `sage.500` (#757a59)
- Light variants: `sage.50` to `sage.400`
- Dark variants: `sage.600` to `sage.900`

**Neutral Colors (Gray)**

- Primary: `neutral.500` (#a19799)
- Light variants: `neutral.50` to `neutral.400`
- Dark variants: `neutral.600` to `neutral.900`

## Typography

- **Heading Font**: Lexend (Google Fonts via next/font/google)
- **Body Font**: Zen Maru Gothic (Google Fonts via next/font/google)
- **Mono Font**: JetBrains Mono, Fira Code

### Font Implementation

Both fonts use Google Fonts optimization through Next.js:

```typescript
// In app/layout.tsx
import { Lexend, Zen_Maru_Gothic } from 'next/font/google';

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lexend',
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
<html className={`${zenMaruGothic.variable} ${lexend.variable}`}>
```

The theme then references them via CSS variables:

```typescript
// In theme/typography.ts
fonts: {
  heading: `var(--font-lexend), 'Lexend', -apple-system, BlinkMacSystemFont, sans-serif`,
  body: `var(--font-zen-maru-gothic), 'Zen Maru Gothic', fallbacks...`,
}
```

### Design Philosophy

**Muted Earth Tone Aesthetic:**
The palette combines sophisticated neutrals with subtle earth tones to create a calming, professional atmosphere. This color scheme is perfect for portfolios, creative blogs, and professional applications that need to convey both creativity and reliability.

**Color Psychology:**

- **Lavender**: Sophistication, creativity, calm
- **Taupe**: Stability, warmth, approachability
- **Olive**: Growth, natural harmony, sophistication
- **Sage**: Wisdom, balance, tranquility
- **Gray**: Professionalism, neutrality, foundation

## Component Variants

### Button

- `solid` (default): Brand lavender color
- `outline`: Outlined with brand color
- `ghost`: Transparent with brand color text
- `earth`: Earth tone (olive) variant
- `sage`: Sage green variant

### Heading

- `primary`: Brand lavender color
- `secondary`: Neutral color
- `earth`: Earth tone color
- `sage`: Sage green color

### Text

- `body` (default): Standard body text
- `caption`: Smaller, muted text
- `subtitle`: Larger, medium weight text
- `muted`: Muted neutral text

### Box

- `card`: Clean white card with shadow
- `mutedCard`: Neutral background with subtle border

## Accessibility

The muted earth tone palette maintains excellent contrast ratios:

- All text colors meet WCAG AA standards
- Primary colors provide sufficient contrast against white/light backgrounds
- Black (#000000) is available for maximum contrast when needed

## Usage Examples

```tsx
// Color combinations
<Box bg="neutral.50" borderColor="brand.200">
  <Heading variant="earth">Earth Tone Heading</Heading>
  <Text color="neutral.700">Readable body text</Text>
</Box>

// Button variations
<Button variant="sage">Sage Action</Button>
<Button variant="earth">Earth Action</Button>
<Button variant="outline">Outlined Action</Button>
```
