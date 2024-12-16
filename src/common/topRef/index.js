import TopIcon from '@/assets/images/svg/topIcon';
import styles from './topRef.module.scss';
import { useEffect, useState } from 'react';

export default function TopRef() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`${styles.topRef} ${isScrolled ? styles.scroll : ''}`} onClick={scrollToTop}>
            <div className={styles.topRefBtn}>
                <TopIcon />
            </div>
        </div>
    );
}
