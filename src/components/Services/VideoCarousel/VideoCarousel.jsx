import React, { useState, useEffect } from 'react';
import styles from './VideoCarousel.module.css';

const VideoCarousel = () => {
    const [currentVideo, setCurrentVideo] = useState(0);

    // Video carousel data with actual video URLs
    const videos = [
        {
            id: 1,
            src: "https://osdemscnc.com/wp-content/uploads/2025/02/servicios-video-1.mp4",
            poster: "/api/placeholder/400/300"
        },
        {
            id: 2,
            src: "https://osdemscnc.com/wp-content/uploads/2025/02/servicios-video-2.mp4",
            poster: "/api/placeholder/400/300"
        },
        {
            id: 3,
            src: "https://osdemscnc.com/wp-content/uploads/2025/02/servicios-video-3.mp4",
            poster: "/api/placeholder/400/300"
        }
    ];

    // Auto-advance video carousel every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [videos.length]);

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const goToVideo = (index) => {
        setCurrentVideo(index);
    };

    return (
        <section className={styles.videoSection}>
            <div className={styles.container}>
                <div className={styles.videoCarousel}>
                    <div className={styles.videoContainer}>
                        {videos.map((video, index) => (
                            <div
                                key={video.id}
                                className={`${styles.videoSlide} ${index === currentVideo ? styles.active : ''}`}
                            >
                                <video
                                    className={styles.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster={video.poster}
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className={styles.videoOverlay}>
                                    <div className={styles.playButton}>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Video Navigation */}
                    <div className={styles.videoNavigation}>
                        <button
                            className={`${styles.navButton} ${styles.prevButton}`}
                            onClick={prevVideo}
                            aria-label="Previous video"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                            </svg>
                        </button>
                        <button
                            className={`${styles.navButton} ${styles.nextButton}`}
                            onClick={nextVideo}
                            aria-label="Next video"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                        </button>
                    </div>

                    {/* Video Indicators */}
                    <div className={styles.videoIndicators}>
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${index === currentVideo ? styles.active : ''}`}
                                onClick={() => goToVideo(index)}
                                aria-label={`Go to video ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoCarousel;
