import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';
import { logo } from '@/assets/images/image';
import CartIcon from '@/assets/images/svg/cartIcon';
import LoginIcon from '@/assets/images/svg/loginIcon';
import MenuIcon from '@/assets/images/svg/menuIcon';
import Sidebar from '../sidebar';

export default function Header() {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scroll : ''}`}>
        <div className={styles.container2}>
          <div className={styles.headerDiv}>
            <Link href={"/"}>
              <div className={styles.logo}>
                <Image src={logo} alt="logo" />
              </div>
            </Link>
            <nav>
              <Link href={"/"} className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
                <span>Home</span>
                <div className={styles.activeTag}></div>
              </Link>
              <Link href={"/about"} className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>
                <span>About Us</span>
                <div className={styles.activeTag}></div>
              </Link>
              <Link href={"/blog"} className={`${styles.link} ${pathname === '/blog' ? styles.active : ''}`}>
                <span>Blog</span>
                <div className={styles.activeTag}></div>
              </Link>
              <Link href={"/shop"} className={`${styles.link} ${pathname === '/shop' ? styles.active : ''}`}>
                <span>Shop</span>
                <div className={styles.activeTag}></div>
              </Link>
              <Link href={"/contact"} className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}>
                <span>Contact</span>
                <div className={styles.activeTag}></div>
              </Link>
            </nav>
            <div className={styles.cartLogin}>
              <Link href={"/cart"}>
                <div className={styles.cart} aria-label='cart'>
                  <CartIcon />
                </div>
              </Link>
              <Link href={"/login"}>
                <div className={styles.logIn} aria-label='login'>
                  <LoginIcon />
                </div>
              </Link>
              <div className={styles.menu} onClick={toggleSidebar}>
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}
