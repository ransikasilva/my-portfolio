import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              color: 'primary.main',
              textShadow: '0 0 10px rgba(0,255,0,0.3)',
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'rgba(17, 17, 17, 0.8)',
                  border: '1px solid rgba(0, 255, 0, 0.2)',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                    border: '1px solid rgba(0, 255, 0, 0.5)',
                  },
                }}
              >
                <Typography variant="h5" color="primary.main" gutterBottom>
                  Who I Am
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  I'm a Software Engineering undergraduate with a passion for AI/ML, computer vision, and full-stack development. My journey in tech is driven by a desire to create innovative solutions that make a real impact.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Currently pursuing my Bachelor's degree at the University of Westminster (Informatics Institute of Technology), I'm constantly expanding my skills and knowledge in the ever-evolving tech landscape.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'rgba(17, 17, 17, 0.8)',
                  border: '1px solid rgba(0, 255, 0, 0.2)',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                    border: '1px solid rgba(0, 255, 0, 0.5)',
                  },
                }}
              >
                <Typography variant="h5" color="primary.main" gutterBottom>
                  What I Do
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  I specialize in building deep learning models, scalable web applications, and real-time systems. My experience spans across various technologies and frameworks, allowing me to tackle diverse challenges in software development.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Beyond coding, I'm passionate about participating in hackathons, contributing to open-source projects, and staying up-to-date with the latest technological advancements.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;