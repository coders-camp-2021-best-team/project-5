import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { theme } from './config/theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <StrictMode>
            <App />
        </StrictMode>
    </ThemeProvider>
);
