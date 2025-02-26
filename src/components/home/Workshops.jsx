import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material';
import { Event, School, EmojiEvents, Computer } from '@mui/icons-material';
import { motion } from 'framer-motion';

import coderally from '../../assets/images/coderally.jpeg'; 
import careerNavigator from '../../assets/images/career-navigator.jpeg';
import algorithmWorkshop from '../../assets/images/algorithm-workshop.jpeg';
import ieeeXtreme from '../../assets/images/ieee-xtreme.jpeg';
import genAI from '../../assets/images/api-tour.jpeg';

const workshopData = [
  {
    title: "API & GenAI Tour 2025 (Pieces)",
    organizer: "Postman & Pieces for Developers",
    date: "January 2025",
    description: "Participated in this event to learn about APIs and Generative AI from industry experts. Earned Postman API Fundamentals Student Expert certification.",
    image: genAI,
    tags: ["GenAI", "API", "Certification"]
  },
  {
    title: "CodeRally 5.0 Hackathon",
    organizer: "IEEE Computer Society SBC of IIT",
    date: "2024",
    description: "Participated and won 1st place in this 24-hour competitive programming hackathon where tech passion met exceptional problem-solving skills.",
    image: coderally,
    tags: ["Hackathon", "Competition", "1st Place"]
  },
  {
    title: "Advanced Algorithm Techniques Workshop",
    organizer: "CodeRally & IEEE CS IIT",
    date: "August 2024",
    description: "Enhanced algorithmic problem-solving skills in this interactive workshop focused on advanced coding techniques.",
    image: algorithmWorkshop,
    tags: ["Algorithms", "Problem Solving", "Coding"]
  },
  {
    title: "Career Navigator Workshop",
    organizer: "IEEE CS IIT & IndustPro",
    date: "2024", 
    description: "Participated in this career development workshop to gain insights on professional growth and industry requirements in tech. Learned lot from industry experts.",
    image: careerNavigator,
    tags: ["Career Development", "Professional Skills"]
  },
  {
    title: "IEEE Xtreme 18.0 Hackathon",
    organizer: "IEEE SBC of IIT",
    date: "October 2024",
    description: "Participated in this 24-hour global programming competition, solving complex algorithmic challenges and enhancing teamwork skills under tight time constraints.",
    image: ieeeXtreme,
    tags: ["Global Competition", "Team Coding", "Problem Solving"]
  }  
];

const Workshops = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {workshopData.map((workshop, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    height: '100%',
                    backgroundColor: 'rgba(17, 17, 17, 0.8)',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 255, 0, 0.2)', 
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                      border: '1px solid rgba(0, 255, 0, 0.5)',
                      transform: 'translateY(-5px)'
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      height: 250,
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <Box
                      component="img"
                      src={workshop.image}
                      alt={workshop.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Event sx={{ color: '#00ff00', mr: 1 }} />
                      <Typography variant="body2" color="#00ff00">
                        {workshop.date}
                      </Typography>
                    </Box>

                    <Typography 
                      variant="h5"
                      component="h3"
                      color="#00ff00"
                      gutterBottom
                      sx={{ 
                        fontWeight: 'bold',
                        fontSize: '1.5rem'  
                      }}
                    >
                      {workshop.title}
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {workshop.organizer}  
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {workshop.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {workshop.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          icon={
                            tag.includes("Hackathon") || tag.includes("Competition") ? 
                              <EmojiEvents fontSize="small" /> :
                            tag.includes("Place") ?
                              <EmojiEvents fontSize="small" /> :  
                            tag.includes("GenAI") || tag.includes("API") ?
                              <Computer fontSize="small" /> :
                              <School fontSize="small" />  
                          }
                          sx={{
                            backgroundColor: 'rgba(0, 255, 0, 0.1)',
                            color: 'white',
                            border: '1px solid rgba(0, 255, 0, 0.3)',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 255, 0, 0.2)',  
                              boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Workshops;