import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import p7 from "@/assets/project-7.jpg";
import p8 from "@/assets/project-8.jpg";

// Placeholder image pool — rotate through generated assets until real images are uploaded
const pool = [p1, p2, p3, p4, p5, p6, p7, p8];
const img = (i: number) => pool[i % pool.length];

export const personal = {
  name: "Neethila Ransika Silva",
  title: "Software Engineer & AI Enthusiast",
  tagline:
    "Software Engineering undergraduate with expertise in AI/ML, computer vision, and full-stack development.",
  email: "ransikasilva03.22@gmail.com",
  linkedin: "https://www.linkedin.com/in/ransikasilva",
  github: "https://github.com/ransikasilva",
  initials: "NS",
  bio: {
    whoIAm:
      "I'm a Software Engineering undergraduate with a passion for AI/ML, computer vision, and full-stack development. My journey in tech is driven by a desire to create innovative solutions that make a real impact. Currently pursuing my Bachelor's degree at the University of Westminster (Informatics Institute of Technology), I'm constantly expanding my skills and knowledge in the ever-evolving tech landscape.",
    whatIDo:
      "I specialize in building deep learning models, scalable web applications, and real-time systems. My experience spans across various technologies and frameworks, allowing me to tackle diverse challenges in software development. Beyond coding, I'm passionate about participating in hackathons, contributing to open-source projects, and staying up-to-date with the latest technological advancements.",
  },
};

export const workExperience = [
  {
    title: "Software Engineer Intern",
    company: "OCTAVE - John Keells Group",
    type: "Internship",
    period: "Apr 2025 - Present",
    location: "Colombo, Sri Lanka · Hybrid",
    responsibilities: [
      "Architect and develop dynamic full-stack web applications using Next.js and Flask",
      "Design and build interactive dashboards and analytics platforms",
      "Leverage Microsoft Azure cloud services to deploy scalable applications",
      "Spearhead AI/ML research and generative AI initiatives",
      "Collaborate with senior engineers on mission-critical R&D projects",
    ],
    skills: ["Next.js", "Flask", "Microsoft Azure", "AI/ML", "Generative AI"],
  },
  {
    title: "Software Engineer & Technical Consultant",
    company: "WIWIS.AI",
    type: "Part-time",
    period: "May 2025 - Present",
    location: "Remote",
    responsibilities: [
      "Provide software engineering consultation on system design and best practices",
      "Develop full-stack web (Next.js) and mobile apps (React Native, Expo)",
      "Build and optimize backend services using Node.js",
      "Work with AWS for cloud deployment and application management",
    ],
    skills: ["Next.js", "React Native", "Expo", "Node.js", "AWS"],
  },
];

export const education = [
  {
    degree: "BE, Software Engineering",
    institution: "University of Westminster (IIT)",
    period: "Sep 2023 - Sep 2027",
    details: [
      "Object-Oriented Programming (100%)",
      "Database Systems (100%)",
      "Mobile Application Development",
      "Data Structures and Algorithms",
    ],
  },
  {
    degree: "Attorney At Law",
    institution: "Sri Lanka Law College",
    period: "Feb 2025 - Oct 2028",
    details: [
      "Constitutional, Criminal, Business, Civil, Property, Family Law and Law of Evidence.",
    ],
  },
  {
    degree: "Certificate in Graphic Design (A+)",
    institution: "University of Kelaniya Sri Lanka",
    period: "Mar 2023 - Aug 2023",
    details: [],
  },
  {
    degree: "Diploma in English",
    institution: "ICBT Campus, Colombo 04",
    period: "Mar 2023 - Sep 2023",
    details: [],
  },
  {
    degree: "Secondary Education",
    institution: "St. Peter's College, Colombo 04",
    period: "Jan 2009 - Feb 2023",
    details: [],
  },
];

