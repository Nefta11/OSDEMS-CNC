import React from 'react';
import styles from './IndustriesHero.module.css';

const IndustriesHero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Video Background */}
      <div className={styles.videoBackground}>
        <video 
          className={styles.heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://osdemscnc.com/wp-content/uploads/2025/02/servicios-video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay */}
      <div className={styles.heroOverlay}></div>
      
      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>INDUSTRIES</h1>
          <p className={styles.heroSubtitle}>Precision automation solutions for every sector</p>
        </div>
        
        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollCircle}>
            <div className={styles.scrollArrow}></div>
          </div>
        </div>
      </div>
      
      {/* Particles Effect */}
      <div className={styles.particlesContainer}>
        {[...Array(30)].map((_, i) => (
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
    </section>
  );
};

export default IndustriesHero;
