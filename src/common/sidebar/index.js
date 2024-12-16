import { useEffect, useRef } from 'react';
import styles from './sidebar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/assets/images/image';
import CloseIcon from '@/assets/images/svg/closeIcon';
import { usePathname } from 'next/navigation';

export default function Sidebar({ isOpen, onClose }) {
    const pathname = usePathname();
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                isOpen
            ) {
                onClose();
            }
        }

        function handleResize() {
            if (window.innerWidth > 1024 && isOpen) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen, onClose]);

    const handleLinkClick = () => {
        onClose(); // Close the sidebar after navigating
    };

    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.sidebarContent} ref={sidebarRef}>
                <div className={styles.close} onClick={onClose}>
                    <CloseIcon />
                </div>
                <div className={styles.logo}>
                    <Link href={"/"} onClick={handleLinkClick}>
                        <Image src={logo} alt="logo" />
                    </Link>
                </div>
                <nav>
                    <Link href={"/"} className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} onClick={handleLinkClick}>
                        <span>Home</span>
                        <div className={styles.activeTag}></div>
                    </Link>
                    <Link href={"/about"} className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`} onClick={handleLinkClick}>
                        <span>About Us</span>
                        <div className={styles.activeTag}></div>
                    </Link>
                    <Link href={"/blog"} className={`${styles.link} ${pathname === '/blog' ? styles.active : ''}`} onClick={handleLinkClick}>
                        <span>Blog</span>
                        <div className={styles.activeTag}></div>
                    </Link>
                    <Link href={"/shop"} className={`${styles.link} ${pathname === '/shop' ? styles.active : ''}`} onClick={handleLinkClick}>
                        <span>Shop</span>
                        <div className={styles.activeTag}></div>
                    </Link>
                    <Link href={"/contact"} className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`} onClick={handleLinkClick}>
                        <span>Contact</span>
                        <div className={styles.activeTag}></div>
                    </Link>
                </nav>
            </div>
        </aside>
    );
}
