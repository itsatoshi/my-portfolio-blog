import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { foundations } from './foundations';
import { typography } from './typography';

// Custom theme configuration
const customTheme = extendTheme({
  colors,
  ...typography,
  ...foundations,
  components,
  // Global style overrides
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  // Theme configuration
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
});

export default customTheme; 