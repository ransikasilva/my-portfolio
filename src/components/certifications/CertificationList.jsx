// src/components/certifications/CertificationList.jsx
import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { Code, Security, School, WorkspacePremium } from '@mui/icons-material';
import { motion } from 'framer-motion';

const certifications = {
  ml: [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI, Stanford",
      date: "Jan 2025"
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI, Stanford",
      date: "Jan 2025"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI, Stanford",
      date: "Jan 2025"
    },
    {
      title: "Unsupervised Learning: Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI, Stanford",
      date: "Jan 2025"
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      date: "Feb 2025"
    },
    {
      title: "Artificial Intelligence Foundations: Machine Learning",
      issuer: "LinkedIn",
      date: "Dec 2024"
    },
    {
      title: "AI Python for Beginners",
      issuer: "DeepLearning.AI",
      date: "Feb 2025"
    },
    {
      title: "Foundations of Prompt Engineering",
      issuer: "AWS",
      date: "Feb 2025"
    },
    {
      title: "GenAI 101 with Pieces",
      issuer: "Pieces for Developers",
      date: "Feb 2025"
    }
  ],
  cybersecurity: [
    {
      title: "ISC2 Course Pre-assessment",
      issuer: "ISC2",
      date: "Feb 2025 - Feb 2028"
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "Feb 2025"
    },
    {
      title: "ISC2 Candidate",
      issuer: "ISC2",
      date: "Feb 2025 - Feb 2026"
    },
    {
      title: "Play It Safe: Manage Security Risks",
      issuer: "Google",
      date: "Feb 2025"
    },
    {
      title: "Connect and Protect: Networks and Network Security",
      issuer: "Google",
      date: "Feb 2025"
    },
    {
      title: "Tools of the Trade: Linux and SQL",
      issuer: "Google",
      date: "Feb 2025"
    }
  ],
  frameworks: [
    {
      title: "React Essential Training",
      issuer: "LinkedIn",
      date: "Jan 2025"
    },
    {
      title: "Programming Fundamentals in Kotlin",
      issuer: "Meta",
      date: "Feb 2025"
    },
    {
      title: "Learning Spring 6 with Spring Boot 3",
      issuer: "LinkedIn",
      date: "Nov 2024"
    },
    {
      title: "Angular Essential Training",
      issuer: "LinkedIn",
      date: "Oct 2024"
    },
    {
      title: "Learning Java 17",
      issuer: "LinkedIn",
      date: "Oct 2024"
    },
    {
      title: "Learning Node.js",
      issuer: "LinkedIn",
      date: "Oct 2024"
    }
  ],
  other: [
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Feb 2025"
    }
  ]
};

const CertificationSection = ({ title, certs, icon: Icon }) => (
  <Box mb={8}>
    <Typography
      variant="h4"
      sx={{
        mb: 4,
        color: 'secondary.main',
        textShadow: '0 0 8px rgba(0, 255, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Icon sx={{ fontSize: 32 }} />
      {title}
    </Typography>
    <Grid container spacing={3}>
      {certs.map((cert, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                background: 'rgba(17, 17, 17, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 255, 0, 0.2)',
                '&:hover': {
                  boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                  border: '1px solid rgba(0, 255, 0, 0.5)',
                },
              }}
            >
              <Typography variant="h6" component="div" color="primary.main" gutterBottom>
                {cert.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {cert.issuer}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cert.date}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const CertificationList = () => {
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
          Certifications
        </Typography>

        <CertificationSection 
          title="Machine Learning & AI" 
          certs={certifications.ml} 
          icon={School}
        />
        
        <CertificationSection 
          title="Cybersecurity" 
          certs={certifications.cybersecurity} 
          icon={Security}
        />
        
        <CertificationSection 
          title="Frameworks & Languages" 
          certs={certifications.frameworks} 
          icon={Code}
        />
        
        <CertificationSection 
          title="Other Certifications" 
          certs={certifications.other} 
          icon={WorkspacePremium}
        />
      </Container>
    </Box>
  );
};

export default CertificationList;