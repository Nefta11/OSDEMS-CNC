import React, { useEffect, useRef, useState } from 'react';
import styles from './AMRPortfolio.module.css';

const AMRPortfolio = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const portfolioItems = [
    {
      title: "KUKA mobile platforms",
      description: "Our mobile transport platforms for all payloads are collision-free, operate in a swarm and offer absolute flexibility. And this both as a product carrier and a mobile production station.",
      image: "https://osdemscnc.com/wp-content/uploads/2025/02/1.avif",
      alt: "KUKA mobile platforms"
    },
    {
      title: "KUKA mobile robots",
      description: "Mobile manipulators are designed for safe transport of materials, machine tending, inspection, order picking and pick & place tasks. AMRs are capable of human-robot collaboration.",
      image: "https://osdemscnc.com/wp-content/uploads/2025/02/2.avif",
      alt: "KUKA mobile robots"
    },
    {
      title: "Fleet management software",
      description: "The navigation system enables intelligent control, real-time monitoring and optimization of the traffic flow of a heterogeneous group of vehicles (AGVs/AMR) in any configuration.",
      image: "https://osdemscnc.com/wp-content/uploads/2025/02/3.avif",
      alt: "Fleet management software"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section ref={sectionRef} className={styles.portfolioSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>KUKA gets your production moving: AMR portfolio</h2>
        
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`${styles.portfolioItem} ${visibleCards.includes(index) ? styles.visible : ''}`}
            >
              <div className={styles.portfolioContent}>
                <h3 className={styles.portfolioTitle}>{item.title}</h3>
                <p className={styles.portfolioDescription}>{item.description}</p>
              </div>
              <div className={styles.portfolioImageWrapper}>
                <img 
                  src={item.image}
                  alt={item.alt}
                  className={styles.portfolioImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayIcon}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.backgroundElements}>
        <div className={styles.element1}></div>
        <div className={styles.element2}></div>
        <div className={styles.element3}></div>
      </div>
    </section>
  );
};

export default AMRPortfolio;