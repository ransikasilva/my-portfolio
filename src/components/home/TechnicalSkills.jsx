// components/home/TechnicalSkills.jsx
import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material';
import { Code, Storage, Web, Build, Palette } from '@mui/icons-material';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "Kotlin", "HTML", "CSS"],
    icon: Code
  },
  {
    category: "AI/ML Frameworks",
    skills: ["LangChain", "LangGraph", "OpenAI GPT", "TensorFlow", "PyTorch", "Neural Networks", "OpenCV", "HuggingFace"],
    icon: Storage
  },
  {
    category: "Web Development",
    skills: ["Next.js", "React", "React Native", "Expo", "Spring Boot", "Angular", "Flask", "FastAPI", "Node.js", "Express"],
    icon: Web
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Microsoft Azure", "Docker", "Railway", "Vercel", "Render"],
    icon: Build
  },
  {
    category: "Database & Tools",
    skills: ["PostgreSQL", "SQLite", "Supabase", "Pinecone", "Git", "WebSocket"],
    icon: Storage
  },
  {
    category: "Design",
    skills: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator", "Figma"],
    icon: Palette
  }
];

const TechnicalSkills = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            color: 'primary.main',
            textShadow: '0 0 10px rgba(0,255,0,0.3)',
          }}
        >
          Technical Skills
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <Grid item xs={12} sm={10} md={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2.5,
                      backgroundColor: 'rgba(17, 17, 17, 0.8)',
                      border: '1px solid rgba(0, 255, 0, 0.2)',
                      '&:hover': {
                        boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                        border: '1px solid rgba(0, 255, 0, 0.5)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'center' }}>
                      <Icon
                        sx={{
                          fontSize: 28,
                          color: 'primary.main',
                          mr: 1
                        }}
                      />
                      <Typography variant="h6" color="primary.main">
                        {category.category}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="medium"
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
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnicalSkills;