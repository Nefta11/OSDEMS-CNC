import React from 'react';
import HeroSlider from '../../components/Home/HeroSlider/HeroSlider';
import Capabilities from '../../components/Home/Capabilities/Capabilities';
import NextLevel from '../../components/Home/NextLevel/NextLevel';
import ContactCTA from '../../components/Home/ContactCTA/ContactCTA';
import styles from './Home.module.css';

const Home = () => {

  return (
    <div className={styles.home}>
      <HeroSlider />
      <Capabilities />
      <NextLevel />
      <ContactCTA />
    </div>
  );
};

export default Home;