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
import { brandColors, spacing } from '../theme/utils';

function MyComponent() {
  return (
    <Box bg={brandColors.background} p={spacing.md}>
      <Heading variant="primary" size="lg">
        Custom Themed Heading
      </Heading>
      <Button variant="solid" size="md">
        Custom Themed Button
      </Button>
    </Box>
  );
}
```

### Using Custom Component Variants

```tsx
// Use custom Box variant for cards
<Box variant="card">
  <Heading variant="primary">Card Title</Heading>
  <Text variant="body">Card content</Text>
</Box>

// Use custom Button styles
<Button variant="outline" size="lg">
  Outlined Button
</Button>
```

### Accessing Theme in JavaScript

```tsx
import { useCustomTheme } from '../theme/utils';

function MyComponent() {
  const theme = useCustomTheme();

  // Access any theme value
  const primaryColor = theme.colors.brand[500];
  const cardShadow = theme.shadows.card;

  return <div>Component content</div>;
}
```

## Customization

### Adding New Colors

Edit `colors.ts` to add new color palettes:

```ts
export const colors = {
  // ... existing colors
  newPalette: {
    50: '#...',
    500: '#...',
    900: '#...',
  },
};
```

### Adding Component Styles

Edit `components/index.ts` to add or modify component styles:

```ts
const NewComponent: ComponentStyleConfig = {
  baseStyle: {
    // Base styles
  },
  variants: {
    custom: {
      // Custom variant styles
    },
  },
};

export const components = {
  // ... existing components
  NewComponent,
};
```

### Modifying Design Tokens

Edit `foundations/index.ts` to customize spacing, shadows, borders, etc.

## Color Palette

### Brand Colors

- Primary: `brand.500` (#0c8ce4)
- Variants: `brand.50` to `brand.900`

### Accent Colors

- Secondary: `accent.500` (#d946ef)
- Variants: `accent.50` to `accent.900`

### Portfolio Grays

- Custom gray scale: `portfolio.gray.50` to `portfolio.gray.900`

## Typography

- **Heading Font**: Inter
- **Body Font**: Inter
- **Mono Font**: JetBrains Mono, Fira Code

## Component Variants

### Button

- `solid` (default): Primary brand color
- `outline`: Outlined with brand color
- `ghost`: Transparent with brand color text

### Heading

- `primary`: Brand color heading
- `secondary`: Gray color heading

### Text

- `body` (default): Standard body text
- `caption`: Smaller, muted text
- `subtitle`: Larger, medium weight text

### Box

- `card`: Card-like styling with shadow and hover effects
