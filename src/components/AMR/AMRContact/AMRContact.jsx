import React, { useEffect, useRef, useState } from 'react';
import styles from './AMRContact.module.css';

const AMRContact = () => {
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

  const contactInfo = [
    {
      type: 'phone',
      href: 'http://wa.me/523311744584',
      text: '+52 33 1174 4584',
      icon: (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
        </svg>
      )
    },
    {
      type: 'phone',
      href: 'http://wa.me/523318224312',
      text: '+52 33 1822 4312',
      icon: (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
        </svg>
      )
    },
    {
      type: 'phone',
      href: 'http://wa.me/523316911593',
      text: '+52 33 1691 1593',
      icon: (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
        </svg>
      )
    },
    {
      type: 'email',
      href: 'mailto:contact@osdemscnc.com',
      text: 'contact@osdemscnc.com',
      icon: (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458zm-31.991-187.704c4.249 5.159 3.465 12.795-1.745 16.981-28.975 23.283-59.274 47.597-70.929 56.863C336.636 362.283 299.205 400 256 400c-43.452 0-81.287-38.237-103.335-55.86-11.279-8.967-41.744-33.413-70.927-56.865-5.21-4.187-5.993-11.822-1.745-16.981l15.258-18.528c4.178-5.073 11.657-5.843 16.779-1.726 28.618 23.001 58.566 47.035 70.56 56.571C200.143 320.631 232.307 352 256 352c23.602 0 55.246-30.88 73.41-45.389 11.994-9.535 41.944-33.57 70.563-56.568 5.122-4.116 12.601-3.346 16.778 1.727l15.258 18.526z"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={`${styles.contactContent} ${isVisible ? styles.visible : ''}`}>
              <h2 className={styles.contactTitle}>Contact</h2>
              <p className={styles.contactSubtitle}>Ready to transform your operations with AMR technology?</p>
              
              <div className={styles.contactList}>
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    target={contact.type === 'phone' ? '_blank' : undefined}
                    rel={contact.type === 'phone' ? 'noopener noreferrer' : undefined}
                    className={styles.contactItem}
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    <div className={styles.contactIcon}>
                      {contact.icon}
                    </div>
                    <span className={styles.contactText}>{contact.text}</span>
                  </a>
                ))}
              </div>

              <div className={styles.additionalInfo}>
                <div className={styles.infoCard}>
                  <h3>Expert Consultation</h3>
                  <p>Our AMR specialists are ready to discuss your automation needs and provide tailored solutions.</p>
                </div>
                <div className={styles.infoCard}>
                  <h3>24/7 Support</h3>
                  <p>We provide round-the-clock technical support to ensure your AMR systems operate at peak performance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.visualSection}>
            <div className={`${styles.visualContent} ${isVisible ? styles.visible : ''}`}>
              <div className={styles.techGrid}>
                <div className={styles.techItem}>
                  <div className={styles.techIcon}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span>Advanced AI</span>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techIcon}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span>99% Reliability</span>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techIcon}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <span>TÜV Certified</span>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techIcon}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>
                    </svg>
                  </div>
                  <span>Global Network</span>
                </div>
              </div>
            </div>
          </div>
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

export default AMRContact;