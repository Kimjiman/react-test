import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@/index.css';

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </React.StrictMode>,
    );
} else {
    throw new Error("Root element 'root' not found in the document.");
}
