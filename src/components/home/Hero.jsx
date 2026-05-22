// components/home/Hero.jsx
import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/images/pp.png'; // Adjust the path based on your project structure

const Hero = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  textShadow: '0 0 10px rgba(0,255,0,0.5)',
                }}
              >
                Neethila Ransika Silva
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: '#00ff00',
                  mb: 4,
                }}
              >
                Software Engineer & AI Enthusiast
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  maxWidth: '800px',
                  mb: 4,
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                Software Engineering undergraduate with expertise in AI/ML, computer vision, and full-stack development.
              </Typography>
              <Button
                component={Link}
                to="/portfolio"
                variant="outlined"
                sx={{
                  mt: 2,
                  color: '#00ff00',
                  borderColor: '#00ff00',
                  '&:hover': {
                    backgroundColor: 'rgba(0,255,0,0.1)',
                    borderColor: '#00ff00',
                    boxShadow: '0 0 15px #00ff00',
                  },
                }}
              >
                See My Work
              </Button>
            </motion.div>
          </Grid>
          
          {/* Profile Image */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '320px', md: '520px' },
                  height: { xs: '320px', md: '520px' },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '2px solid #00ff00',
                    boxShadow: '0 0 20px rgba(0,255,0,0.5)',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { opacity: 0.8 },
                      '50%': { opacity: 0.5 },
                      '100%': { opacity: 0.8 },
                    }
                  }}
                />
                <Box
                  component="img"
                  src={profilePic}
                  alt="Neethila Ransika Silva"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    padding: '4px',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;