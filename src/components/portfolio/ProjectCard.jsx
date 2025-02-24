import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(0, 255, 0, 0.2)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
            border: '1px solid rgba(0, 255, 0, 0.5)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.image || "/placeholder.jpg"}
          alt={project.title}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography gutterBottom variant="h5" component="h2" sx={{ color: 'primary.main' }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {project.technologies.map((tech, index) => (
              <Typography
                key={index}
                variant="caption"
                sx={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 255, 0, 0.1)',
                  border: '1px solid rgba(0, 255, 0, 0.2)',
                }}
              >
                {tech}
              </Typography>
            ))}
          </Box>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{
              mt: 'auto',
              '&:hover': {
                boxShadow: '0 0 10px #00ff00',
              },
            }}
            href={project.demo}
            target="_blank"
          >
            View Demo
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;