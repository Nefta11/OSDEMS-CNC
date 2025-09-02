import React from 'react';
import AMRHero from '../../components/AMR/AMRHero/AMRHero';
import AMRVideo from '../../components/AMR/AMRVideo/AMRVideo';
import AMRIntroduction from '../../components/AMR/AMRIntroduction/AMRIntroduction';
import AMRSecurity from '../../components/AMR/AMRSecurity/AMRSecurity';
import AMRPortfolio from '../../components/AMR/AMRPortfolio/AMRPortfolio';
import AMRAdvantages from '../../components/AMR/AMRAdvantages/AMRAdvantages';
import AMRSupport from '../../components/AMR/AMRSupport/AMRSupport';
import AMRContact from '../../components/AMR/AMRContact/AMRContact';
import styles from './AMR.module.css';

const AMR = () => {
  return (
    <div className={styles.amrPage}>
      <AMRHero />
      <AMRVideo />
      <main className={styles.mainContent}>
        <AMRIntroduction />
        <AMRSecurity />
        <AMRPortfolio />
        <AMRAdvantages />
        <AMRSupport />
        <AMRContact />
      </main>
    </div>
  );
};

export default AMR;
