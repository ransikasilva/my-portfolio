import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            color: 'primary.main',
            textShadow: '0 0 10px rgba(0,255,0,0.3)',
          }}
        >
          Contact Me
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" color="primary.main" gutterBottom>
                  Let's Connect
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Feel free to reach out for collaborations or just a friendly hello
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ color: 'primary.main', mr: 2 }} />
                  <Typography variant="body1" color="text.secondary">
                    ransikasilva03.22@gmail.com
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LinkedIn sx={{ color: 'primary.main', mr: 2 }} />
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    component="a"
                    href="https://www.linkedin.com/in/ransikasilva"
                    target="_blank"
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    linkedin.com/in/ransikasilva
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <GitHub sx={{ color: 'primary.main', mr: 2 }} />
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    component="a"
                    href="https://github.com/ransikasilva"
                    target="_blank"
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    github.com/ransikasilva
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  backgroundColor: 'rgba(17, 17, 17, 0.8)',
                  border: '1px solid rgba(0, 255, 0, 0.2)',
                }}
              >
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(0, 255, 0, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 255, 0, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(0, 255, 0, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 255, 0, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(0, 255, 0, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 255, 0, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{
                      mt: 2,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        boxShadow: '0 0 20px #00ff00',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;