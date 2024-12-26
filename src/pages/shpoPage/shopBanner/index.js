import React, { useEffect, useState } from 'react';
import styles from './shopBanner.module.scss';

export default function ShopBanner() {
  const [topPosition, setTopPosition] = useState(-150);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(`.${styles.shopBanner}`);
      const bannerRect = banner.getBoundingClientRect();

      if (bannerRect.top <= 150 && bannerRect.bottom > 150) {
        const progress = Math.min(
          (150 - bannerRect.top) / bannerRect.height,
          1
        );
        setTopPosition(-150 + progress * 150);
      } else if (bannerRect.bottom <= 150) {
        setTopPosition(0);
      } else {
        setTopPosition(-150);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.shopBanner}>
      <div className={styles.shopBg} style={{ top: `${topPosition}px` }}></div>
      <div className={styles.shopBannerHead}>
        <h1>Shop</h1>
      </div>
    </section>
  );
}
