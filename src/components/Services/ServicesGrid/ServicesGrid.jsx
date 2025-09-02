import React, { useEffect, useRef, useState } from 'react';
import styles from './ServicesGrid.module.css';

const ServicesGrid = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  // Services data organized in columns
  const servicesData = [
    {
      title: "Manufacturing & Assembly",
      items: [
        "Ultrasonic and RF Welding",
        "Resistance and laser welding",
        "Soldering and brazing",
        "Laser mask welding",
        "One and two part adhesives",
        "UV, visible light and thermal curing",
        "Material handling",
        "Mass flow leak testing",
        "Industrial robot work cell",
        "Automation",
        "SMT Automation",
        "Medical Automated process",
        "Design analysis and optimization for tooling and assembly"
      ]
    },
    {
      title: "Precision & Control",
      items: [
        "Industrial robot integration for flexible, multi-axis problems",
        "Precision dispensing",
        "Micro solenoid valves for high precision dispensing",
        "Ink jets for precise volumes",
        "Coordinated dispensing",
        "PLC control in all common industrial platforms",
        "Servo and stepper motors",
        "Design evaluation for manufacturability and test",
        "Design for service and warranty channel support"
      ]
    },
    {
      title: "Environmental Control",
      items: [
        "Aseptic environmental control",
        "Inert environmental control",
        "Special temperature environmental control",
        "ESD control",
        "CMP",
        "Drying processes",
        "Belt, ball screw and linear motor motion stages",
        "Rolling contact and air bearing stages",
        "Design Verification Test and Engineering Planning"
      ]
    },
    {
      title: "Testing & Inspection",
      items: [
        "Vision guided motion",
        "Visible and IR",
        "Resolutions to sub-micron",
        "Optical power measurement for photonics products",
        "Vision inspection",
        "Electric & magnetic testing",
        "ICT",
        "FT",
        "Fixtures"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section ref={sectionRef} className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Manufacturing Capabilities</h2>
          <p className={styles.sectionDescription}>
            Comprehensive solutions for all your industrial automation and manufacturing needs
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {servicesData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={el => itemRefs.current[categoryIndex] = el}
              className={`${styles.serviceColumn} ${visibleItems.includes(categoryIndex) ? styles.visible : ''}`}
              style={{ '--delay': `${categoryIndex * 0.2}s` }}
            >
              <div className={styles.columnHeader}>
                <h3 className={styles.columnTitle}>{category.title}</h3>
                <div className={styles.columnIcon}>
                  {categoryIndex === 0 && (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                    </svg>
                  )}
                  {categoryIndex === 1 && (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                  {categoryIndex === 2 && (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  )}
                  {categoryIndex === 3 && (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  )}
                </div>
              </div>
              
              <ul className={styles.servicesList}>
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className={styles.serviceItem}
                    style={{ '--item-delay': `${itemIndex * 0.1}s` }}
                  >
                    <div className={styles.bullet}>
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <span className={styles.itemText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.element1}></div>
        <div className={styles.element2}></div>
      </div>
    </section>
  );
};

export default ServicesGrid;