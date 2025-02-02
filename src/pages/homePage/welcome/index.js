import { shape1, shapeLeaf } from '@/assets/images/image';
import styles from './welcome.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import WelcomeContent from './welcomeContent';
import Fetures from './fetures';

export default function Welcome() {
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
                    const translateValue = Math.min(scrollProgress * 500, 500);
                    setMove(translateValue);
                } else if (window.scrollY >= sectionTop + sectionHeight) {
                    setMove(500);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.welcome} ref={sectionRef}>
            <div className={styles.shapeOne}>
                <Image src={shape1} alt="shape1" />
            </div>
            <div className={styles.leafShape} style={{ right: `${move}px` }}>
                <Image src={shapeLeaf} alt="shapeLeaf" />
            </div>
            <div className={styles.container}>
                <WelcomeContent />
                <Fetures />
            </div>
        </section>
    )
}