export const technicalSkills = [
  { category: "Programming Languages", skills: ["Python", "Java", "JavaScript", "TypeScript", "Kotlin", "HTML", "CSS"] },
  { category: "AI/ML Frameworks", skills: ["LangChain", "LangGraph", "OpenAI GPT", "TensorFlow", "PyTorch", "Neural Networks", "OpenCV", "HuggingFace"] },
  { category: "Web Development", skills: ["Next.js", "React", "React Native", "Expo", "Spring Boot", "Angular", "Flask", "FastAPI", "Node.js", "Express"] },
  { category: "Cloud & DevOps", skills: ["AWS", "Microsoft Azure", "Docker", "Railway", "Vercel", "Render"] },
  { category: "Database & Tools", skills: ["PostgreSQL", "SQLite", "Supabase", "Pinecone", "Git", "WebSocket"] },
  { category: "Design", skills: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator", "Figma"] },
];

export const honorsAndAwards = [
  {
    title: "1st Place - Coderally 5.0",
    organization: "IEEE Computer Society SBC of IIT",
    description: "24hrs Hackathon & Workshop Series",
    details: "Innovative problem-solving skills and effective teamwork",
    date: "2024",
  },
  {
    title: "IEEE Xtreme 18.0",
    organization: "IEEE SBC of IIT",
    description: "24hrs Hackathon",
    details: "Team work and coding skills under time constraints",
    date: "October 2024",
  },
];

export const workshopsAndEvents = [
  {
    title: "API & GenAI Tour 2025 (Postman & Pieces)",
    organizer: "Postman & Pieces for Developers",
    date: "January 2025",
    description: "Learned about APIs and Generative AI from industry experts. Earned Postman API Fundamentals Student Expert certification.",
    image: img(0),
    tags: ["GenAI", "API", "Certification"],
  },
  {
    title: "CodeRally 5.0 Hackathon",
    organizer: "IEEE Computer Society SBC of IIT",
    date: "2024",
    description: "Won 1st place in this 24-hour competitive programming hackathon.",
    image: img(1),
    tags: ["Hackathon", "1st Place"],
  },
  {
    title: "Advanced Algorithm Techniques Workshop",
    organizer: "CodeRally & IEEE CS IIT",
    date: "August 2024",
    description: "Enhanced algorithmic problem-solving skills in an interactive workshop on advanced coding techniques.",
    image: img(2),
    tags: ["Algorithms", "Problem Solving"],
  },
  {
    title: "Career Navigator Workshop",
    organizer: "IEEE CS IIT & IndustPro",
    date: "2024",
    description: "Career development workshop on professional growth and industry requirements in tech.",
    image: img(3),
    tags: ["Career Development"],
  },
  {
    title: "IEEE Xtreme 18.0 Hackathon",
    organizer: "IEEE SBC of IIT",
    date: "October 2024",
    description: "24-hour global programming competition with complex algorithmic challenges.",
    image: img(4),
    tags: ["Global Competition", "Team Coding"],
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
  date?: string | null;
  highlights?: string[];
  demo?: string | null;
  github?: string | null;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Emergency Department Operations System",
    description:
      "Comprehensive multi-agent AI system with 6 specialized agents (Triage, Diagnosis, Critical Care, Resource Allocation, Coordination, Orchestration) for emergency department operations using LangGraph and RAG with Pinecone.",
    technologies: ["Python", "FastAPI", "LangChain", "LangGraph", "Next.js 14", "PostgreSQL", "Pinecone", "OpenAI GPT-3.5", "TypeScript", "TailwindCSS"],
    image: img(0),
    featured: true,
    date: "Jan 2026 – Mar 2026",
    highlights: [
      "6 specialized AI agents working in parallel",
      "RAG with 100+ medical protocols for evidence-based decisions",
      "Automated bed allocation and staff assignment",
      "Live analytics dashboard with patient flow visualization",
    ],
  },
  {
    title: "Autonomous Data Analyst Agent with Self-Healing Code Generation",
    description:
      "Production-grade agentic AI system with 4 specialized agents (Planner, Coder, Critic, Summarizer) that autonomously analyzes datasets via LangGraph state machine with automatic error detection and retry logic.",
    technologies: ["Python 3.13", "FastAPI", "LangGraph", "React 18", "TypeScript", "OpenAI GPT-4o", "WebSocket", "Pandas", "Matplotlib", "Plotly"],
    image: img(1),
    featured: true,
    date: "Mar 2026 – Present",
    highlights: [
      "Self-healing workflow with retry logic (max 3 attempts)",
      "Sandboxed execution with timeout protection",
      "Real-time progress streaming via WebSocket",
      "Context-aware step-by-step execution",
    ],
  },
  { title: "AI-Powered Business Chatbot", description: "Intelligent AI chatbot providing accurate assistance for business inquiries.", technologies: ["llama-index", "Groq API", "HuggingFace"], image: img(2), featured: false, demo: "https://drive.google.com/file/d/17lAV5YSGI4jccmW-J_mTTtjGBBKcjQyz/view?usp=share_link" },
  { title: "Android Dice Game Application", description: "Dice game app with customizable winning scores and computer strategies.", technologies: ["Kotlin", "Jetpack Compose"], image: img(3), featured: false, demo: "https://drive.google.com/file/d/17lAV5YSGI4jccmW-J_mTTtjGBBKcjQyz/view?usp=share_link" },
  { title: "SlotZi - Smart Space Booking", description: "Real-time booking system with secure payments & notifications.", technologies: ["Node.js", "React Native", "Supabase"], image: img(4), featured: false },
  { title: "Movie Recommendation System", description: "AI-powered movie recommendations using collaborative & content-based filtering.", technologies: ["Python", "TensorFlow", "React.js"], image: img(5), featured: false, demo: "https://drive.google.com/file/d/17lAV5YSGI4jccmW-J_mTTtjGBBKcjQyz/view?usp=share_link" },
  { title: "Pothole Detector AI", description: "Real-time pothole detection using TensorFlow & MobileNetV2.", technologies: ["TensorFlow", "Flask", "OpenCV"], image: img(6), featured: false, demo: "https://drive.google.com/file/d/17lAV5YSGI4jccmW-J_mTTtjGBBKcjQyz/view?usp=share_link" },
  { title: "Cat & Dog Classifier", description: "Deep learning classifier with 90%+ accuracy.", technologies: ["Python", "TensorFlow", "Flask"], image: img(7), featured: false, demo: "https://drive.google.com/file/d/1VXbAd-hy3aOFjmWPhxS8X1HTW3DJzmX5/view?usp=share_link" },
  { title: "Hand Gesture Control AI", description: "Real-time gesture recognition system with 91% accuracy.", technologies: ["PyTorch", "OpenCV", "PyQt5"], image: img(0), featured: false, demo: "https://drive.google.com/file/d/1S5HMeL7AkeFV_4o39YThINj9VY4G7oRx/view?usp=share_link" },
  { title: "Real-Time Event Ticketing System", description: "High-performance ticketing system with real-time updates.", technologies: ["Spring Boot", "Angular", "WebSocket", "SQL"], image: img(1), featured: false, demo: "https://drive.google.com/file/d/1ginoLuXdlQQjsTBLhJdki1leWBgs3Tlo/view" },
  { title: "Student Grades Record System", description: "Python system to manage student grades with automated calculation and reporting.", technologies: ["Python"], image: img(2), featured: false, demo: "https://drive.google.com/drive/folders/1YjU-xieIjS2-15FHB1XxL3gJcVCpj2Vx?usp=share_link" },
  { title: "Plane Management System", description: "Java-based airline ticket booking system with intuitive seat selection.", technologies: ["Java"], image: img(3), featured: false, demo: "https://drive.google.com/drive/folders/1mLG62cEf0b4EvqX5aYqyngqtdd-XOcR_?usp=share_link" },
  { title: "CliMeta Website", description: "Interactive website with responsive design for multi-device accessibility.", technologies: ["HTML", "CSS", "JavaScript"], image: img(4), featured: false, demo: "https://drive.google.com/drive/folders/1hJoRY9IM6XZxObMhaXvfMQvD8udbpEpo?usp=share_link" },
];

export const certifications = {
  "Machine Learning & AI": [
    { title: "Machine Learning Specialization", issuer: "DeepLearning.AI, Stanford", date: "Jan 2025" },
    { title: "Advanced Learning Algorithms", issuer: "DeepLearning.AI, Stanford", date: "Jan 2025" },
    { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI, Stanford", date: "Jan 2025" },
    { title: "Unsupervised Learning: Recommenders, Reinforcement Learning", issuer: "DeepLearning.AI, Stanford", date: "Jan 2025" },
    { title: "AI for Everyone", issuer: "DeepLearning.AI", date: "Feb 2025" },
    { title: "Artificial Intelligence Foundations: Machine Learning", issuer: "LinkedIn", date: "Dec 2024" },
    { title: "AI Python for Beginners", issuer: "DeepLearning.AI", date: "Feb 2025" },
    { title: "Foundations of Prompt Engineering", issuer: "AWS", date: "Feb 2025" },
    { title: "GenAI 101 with Pieces", issuer: "Pieces for Developers", date: "Feb 2025" },
  ],
  "Cybersecurity": [
    { title: "Foundations of Cybersecurity", issuer: "Google", date: "Feb 2025" },
    { title: "ISC2 Course Pre-assessment", issuer: "ISC2", date: "Feb 2025 - Feb 2028" },
    { title: "ISC2 Candidate", issuer: "ISC2", date: "Feb 2025 - Feb 2026" },
    { title: "Play It Safe: Manage Security Risks", issuer: "Google", date: "Feb 2025" },
    { title: "Connect and Protect: Networks and Network Security", issuer: "Google", date: "Feb 2025" },
    { title: "Tools of the Trade: Linux and SQL", issuer: "Google", date: "Feb 2025" },
    { title: "Assets, Threats, and Vulnerabilities", issuer: "Google", date: "Feb 2025" },
  ],
  "Frameworks & Languages": [
    { title: "React Essential Training", issuer: "LinkedIn", date: "Jan 2025" },
    { title: "Programming Fundamentals in Kotlin", issuer: "Meta", date: "Feb 2025" },
    { title: "Learning Spring 6 with Spring Boot 3", issuer: "LinkedIn", date: "Nov 2024" },
    { title: "Angular Essential Training", issuer: "LinkedIn", date: "Oct 2024" },
    { title: "Learning Java 17", issuer: "LinkedIn", date: "Oct 2024" },
    { title: "Learning Node.js", issuer: "LinkedIn", date: "Oct 2024" },
  ],
  "Other": [
    { title: "Postman API Fundamentals Student Expert", issuer: "Postman", date: "Feb 2025" },
  ],
};