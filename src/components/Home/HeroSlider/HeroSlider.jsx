import React, { useState, useEffect } from 'react';
import styles from './HeroSlider.module.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Industrial automation and robotics, for manufacturing processes",
      subtitle: "Effective Problem Solutions",
      description: "Crafting the parts is just the beginning. Bringing them together with precision is where the true innovation happens.",
      stats: [
        { number: "Fast", label: "Query Execution" },
        { number: "Effective", label: "Problem Solutions" },
        { number: "Easy", label: "To Get Started" }
      ],
      bottomText: "We are your best option...!",
      theme: "light" // Fondo blanco
    },
    {
      title: "The future is Osdems CNC",
      subtitle: "Innovation & Quality",
      description: "Unlock the precision of advanced CNC machining and elevate your business with cutting-edge manufacturing solutions designed for the future.",
      stats: [
        { number: "+45", label: "Collaborators" },
        { number: "20+", label: "Business Partners" },
        { number: "4.7", label: "Years of experience" }
      ],
      bottomText: "Start your project's success",
      theme: "teal" // Fondo teal
    }
  ];

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={`${styles.hero} ${styles[slides[currentSlide].theme]}`}>
      <div className={styles.particleBackground}></div>
      <div className={styles.geometricShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      
      {/* Navigation Arrows */}
      <button className={styles.navArrow} onClick={prevSlide} style={{ left: '20px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      
      <button className={styles.navArrow} onClick={nextSlide} style={{ right: '20px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.gradientLine}></div>
          <h1 className={styles.heroTitle}>
            {slides[currentSlide].title}
          </h1>
          <p className={styles.heroDescription}>
            {slides[currentSlide].description}
          </p>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            {slides[currentSlide].stats.map((stat, index) => (
              <div key={`${currentSlide}-${index}`} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className={styles.bottomText}>
            {slides[currentSlide].bottomText}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className={styles.slideIndicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;