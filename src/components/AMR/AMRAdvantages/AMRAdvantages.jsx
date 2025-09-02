import React, { useEffect, useRef, useState } from 'react';
import styles from './AMRAdvantages.module.css';

const AMRAdvantages = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const advantages = [
    {
      icon: (
        <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M214.5 209.6v66.2l33.5 33.5 33.3-33.3v-66.4l-33.4-33.4zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm145.1 414.4L367 441.6l-26-19.2v-65.5l-33.4-33.4-33.4 33.4v65.5L248 441.6l-26.1-19.2v-65.5l-33.4-33.4-33.5 33.4v65.5l-26.1 19.2-26.1-19.2v-87l59.5-59.5V188l59.5-59.5V52.9l26.1-19.2L274 52.9v75.6l59.5 59.5v87.6l59.7 59.7v87.1z"/>
        </svg>
      ),
      title: "A versatile portfolio",
      features: [
        "Autonomous mobile platforms",
        "Mobile manipulators",
        "HRC-compliant solutions",
        "All payloads",
        "For cleanroom applications",
        "Drive technologies: omnidirectional, differential",
        "Standardized and customer-specific solutions"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M556.686 290.542L410.328 64.829C397.001 44.272 374.417 32 349.917 32H56C25.121 32 0 57.122 0 88v8c0 44.112 35.888 80 80 80h196.042l-18.333 48H144c-48.523 0-88 39.477-88 88 0 30.879 25.121 56 56 56h131.552c2.987 0 5.914.549 8.697 1.631L352 408.418V480h224V355.829c0-23.225-6.679-45.801-19.314-65.287zM528 432H400v-23.582c0-19.948-12.014-37.508-30.604-44.736l-99.751-38.788A71.733 71.733 0 0 0 243.552 320H112c-4.411 0-8-3.589-8-8 0-22.056 17.944-40 40-40h113.709c19.767 0 37.786-12.407 44.84-30.873l24.552-64.281c8.996-23.553-8.428-48.846-33.63-48.846H80c-17.645 0-32-14.355-32-32v-8c0-4.411 3.589-8 8-8h293.917c8.166 0 15.693 4.09 20.137 10.942l146.358 225.715A71.84 71.84 0 0 1 528 355.829V432z"/>
        </svg>
      ),
      title: "Autonomous factory",
      features: [
        "Hybrid and free navigation: via SLAM method and via QR codes",
        "No-code solution with artificial intelligence",
        "Fleet management for the complete transport system",
        "Simple integration into existing production: VDA/VDMA-5050 compatible"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"/>
        </svg>
      ),
      title: "Global all-round service",
      features: [
        "Customer support 24/7, 365 days a year",
        "Broad portfolio of e-services",
        "Global partner network",
        "Feasibility studies, test setups",
        "Virtual simulation",
        "Programming services",
        "Training of employees on site or digitally"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.2c-3.3 151.4-82.1 261.1-175.8 307.8z"/>
        </svg>
      ),
      title: "High safety",
      features: [
        "AMR meets the requirements of various national and international safety standards for IoT devices",
        "TÜV-tested HRC system (robotics, grippers)",
        "ISO-3 cleanroom certification",
        "ESD protection acc. to ISO 61340-5-1 and ANSI ESD S20.20",
        "IP 54: Protection against water spray and dust"
      ]
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
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section ref={sectionRef} className={styles.advantagesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Intelligent systems from a single source</h2>
          <p className={styles.sectionDescription}>
            Our autonomous robots are developed and manufactured with the latest technologies and innovative functions to meet the <strong>highest standards in performance, reliability and safety</strong>. Our automation portfolio includes series products for industry that meet different specific requirements. These high quality standards are also applied exactly to the AMRs. Thanks to our extensive experience and specialized know-how, we are also able to develop targeted concepts for your tasks in this field.
          </p>
          <h4 className={styles.advantagesSubtitle}><strong>Your advantages when using autonomous mobile robotics from KUKA:</strong></h4>
        </div>

        <div className={styles.advantagesGrid}>
          {advantages.map((advantage, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`${styles.advantageCard} ${visibleCards.includes(index) ? styles.visible : ''}`}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className={styles.advantageIcon}>
                {advantage.icon}
              </div>
              <h3 className={styles.advantageTitle}>{advantage.title}</h3>
              <ul className={styles.advantageList}>
                {advantage.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>* {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMRAdvantages;