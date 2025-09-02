import React, { useState, useEffect } from 'react';
import styles from './ServicesHero.module.css';

const ServicesHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "OUR MANUFACTURING CAPABILITIES",
      subtitle: "OSDEMS CNC",
      image: "https://osdemscnc.com/wp-content/uploads/2025/01/MECHANICAL-ASSEMBLY-SERVICES.jpg",
      theme: 'light'
    },
    {
      id: 2,
      title: "STAINLESS STEEL RACK",
      subtitle: "OSDEMS CNC", 
      image: "https://osdemscnc.com/wp-content/uploads/2025/01/CONVENTIONAL-MACHINING-SERVICE.jpg",
      theme: 'dark'
    }
  ];

  // Auto-advance slider every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Emit theme change event when slide changes
  useEffect(() => {
    const currentTheme = heroSlides[currentSlide]?.theme || 'light';
    const event = new CustomEvent('themeChange', {
      detail: { theme: currentTheme }
    });
    window.dispatchEvent(event);
  }, [currentSlide, heroSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSlider}>
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.heroSlide} ${index === currentSlide ? styles.active : ''} ${styles[slide.theme]}`}
          >
            <div className={styles.heroBackground}>
              <img 
                src={slide.image}
                alt={slide.title}
                className={styles.heroImage}
              />
            </div>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <span className={styles.heroSubtitle}>{slide.subtitle}</span>
                <h1 className={styles.heroTitle}>{slide.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        className={`${styles.navArrow} ${styles.navPrev}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
        </svg>
      </button>

      <button 
        className={`${styles.navArrow} ${styles.navNext}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
      </button>

      {/* Slide indicators */}
      <div className={styles.slideIndicators}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Particle effects */}
      <div className={styles.particleBackground}>
        <div className={styles.geometricShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;