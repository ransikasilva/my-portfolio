import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00', // Neon green
    },
    secondary: {
      main: '#ff00ff', // Neon pink
    },
    background: {
      default: '#000000',
      paper: '#111111',
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
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;