
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/images/pp.png'; // Adjust the path based on your project structure

const Hero = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {/* Text Content */}
          <Box>
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
                  },
                }}
              >
                See My Work
              </Button>
            </motion.div>
          </Box>
          {/* Profile Image */}
          <Box sx={{ position: 'relative', width: '400px', height: '400px', flexShrink: 0, display: { xs: 'none', md: 'block' } }}>
            <Box
              component="img"
              src={profilePic} // Ensure the path is correct
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                position: 'relative',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
