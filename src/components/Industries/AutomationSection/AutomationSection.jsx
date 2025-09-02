import React, { useEffect, useRef, useState } from 'react';
import styles from './AutomationSection.module.css';

const AutomationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Eficiencia Mejorada",
      description: "Incrementa la productividad hasta un 40% mediante la automatización de procesos repetitivos."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Calidad Consistente",
      description: "Reduce errores humanos y mantiene estándares de calidad uniformes en toda la producción."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <path d="M12 2v6l3-3-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12h-6l3-3-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22v-6l-3 3 3 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12h6l-3 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Escalabilidad",
      description: "Adapta fácilmente la producción a las demandas del mercado sin comprometer la calidad."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2"/>
          <path d="M13 12h1c1 0 2-1 2-2V7c0-1-1-2-2-2h-1v7z" stroke="currentColor" strokeWidth="2"/>
          <path d="M11 12H9c-1 0-2-1-2-2V7c0-1 1-2 2-2h2v7z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Reducción de Costos",
      description: "Minimiza costos operativos a largo plazo y optimiza el uso de recursos materiales."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.automationSection} ${isVisible ? styles.visible : ''}`}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.decorativeCircle}></div>
        <div className={styles.decorativeCircle2}></div>
        <div className={styles.geometricPattern}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>¿Por Qué es Importante la Automatización?</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            La automatización industrial no es solo una tendencia, es una necesidad estratégica 
            que define el futuro de la manufactura competitiva.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={styles.benefitCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className={styles.statisticsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>40%</div>
            <div className={styles.statLabel}>Incremento en Productividad</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>60%</div>
            <div className={styles.statLabel}>Reducción de Errores</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>25%</div>
            <div className={styles.statLabel}>Ahorro en Costos Operativos</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>80%</div>
            <div className={styles.statLabel}>Mejora en Calidad</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>¿Listo para Transformar tu Industria?</h3>
          <p className={styles.ctaDescription}>
            Descubre cómo nuestras soluciones de automatización pueden revolucionar 
            tu proceso productivo y llevarte al siguiente nivel de competitividad.
          </p>
          <button className={styles.ctaButton}>
            <span>Consulta Gratuita</span>
            <svg viewBox="0 0 24 24" fill="none" className={styles.buttonIcon}>
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
