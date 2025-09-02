import React from 'react';
import styles from './ParticlesBackground.module.css';

const ParticlesBackground = ({ theme = 'light', particleCount = 50 }) => {
  return (
    <div className={`${styles.particles} ${styles[theme]}`}>
      {[...Array(particleCount)].map((_, i) => (
        <div 
          key={i} 
          className={styles.particle}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
