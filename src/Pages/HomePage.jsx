import React from 'react';
import Layout from '../Components/Layout/Layout';
import About from '../Components/Parts/About';
import Contact from '../Components/Parts/Contact';
import Home from '../Components/Parts/Home';
import Projects from '../Components/Parts/Projects';

const HomePage = () => {
  return (
    <div>
      <Layout>
        <Home />
        <About />
        <Projects />
      </Layout>
    </div>
  );
};

export default HomePage;
