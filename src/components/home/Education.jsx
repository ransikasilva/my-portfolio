// components/home/Education.jsx
import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { School } from '@mui/icons-material';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Bachelor of Engineering - BE, Software Engineering",
    institution: "University of Westminster (Informatics Institute of Technology)",
    period: "Sep 2023 - Sep 2027",
    details: [
      "Object-Oriented Programming (Marks: ICT – 100%)",
      "Database Systems (Marks: ICT – 100%)",
      "Mobile Application Development",
      "Data Structures and Algorithms"
    ]
  },
  {
    degree: "Certificate in Graphic Design",
    institution: "University of Kelaniya Sri Lanka",
    period: "Mar 2023 - Aug 2023",
    grade: "Grade: A+"
  },
  {
    degree: "Diploma in English",
    institution: "ICBT Campus, Colombo 04",
    period: "Mar 2023 - Sep 2023"
  },
  {
    degree: "Secondary Education",
    institution: "St. Peter's College, Colombo 04",  
    period: "Jan 2009 - Feb 2023",
  }
];

const Education = () => {
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
          Education
        </Typography>
        <Grid container spacing={4}>
          {educationData.map((edu, index) => (
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
                    <School sx={{ color: 'primary.main', mr: 2, fontSize: 40 }} />
                    <Box>
                      <Typography variant="h5" color="primary.main">
                        {edu.degree}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.period}
                      </Typography>
                    </Box>
                  </Box>
                  
                  {edu.details && (
                    <Box mt={2}>
                      {edu.details.map((detail, idx) => (
                        <Typography key={idx} variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          • {detail}
                        </Typography>
                      ))}
                    </Box>
                  )}
                  
                  {edu.grade && (
                    <Typography variant="body1" color="primary.main" sx={{ mt: 2 }}>
                      {edu.grade}
                    </Typography>
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

export default Education;