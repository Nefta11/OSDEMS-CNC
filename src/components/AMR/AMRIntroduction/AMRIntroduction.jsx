import React, { useEffect, useRef, useState } from 'react';
import styles from './AMRIntroduction.module.css';

const AMRIntroduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.introSection}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
          The future of robotics is mobile and autonomous
        </h2>
        <div className={`${styles.introText} ${isVisible ? styles.visible : ''}`}>
          <p>
            Thanks to <strong>advanced sensor technology</strong>, <strong>no-code programming</strong> as well as <strong>state-of-the-art battery technology</strong> and <strong>higher energy density</strong>, autonomous mobile robotics is able to navigate autonomously, detect obstacles safely, evade these and create alternative routes. To ensure the continuous stable operation of our mobile robots, all KUKA vehicles are equipped with state-of-the-art Li-ion batteries, which are available around the clock in inductive charging mode. <strong>The result: 24/7 operation and 99% availability.</strong>
          </p>
          <p>
            This unrestricted mobility opens up entirely new areas of application for robotics. It is used in a wide range of industries, including warehousing, manufacturing, healthcare and retail.
          </p>
        </div>
      </div>
      <div className={styles.backgroundElements}>
        <div className={styles.element1}></div>
        <div className={styles.element2}></div>
      </div>
    </section>
  );
};

export default AMRIntroduction;