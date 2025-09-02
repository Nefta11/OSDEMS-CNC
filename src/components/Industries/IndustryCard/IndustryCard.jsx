import React, { useEffect, useRef, useState } from 'react';
import styles from './IndustryCard.module.css';

const IndustryCard = ({ 
  title, 
  description, 
  importance, 
  image, 
  alt, 
  reverse = false,
  theme = 'light' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={cardRef}
      className={`${styles.industrySection} ${styles[theme]} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={`${styles.contentGrid} ${reverse ? styles.reverse : ''}`}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img
                src={image}
                alt={alt}
                className={styles.industryImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
          
          <div className={styles.contentColumn}>
            <div className={styles.content}>
              <h2 className={styles.sectionTitle}>{title}</h2>
              <div className={styles.titleUnderline}></div>
              
              <div className={styles.sectionContent}>
                <p className={styles.description}>{description}</p>
                
                <div className={styles.importanceSection}>
                  <h3 className={styles.importanceTitle}>Why It's Important:</h3>
                  <p className={styles.importance}>{importance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorativeElement}></div>
      </div>
    </section>
  );
};

export default IndustryCard;
