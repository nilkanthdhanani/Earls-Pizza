import { useEffect, useState, useRef } from 'react';
import { logo, shapeFooter } from '@/assets/images/image';
import styles from './footer.module.scss';
import Image from 'next/image';
import MapIcon from '@/assets/images/svg/mapIcon';
import Link from 'next/link';
import FacebookIcon from '@/assets/images/svg/facebookIcon';
import LinkdInIcon from '@/assets/images/svg/linkdInIcon';
import TwitterIcon from '@/assets/images/svg/twitterIcon';

export default function Footer() {
  const sectionRef = useRef(null);
  const [move, setMove] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY + window.innerHeight;

        if (scrollY > sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const scrollProgress =
            (scrollY - sectionTop) / (sectionHeight + window.innerHeight);
          const translateValue = Math.min(scrollProgress * 200, 200);
          setMove(translateValue);
        } else if (window.scrollY >= sectionTop + sectionHeight) {
          setMove(200);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={styles.footer} ref={sectionRef}>
      <div className={styles.footerBg}></div>
      <div className={styles.container2}>
        <div className={styles.footerBelt}>
          <div className={styles.beltIcon} style={{ top: `${move}px` }}>
            <Image src={shapeFooter} alt="shapeFooter" />
          </div>
          <div className={styles.container}>
            <div className={styles.footerBeltText}>
              <h2>
                Subscribe <span>to Our Newsletter</span>
              </h2>
              <form className={styles.subscribeMail}>
                <input type="email" placeholder="Your Mail Address" required />
                <button type="submit">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.footerMain}>
          <div className={styles.footerContact}>
            <div className={styles.footerTitle}>
              <MapIcon />
              <span>Contact Us</span>
            </div>
            <p>Street: 3840 Winifred Way, Marion, United States</p>
            <p>
              <Link href="tel:12345678901">(+1) 234-567-8901</Link><br />
              <Link href="tel:12345678902">(+1) 234-567-8902</Link>
            </p>
          </div>
          <div className={styles.footerLogo}>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <p>At Earls, we serve fresh, delicious pizza crafted with passion and dedication to providing unforgettable dining experiences.</p>
            <div className={styles.socialLinks}>
              <Link href={"https://www.facebook.com/"} target='_blank' aria-label='facebook'>
                <FacebookIcon />
              </Link>
              <Link href={"https://www.linkedin.com/"} target='_blank' aria-label='linkedin'>
                <LinkdInIcon />
              </Link>
              <Link href={"https://twitter.com/"} target='_blank' aria-label='twitter'>
                <TwitterIcon />
              </Link>
            </div>
            <p>Copyright By © EARLS - 2023</p>
          </div>
          <div className={styles.footerWorking}>
            <div className={styles.footerTitle}>
              <MapIcon />
              <span>Working Hours</span>
            </div>
            <p>Monday-Friday: <br /> 08:00 am -12:00 am</p>
            <p>Saturday-Sunday: <br /> 07:00am -11:00 pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
