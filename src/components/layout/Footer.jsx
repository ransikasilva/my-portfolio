import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderTop: '1px solid rgba(0, 255, 0, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 0 } }}
          >
            © {new Date().getFullYear()} Neethila Ransika Silva. All rights reserved.
          </Typography>

          <Box>
            <IconButton
              component={Link}
              href="https://github.com/ransikasilva"
              target="_blank"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/ransikasilva"
              target="_blank"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:ransikasilva03.22@gmail.com"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;