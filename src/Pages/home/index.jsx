import React from 'react';
import Skills from '../../components/skills';
import Projects from '../../components/projects';
import Services from '../../components/Services ';
import Bandeau from '../../components/bandeau'

const Home = () => {
  return (
    <div>
      <Services/>
      <Bandeau/>
      <Skills />
      <Projects />
      
    </div>
  );
};

export default Home;