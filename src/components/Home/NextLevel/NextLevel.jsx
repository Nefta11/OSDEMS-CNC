import React, { useState, useEffect } from 'react';
import styles from './NextLevel.module.css';

const NextLevel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(`.${styles.nextLevel}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.nextLevel}>
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.triangle}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.nextLevelContent}>
          <h2 className={`${styles.nextLevelTitle} ${isVisible ? styles.animate : ''}`}>
            <span className={styles.nextText}>next level</span>
            <span className={styles.osdemsText}>osdems</span>
            <span className={styles.cncText}>cnc</span>
          </h2>
          <p className={`${styles.nextLevelDescription} ${isVisible ? styles.animate : ''}`}>
            Does your company need CNC machining?
          </p>
          <button className={`${styles.nextLevelCta} ${isVisible ? styles.animate : ''}`}>
            <span>let's get started!</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NextLevel;