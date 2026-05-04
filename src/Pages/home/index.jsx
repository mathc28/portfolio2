import React from 'react';
import Hero from '../../components/Hero';
import Skills from '../../components/skills';
import About from '../../components/about';
import Projects from '../../components/projects';
import Contact from '../../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;