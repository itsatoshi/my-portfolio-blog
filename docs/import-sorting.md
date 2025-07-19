# Import Sorting Rules

This project uses `eslint-plugin-simple-import-sort` to automatically sort imports in a consistent and readable way.

## How It Works

The plugin automatically sorts imports in the following order:

### 1. Side Effect Imports

```typescript
import './globals.css';
```

### 2. Node Modules (External Dependencies)

```typescript
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { useState } from 'react';
```

### 3. Internal/Relative Imports

```typescript
import customTheme from '../theme';
import Footer from './components/Footer';
import Header from './components/Header';
import { Providers } from './providers';
```

## Configuration

The sorting rules are configured in `eslint.config.mjs`:

```javascript
{
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/order': 'off',
    'sort-imports': 'off',
  },
}
```

## Automatic Fixing

### Manual Fix

```bash
# Fix imports in all files
pnpm run lint:fix

# Fix imports in specific files
npx eslint --fix src/components/MyComponent.tsx
```

### Automatic Fix on Commit

The project is configured with Husky and lint-staged to automatically fix imports when you commit:

1. Stage your files: `git add .`
2. Commit: `git commit -m "Your message"`
3. Imports will be automatically sorted before the commit completes

### VS Code Integration

For real-time import sorting in VS Code, add this to your `settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Examples

### Before (Unsorted)

```typescript
import { useState } from 'react';
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme';
import type { Metadata } from 'next';
```

### After (Auto-sorted)

```typescript
import './globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { useState } from 'react';

import customTheme from '../theme';
```

## Benefits

1. **Consistency** - All files follow the same import order
2. **Readability** - Imports are grouped logically
3. **Merge Conflicts** - Reduced conflicts when multiple people work on the same files
4. **Maintenance** - Easy to find and manage imports
5. **Automation** - No manual effort required

## Troubleshooting

### ESLint Error: "Run autofix to sort these imports!"

This means your imports are not in the correct order. Run:

```bash
pnpm run lint:fix
```

### Import Not Being Sorted

Make sure the file extension is included in the ESLint configuration and that the file is not ignored by `.eslintignore`.

### VS Code Not Auto-fixing

1. Install the ESLint extension
2. Add the VS Code settings mentioned above
3. Restart VS Code
4. Check that ESLint is running (should see it in the status bar)
