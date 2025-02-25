// pages/Home.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Education from '../components/home/Education';
import Awards from '../components/home/Awards';

import TechnicalSkills from '../components/home/TechnicalSkills';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <TechnicalSkills />
      <Awards />
    </div>
  );
};

export default Home;