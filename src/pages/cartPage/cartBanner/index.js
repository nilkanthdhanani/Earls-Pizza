import React, { useEffect, useState } from 'react';
import styles from './cartBanner.module.scss';

export default function CartBanner() {
  const [topPosition, setTopPosition] = useState(-150);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(`.${styles.cartBanner}`);
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
    <section className={styles.cartBanner}>
      <div
        className={styles.cartBg}
        style={{ top: `${topPosition}px` }}
      ></div>
      <div className={styles.cartBannerHead}>
        <h1>Cart</h1>
      </div>
    </section>
  );
}
