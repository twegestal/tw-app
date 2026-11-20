import '@fontsource-variable/inter';
import '@mantine/core/styles.css';
import './global.css';

import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { cssVariablesResolver, theme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      theme={theme}
      cssVariablesResolver={cssVariablesResolver}
      forceColorScheme='dark'
    >
      <App />
    </MantineProvider>
  </StrictMode>,
);
