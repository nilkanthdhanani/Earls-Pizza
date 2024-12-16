import Link from 'next/link';
import styles from './header.module.scss';
import { logo } from '@/assets/images/image';
import Image from 'next/image';
import CartIcon from '@/assets/images/svg/cartIcon';
import LoginIcon from '@/assets/images/svg/loginIcon';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MenuIcon from '@/assets/images/svg/menuIcon';

export default function Header() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={styles.header}>
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
              <div className={styles.cart}>
                <CartIcon />
              </div>
            </Link>
            <Link href={"/login"}>
              <div className={styles.logIn}>
                <LoginIcon />
              </div>
            </Link>
            <div className={styles.menu}>
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
