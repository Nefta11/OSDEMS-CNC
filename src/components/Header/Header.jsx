import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import ContactInfo from '../ContactInfo/ContactInfo';
import SocialMedia from '../SocialMedia/SocialMedia';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import styles from './Header.module.css';

const Header = () => {
    const scrollDirection = useScrollDirection(50);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [cartItems] = useState(3);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar tamaño de pantalla
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 1024);
            // Cerrar menú si se cambia a desktop
            if (window.innerWidth > 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Bloquear scroll cuando el menú móvil está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    // Datos de fallback basados en la información REAL extraída del sitio web
    const data = {
        contact: {
            location: "Guadalajara, Jal",
            email: "contact@osdemscnc.com",
            phones: ["+52 33 1822 4312", "+52 33 1174 4584", "+52 33 2622 5912"]
        },
        navigation: [
            { text: 'HOME', href: '/', active: true },
            {
                text: 'COMPANY',
                href: '/nosotros',
                hasDropdown: true,
                dropdownItems: [
                    { text: 'ABOUT US', href: '/nosotros' },
                    { text: 'HISTORY', href: '/history' },
                    { text: 'NEWS', href: '/news' }
                ]
            },
            { text: 'SERVICES', href: '/servicios' },
            { text: 'AMR', href: '/amr' },
            { text: 'INDUSTRIES', href: '/industries' },
            { text: 'CAREER', href: '/contacto' }
        ],
        social: [
            { platform: 'Facebook', url: 'https://www.facebook.com/osdemsmaquinados?mibextid=JRoKGi', icon: 'fab fa-facebook-f' },
            { platform: 'Instagram', url: 'https://www.instagram.com/_parts.cnc_/?igshid=MzMyNGUyNmU2YQ%3D%3D', icon: 'fab fa-instagram' },
            { platform: 'YouTube', url: 'https://www.youtube.com/channel/UCzpFRl3eZQpBrdMwD-BHJdA', icon: 'fab fa-youtube' },
            { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/osdems-cnc/posts/?feedView=all', icon: 'fab fa-linkedin-in' }
        ]
    };

    return (
        <header className={styles.header}>
            {/* Top Bar con información de contacto */}
            <div className={`${styles.topBar} ${scrollDirection === 'down' ? styles.hidden : ''}`}>
                <div className={styles.container}>
                    <div className={styles.topBarContent}>
                        <ContactInfo
                            location={data.contact.location}
                            email={data.contact.email}
                            phones={data.contact.phones}
                            compact={true}
                        />
                        <SocialMedia
                            links={data.social}
                            compact={true}
                        />
                    </div>
                </div>
            </div>

            {/* Main Header con logo y navegación */}
            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.mainHeaderContent}>
                        <a href="/" className={styles.logo}>
                            <img
                                src="https://raw.githubusercontent.com/Nefta11/OSDEMS-CNC/refs/heads/main/public/images/logo-cnc-nuevo.jpg"
                                alt="OSDEMS CNC"
                                className={styles.logoImage}
                            />
                        </a>

                        <Navigation
                            items={data.navigation}
                            className={styles.navigation}
                            isMobile={false}
                        />

                        {/* Botón menú hamburguesa para móvil */}
                        <button 
                            className={styles.mobileMenuButton}
                            onClick={toggleMobileMenu}
                            aria-label="Menú de navegación"
                        >
                            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`}></span>
                            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`}></span>
                            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`}></span>
                        </button>

                        <div className={styles.cartContainer}>
                            <button className={styles.cartIcon} aria-label="Carrito de compras">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="m1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                {cartItems > 0 && (
                                    <span className={styles.cartBadge}>{cartItems}</span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay para cerrar menú móvil */}
            {isMobileMenuOpen && (
                <div className={styles.mobileOverlay} onClick={closeMobileMenu}></div>
            )}

            {/* Menú móvil */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuHeader}>
                    <img src="/public/images/logo-cnc-nuevo.jpg" alt="OSDEMS CNC" className={styles.mobileMenuLogo} />
                    <button 
                        className={styles.mobileMenuClose}
                        onClick={closeMobileMenu}
                        aria-label="Cerrar menú"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                
                <div className={styles.mobileMenuContent}>
                    <Navigation
                        items={data.navigation}
                        className={styles.mobileNavigation}
                        isMobile={true}
                        onItemClick={closeMobileMenu}
                    />
                    
                    <div className={styles.mobileMenuFooter}>
                        <div className={styles.mobileContact}>
                            <h4>Contacto</h4>
                            <ContactInfo
                                location={data.contact.location}
                                email={data.contact.email}
                                phones={data.contact.phones}
                                compact={false}
                            />
                        </div>
                        
                        <div className={styles.mobileSocial}>
                            <h4>Síguenos</h4>
                            <SocialMedia
                                links={data.social}
                                compact={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
