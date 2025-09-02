import React, { useState, useRef, useEffect } from 'react';
import styles from './Capabilities.module.css';

const Capabilities = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const capabilities = [
    {
      title: "Fixtures",
      description: "In-circuit testing provides electronic manufacturers a reliable, high fault coverage verification method for the assembly process.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    },
    {
      title: "Design",
      description: "In-circuit testing (ICT) is an example electrical probe tests a populated printed circuit board (PCB), checking for shorts, opens, resistance, capacitance, and other basic quantities.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
          <line x1="12" y1="22" x2="12" y2="15.5"/>
          <polyline points="22 8.5 12 15.5 2 8.5"/>
        </svg>
      )
    },
    {
      title: "Functional test Systems",
      description: "These systems can collect and process data, and can be tailored to specific applications.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      title: "ICT",
      description: "Typical ICT uses a 'bed of nails' to make connection. This is an array of spring probes that contact the PCB, usually by pulling the board down on to them with a vacuum pump.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      )
    },
    {
      title: "FT",
      description: "Functional test equipment is used to test the performance of a piece of equipment by simulating its real-world working environment.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
          <path d="M18 12h3"/>
          <path d="M3 12h3"/>
        </svg>
      )
    },
    {
      title: "Automation",
      description: "To enable success in achieving your design for automated manufacturing objectives and goals, we recommend creating thoughtful business and product requirements.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"/>
          <path d="M8 12l2 2 4-4"/>
          <path d="M16 8l-8 8"/>
          <path d="M8 8l8 8"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.capabilities} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h6 className={styles.subtitle}>
            On today's competitive world, cost reduction plays an important part,
            it is not just to bring any machine to the line, but to consider a wider picture.
          </h6>
          <h2 className={styles.sectionTitle}>OUR CAPABILITIES</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.capabilitiesGrid}>
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`${styles.capabilityCard} ${visibleCards.includes(index) ? styles.visible : ''}`}
            >
              <div className={styles.cardIcon}>
                {capability.icon}
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        <div className={styles.finalMessage}>
          <div className={styles.messageIcon}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <h3>If you are looking for a reliable partnership to bring the best solution, we are here for you! Whether is a simple FT solution you are looking for or a high Voltage, we can do it for you!</h3>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;