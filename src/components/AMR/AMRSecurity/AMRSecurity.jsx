import React, { useEffect, useRef, useState } from 'react';
import styles from './AMRSecurity.module.css';

const AMRSecurity = () => {
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

  return (
    <section ref={sectionRef} className={styles.securitySection}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>Security and no-code programming for barrier-free flow</h2>
          
          {/* Mobile Video */}
          <div className={styles.videoContainerMobile}>
            <div className={styles.videoWrapper}>
              <video 
                className={styles.securityVideo}
                controls
                playsInline
                preload="metadata"
              >
                <source src="https://osdemscnc.com/wp-content/uploads/2025/02/Feel-the-flow-of-automation-Autonomous-mobile-robotics-by-KUKA-KUKA-Robots-Automation-1080p-h264.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Desktop Carousel */}
          <div className={styles.carouselSection}>
            <div className={styles.videoWrapper}>
              <video 
                className={styles.securityVideo}
                controls
                playsInline
                preload="metadata"
              >
                <source src="https://osdemscnc.com/wp-content/uploads/2025/02/Feel-the-flow-of-automation-Autonomous-mobile-robotics-by-KUKA-KUKA-Robots-Automation-1080p-h264.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className={styles.videoOverlay}>
                <div className={styles.overlayText}>
                  <h3>Advanced Security Technology</h3>
                  <p>Intelligent navigation and obstacle detection systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMRSecurity;