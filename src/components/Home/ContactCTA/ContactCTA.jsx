import React, { useState, useEffect } from 'react';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'READY to make BIG THINGS HAPPEN?';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(`.${styles.contactCta}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setTypewriterText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <>
      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.testimonialContent}>
            <h2 className={styles.testimonialTitle}>What Our Clients Say</h2>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <blockquote className={styles.testimonialQuote}>
                "I would like to express my utmost appreciation for Osdems CNC, a leading company in the field of advertising.
                Their commitment to creative design and innovative ideas truly sets them apart in the industry.
                The team's ability to seamlessly blend creativity with functionality has resulted in remarkable campaigns that resonate with audiences."
              </blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <span>NR</span>
                </div>
                <div className={styles.authorInfo}>
                  <cite>Noe Rivas</cite>
                  <span>Business Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.contactCta}>
        <div className={styles.dotMatrix}></div>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <div className={styles.ctaIcon}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            
            <h2 className={`${styles.contactTitle} ${isVisible ? styles.animate : ''}`}>
              Work with Us!
            </h2>
            
            <p className={styles.contactDescription}>
              <span className={styles.typewriter}>
                {typewriterText}
                <span className={styles.cursor}>|</span>
              </span>
            </p>
            
            <div className={styles.contactActions}>
              <a 
                href="http://wa.me/523311744584" 
                className={`${styles.contactButton} ${isVisible ? styles.animate : ''}`} 
                target="_blank" 
                rel="noopener"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
                <span>Contact us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCTA;