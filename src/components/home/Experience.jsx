// components/home/Experience.jsx
import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material';
import { Work } from '@mui/icons-material';
import { motion } from 'framer-motion';

const experienceData = [
  {
    title: "Software Engineer Intern",
    company: "OCTAVE - John Keells Group",
    type: "Internship",
    period: "Apr 2025 - Present · 1 yr",
    location: "Colombo, Western Province, Sri Lanka · Hybrid",
    responsibilities: [
      "Architect and develop dynamic full-stack web applications using Next.js and Flask, serving users",
      "Design and build interactive dashboards and analytics platforms that drive key business decisions",
      "Leverage Microsoft Azure cloud services to deploy scalable, high-performance applications",
      "Spearhead innovative AI/ML research projects, contributing to cutting-edge machine learning solutions",
      "Drive generative AI initiatives, developing novel applications that push technological boundaries",
      "Collaborate with senior engineers on mission-critical R&D projects, delivering measurable impact",
      "Transform complex data into actionable insights through advanced visualization and reporting tools"
    ],
    skills: ["Next.js", "Flask", "Microsoft Azure", "AI/ML", "Generative AI", "Data Visualization", "Analytics"]
  },
  {
    title: "Software Engineer & Technical Consultant",
    company: "WIWIS.AI",
    type: "Part-time",
    period: "May 2025 - Present · 11 mos",
    location: "Remote",
    responsibilities: [
      "Provided software engineering consultation to junior engineers on system design, architecture, and best practices",
      "Developed and maintained full-stack applications, including web (Next.js) and mobile apps (React Native, Expo)",
      "Built and optimized backend services using Node.js",
      "Collaborated with cross-functional teams to improve system performance, scalability, and architecture",
      "Supported debugging, optimization, and deployment processes across multiple projects",
      "Worked with AWS services for cloud deployment and application management"
    ],
    skills: ["Next.js", "React Native", "Expo", "Node.js", "AWS", "System Architecture", "Technical Consulting"]
  }
];

const Experience = () => {
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
          Work Experience
        </Typography>
        <Grid container spacing={4}>
          {experienceData.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    backgroundColor: 'rgba(17, 17, 17, 0.8)',
                    border: '1px solid rgba(0, 255, 0, 0.2)',
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                      border: '1px solid rgba(0, 255, 0, 0.5)',
                    },
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <Work sx={{ color: 'primary.main', mr: 2, fontSize: 40 }} />
                    <Box>
                      <Typography variant="h5" color="primary.main">
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {exp.company} · {exp.type}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {exp.period}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {exp.location}
                      </Typography>
                    </Box>
                  </Box>

                  {exp.responsibilities && (
                    <Box mt={2}>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <Typography key={idx} variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          • {responsibility}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  {exp.skills && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                      {exp.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
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
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
