import React, { useEffect, useRef, useState } from 'react';
import styles from './RackSystems.module.css';

const RackSystems = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  // Rack systems data matching original content
  const rackSystems = [
    {
      name: "Menorack",
      description: "Manual loading rack with a capacity of up to 1800kg, with a wooden shelf or metal panel. Ideal for picking.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
        </svg>
      )
    },
    {
      name: "Selective",
      description: "Ideal system for storing products on pallets, allowing for a wide variety of products, adapting to load types, volume and weight.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 9V7l-3-2-3 2v2l3 2 3-2zM6.5 9V7L3 5 0 7v2l3 2 2.5-2zm7.5 4.5V11l-3-2-3 2v2.5l3 2 3-2.5zM21 16v-2l-3-2-3 2v2l3 2 3-2zM6.5 16v-2L3 12l-3 2v2l3 2 2.5-2z"/>
        </svg>
      )
    },
    {
      name: "Drive in",
      description: "Perfect system for storing homogeneous products, with a large number of pallets per reference. This system allows for maximum use of the available space, both in surface and height.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      )
    },
    {
      name: "Push back",
      description: "This is the name given to the storage system by accumulation that allows storing 2 to 6 pallets in depth per level. Ideal for refrigeration chambers.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
        </svg>
      )
    },
    {
      name: "Cantilever",
      description: "Rack for bars or very long products, it can store lengths of more than 3 meters. It is designed for long and/or bulky loads.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21h4V9H1v12zm22-11h-6v11h6V10zM7 21h10v-8H7v8zM3 7h18V5H3v2z"/>
        </svg>
      )
    },
    {
      name: "Mezzanine",
      description: "Floor levels supported by the same rack structure, using the same with a number of levels for manual loading, making the most of the height of the warehouse.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z"/>
        </svg>
      )
    },
    {
      name: "Dynamic",
      description: "Ideal for storing high density products (up to 40 pallets deep) with wheels or rollers safely due to their speed controllers.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      )
    },
    {
      name: "Carton Flow",
      description: "For those processes where the speed of the assortment is essential. With this system we have a \"first in, first out\" tool. For high density of boxes and light products.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      name: "Self-supporting",
      description: "System whose main characteristic is that the shelving is part of the structure of the building.",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
        </svg>
      )
    }
  ];

  // Hero section for Rack Systems
  const heroData = {
    title: "STAINLESS STEEL RACK",
    subtitle: "OSDEMS CNC",
    image: "https://osdemscnc.com/wp-content/uploads/2025/01/CONVENTIONAL-MACHINING-SERVICE.jpg"
  };

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
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <div className={styles.rackSystemsWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div 
          className={styles.heroBackground}
          style={{ backgroundImage: `url(${heroData.image})` }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.heroSubtitle}>{heroData.subtitle}</span>
              <h2 className={styles.heroTitle}>{heroData.title}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Rack Systems Grid */}
      <section ref={sectionRef} className={styles.rackSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Storage Solutions</h2>
            <p className={styles.sectionDescription}>
              Comprehensive rack systems designed for optimal warehouse efficiency and storage capacity
            </p>
          </div>

          <div className={styles.rackGrid}>
            {rackSystems.map((rack, index) => (
              <div 
                key={index} 
                ref={el => itemRefs.current[index] = el}
                className={`${styles.rackItem} ${visibleItems.includes(index) ? styles.visible : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className={styles.rackCard}>
                  <div className={styles.rackIcon}>
                    <div className={styles.iconSvg}>{rack.icon}</div>
                  </div>
                  <div className={styles.rackContent}>
                    <h3 className={styles.rackName}>{rack.name}</h3>
                    <p className={styles.rackDescription}>{rack.description}</p>
                  </div>
                  <div className={styles.rackAccent}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorations */}
        <div className={styles.backgroundElements}>
          <div className={styles.element1}></div>
          <div className={styles.element2}></div>
          <div className={styles.element3}></div>
        </div>
      </section>
    </div>
  );
};

export default RackSystems;
