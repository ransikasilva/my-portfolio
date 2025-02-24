// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

// Import global styles
import './styles/globals.css';

// Create Material UI theme
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00', // Neon green
      light: '#33ff33',
      dark: '#00cc00',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff00ff', // Neon pink
      light: '#ff33ff',
      dark: '#cc00cc',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: 'rgba(17, 17, 17, 0.8)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          '&:hover': {
            boxShadow: '0 0 15px #00ff00',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 17, 17, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 255, 0, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 255, 0, 0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00ff00',
            },
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);