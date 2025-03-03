import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard';
import movieImage from "../../assets/images/movie.jpg";
import slotziImage from '../../assets/images/slotzi.png';
import potholeImage from '../../assets/images/pothole.jpeg';
import catDogImage from '../../assets/images/catdog.jpeg';
import gestureImage from '../../assets/images/hand.jpeg';
import ticketingImage from '../../assets/images/ticket.jpeg';
import gradesImage from '../../assets/images/studenta.png';
import planeImage from '../../assets/images/Plane Seat Management.png';
import climetaImage from '../../assets/images/climeta.jpeg';
import diceImage from '../../assets/images/Dice game.png';
import ChatbotImage from '../../assets/images/chatbot.png';

const projects = [
  {
    title: "AI-Powered Business Chatbot",
    description: "Intelligent AI chatbot providing accurate assistance for business inquiries",
    technologies: ["llama-index", "Groq API", "HuggingFace"],
    image: ChatbotImage,
    demo: "https://drive.google.com/file/d/17lAV5YSGI4jccmW-J_mTTtjGBBKcjQyz/view?usp=share_link"
    },
    {
      title: "Android Dice Game Application",
      description: "Dice game app with customizable winning scores and computer strategies",
      technologies: ["Kotlin", "Jetpack Compose"],
      image: diceImage,
      demo: "https://drive.google.com/file/d/17lAV5YSGI4jccmW-J_mTTtjGBBKcjQyz/view?usp=share_link"
      },
  {
    title: "SlotZi - Smart Space Booking",
    description: "Real-time booking system with secure payments & notifications",
    technologies: ["Node.js", "React Native", "Supabase"],
    image: slotziImage,
    demo: "#"
  },
  {
    title: "Movie Recommendation System",
    description: "AI-powered movie recommendations using collaborative & content-based filtering",
    technologies: ["Python", "TensorFlow", "React.js"],
    image: movieImage,
    demo: "https://drive.google.com/file/d/17lAV5YSGI4jccmW-J_mTTtjGBBKcjQyz/view?usp=share_link"
  },
  {
    title: "Pothole Detector AI",
    description: "Real-time pothole detection using TensorFlow & MobileNetV2",
    technologies: ["TensorFlow", "Flask", "OpenCV"],
    image: potholeImage,
    demo: "https://drive.google.com/file/d/17lAV5YSGI4jccmW-J_mTTtjGBBKcjQyz/view?usp=share_link"
  },
  {
    title: "Cat & Dog Classifier",
    description: "Deep learning classifier with 90%+ accuracy",
    technologies: ["Python", "TensorFlow", "Flask"],
    image: catDogImage,
    demo: "https://drive.google.com/file/d/1VXbAd-hy3aOFjmWPhxS8X1HTW3DJzmX5/view?usp=share_link"
  },
  {
    title: "Hand Gesture Control AI",
    description: "Real-time gesture recognition system with 91% accuracy",
    technologies: ["PyTorch", "OpenCV", "PyQt5"],
    image: gestureImage,
    demo: "https://drive.google.com/file/d/1S5HMeL7AkeFV_4o39YThINj9VY4G7oRx/view?usp=share_link"
  },
  {
    title: "Real-Time Event Ticketing System",
    description: "High-performance ticketing system with real-time updates",
    technologies: [ "Spring Boot", "Angular", "WebSocket", "SQL"],
    image: ticketingImage,
    demo: "https://drive.google.com/file/d/1ginoLuXdlQQjsTBLhJdki1leWBgs3Tlo/view" 
  },
  {
    title: "Student Grades Record System",
    description: "Python system to manage student grades with automated calculation and reporting",
    technologies: ["Python"],
    image: gradesImage,
    demo: "https://drive.google.com/drive/folders/1YjU-xieIjS2-15FHB1XxL3gJcVCpj2Vx?usp=share_link"
  },
  {
    title: "Plane Management System", 
    description: "Java-based airline ticket booking system with intuitive seat selection",
    technologies: ["Java"],
    image: planeImage,
    demo: "https://drive.google.com/drive/folders/1mLG62cEf0b4EvqX5aYqyngqtdd-XOcR_?usp=share_link"
  },
  {
    title: "CliMeta Website",
    description: "Interactive website with responsive design for multi-device accessibility",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: climetaImage,
    demo: "https://drive.google.com/drive/folders/1hJoRY9IM6XZxObMhaXvfMQvD8udbpEpo?usp=share_link"
  }
];

const ProjectList = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2"
          sx={{
            mb: 6, 
            textAlign: 'center',
            color: 'primary.main',
            textShadow: '0 0 10px rgba(0,255,0,0.3)',
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectList;
