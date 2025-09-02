import React from 'react';
import styles from './AMRVideo.module.css';

const AMRVideo = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.videoContainer}>
        <video 
          className={styles.backgroundVideo}
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="https://osdemscnc.com/wp-content/uploads/2025/02/AMR.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}>
          <div className={styles.overlayContent}>
            <div className={styles.playButton}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMRVideo;