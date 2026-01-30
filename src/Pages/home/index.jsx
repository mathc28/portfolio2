import React from 'react';
import Hero from '../../components/Hero';
import Skills from '../../components/skills';
import Projects from '../../components/projects';
import Contact from '../../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;