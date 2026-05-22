// components/layout/Navbar.jsx
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  Typography 
  // Removed: useTheme, useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Certifications', path: '/certifications' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        <Button
          component={Link}
          to="/"
          sx={{
            color: 'white',
            fontSize: '1.5rem',
            textTransform: 'none',
            flexGrow: { xs: 1, sm: 0 },
          }}
        >
          Ransika
        </Button>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                mx: 2,
                color: 'white',
                '&:hover': {
                  color: '#00ff00',
                  textShadow: '0 0 10px #00ff00',
                },
                ...(location.pathname === item.path && {
                  color: '#00ff00',
                  textShadow: '0 0 10px #00ff00',
                }),
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderRight: '1px solid rgba(0, 255, 0, 0.2)'
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid rgba(0, 255, 0, 0.2)' }}>
          <Typography variant="h6" sx={{ color: '#00ff00' }}>
            Menu
          </Typography>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderBottom: '1px solid rgba(0, 255, 0, 0.1)',
                color: location.pathname === item.path ? '#00ff00' : 'white',
                '&:hover': {
                  bgcolor: 'rgba(0, 255, 0, 0.1)',
                },
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;