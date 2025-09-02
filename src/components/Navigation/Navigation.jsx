import React, { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = ({ items = [], className = '', isLoading = false }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Datos de navegación por defecto si no se pasan items
  const defaultItems = [
    { text: 'HOME', href: '/', active: true },
    { 
      text: 'COMPANY', 
      href: '/nosotros', 
      hasDropdown: true,
      dropdownItems: [
        { text: 'ABOUT US', href: '/about-us' },
        { text: 'HISTORY', href: '/history' },
        { text: 'NEWS', href: '/news' }
      ]
    },
    { text: 'SERVICES', href: '/servicios' },
    { text: 'AMR', href: '/amr' },
    { text: 'INDUSTRIES', href: '/industries' },
    { text: 'CARRER', href: '/contacto' }
  ];

  const navigationItems = items.length > 0 ? items : defaultItems;

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  if (isLoading) {
    return <div className={styles.loading}>Cargando navegación...</div>;
  }

  return (
    <nav className={`${styles.navigation} ${className}`}>
      <ul className={styles.navigationList}>
        {navigationItems.map((item, index) => (
          <li 
            key={index} 
            className={styles.navigationItem}
            onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
            onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
          >
            <a 
              href={item.href}
              className={`${styles.navigationLink} ${item.active ? styles.active : ''}`}
            >
              {item.text}
              {item.hasDropdown && <span className={styles.dropdownArrow}> ▼</span>}
            </a>
            
            {item.hasDropdown && item.dropdownItems && activeDropdown === index && (
              <div className={styles.dropdown}>
                <ul className={styles.dropdownList}>
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex} className={styles.dropdownItem}>
                      <a 
                        href={dropdownItem.href}
                        className={styles.dropdownLink}
                      >
                        {dropdownItem.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
