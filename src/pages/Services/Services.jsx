import React, { useState, useEffect } from 'react';
import styles from './Services.module.css';

// Import components directly
import ServicesHero from '../../components/Services/ServicesHero/ServicesHero';
import ServicesGrid from '../../components/Services/ServicesGrid/ServicesGrid';
import VideoCarousel from '../../components/Services/VideoCarousel/VideoCarousel';
import RackSystems from '../../components/Services/RackSystems/RackSystems';
import ParticlesBackground from '../../components/Services/ParticlesBackground/ParticlesBackground';

const Services = () => {
    const [theme, setTheme] = useState('light');

    // Theme management for the entire page
    useEffect(() => {
        // Listen for theme changes from ServicesHero component
        const handleThemeChange = (event) => {
            if (event.detail && event.detail.theme) {
                setTheme(event.detail.theme);
            }
        };

        window.addEventListener('themeChange', handleThemeChange);
        return () => window.removeEventListener('themeChange', handleThemeChange);
    }, []);

    return (
        <div className={`${styles.services} ${styles[theme]}`}>
            {/* Particles Background */}
            <ParticlesBackground theme={theme} particleCount={50} />
            
            {/* Hero Section */}
            <ServicesHero />
            
            {/* Services Grid Section */}
            <ServicesGrid />
            
            {/* Video Carousel Section */}
            <VideoCarousel />
            
            {/* Rack Systems Section */}
            <RackSystems />
        </div>
    );
};

export default Services;
