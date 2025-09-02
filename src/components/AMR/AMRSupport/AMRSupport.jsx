import React, { useEffect, useRef, useState } from 'react';
import styles from './AMRSupport.module.css';

const AMRSupport = () => {
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

  const supportServices = [
    {
      title: "Feasibility studies",
      description: "Evaluation of the practical feasibility of a project through a thorough analysis of the following factors: technical feasibility, resource requirements, legal aspects and economic profitability.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      )
    },
    {
      title: "Test setups",
      description: "Design, development and execution of test setups in order to identify potential weaknesses or potential for improvement.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
        </svg>
      )
    },
    {
      title: "Network of certified system partners",
      description: "Our global network of certified system partners is spread out around the world and offers in-depth expertise in the field of autonomous mobile robotics. Together, we offer reliable support for every automation task.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
        </svg>
      )
    },
    {
      title: "Tailor-made service concepts",
      description: "Our service: from the planning and selection of suitable mobile robotic solutions through to the simulation and smooth start-up along with efficient operation in warehouses or in production and onto the overhauling and modernization of the entire fleet system.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className={styles.supportSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>360° support: from the initial idea to upgrades</h2>
        </div>

        <div className={`${styles.supportGrid} ${isVisible ? styles.visible : ''}`}>
          {supportServices.map((service, index) => (
            <div
              key={index}
              className={styles.supportCard}
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.supportIcon}>
                  {service.icon}
                </div>
                <h3 className={styles.supportTitle}>{service.title}</h3>
              </div>
              <p className={styles.supportDescription}>{service.description}</p>
              <div className={styles.cardFooter}>
                <div className={styles.readMore}>
                  <span>Learn more</span>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`${styles.contactCTA} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.ctaTitle}>Ready to get started?</h3>
          <p className={styles.ctaDescription}>Contact us to discuss your AMR automation needs</p>
          <div className={styles.ctaButtons}>
            <a 
              href="mailto:fernando.torres@osdemscnc.com" 
              className={styles.ctaButton}
            >
              Contact Osdems CNC
            </a>
            <a 
              href="http://wa.me/523311744584" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
            >
              We are your best option...!
            </a>
          </div>
        </div>
      </div>
      <div className={styles.backgroundPattern}></div>
    </section>
  );
};

export default AMRSupport;