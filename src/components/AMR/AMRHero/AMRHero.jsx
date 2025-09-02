import React from 'react';
import styles from './AMRHero.module.css';

const AMRHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h2 className={styles.heroSubtitle}>OSDEMS CNC</h2>
          <h1 className={styles.heroTitle}>AUTONOMOUS MOBILE ROBOTICS (AMR)</h1>
        </div>
        <div className={styles.particleBackground}></div>
        <div className={styles.geometricShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <img 
          src="https://osdemscnc.com/wp-content/uploads/2025/01/desig-cnc1.jpg" 
          alt="AMR Background" 
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default AMRHero;