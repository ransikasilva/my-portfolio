// src/components/home/Awards.jsx
import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import { motion } from 'framer-motion';

const awards = [
  {
    title: "1st Place - Coderally 5.0",
    organization: "IEEE Computer Society SBC of IIT",
    description: "24hrs Hackathon & Workshop Series",
    details: "Innovative problem-solving skills and effective teamwork"
  },
  {
    title: "IEEE Xtreme 18.0",
    organization: "IEEE SBC of IIT",
    description: "24hrs Hackathon",
    details: "Team work and coding skills under time constraints"
  }
];

const Awards = () => {
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
          Honors & Awards
        </Typography>

        <Grid container spacing={4}>
          {awards.map((award, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
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
                  <Box display="flex" alignItems="center" mb={2}>
                    <EmojiEvents
                      sx={{
                        fontSize: 40,
                        color: 'primary.main',
                        mr: 2
                      }}
                    />
                    <Typography variant="h5" component="h3" color="primary.main">
                      {award.title}
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    {award.organization}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {award.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {award.details}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Awards;