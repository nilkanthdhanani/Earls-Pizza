import { useEffect, useState, useRef } from 'react';
import { pizzaSlice, shape2, vintageBorder } from '@/assets/images/image';
import Image from 'next/image';
import styles from './welcome.module.scss';
import Link from 'next/link';

export default function WelcomeContent() {
    const [bottomValue, setBottomValue] = useState(0);
    const welcomeContentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (welcomeContentRef.current) {
                const welcomeContent = welcomeContentRef.current;
                const rect = welcomeContent.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const scrollProgress = Math.max(
                    0,
                    Math.min(1, (windowHeight - rect.top) / (rect.height + windowHeight))
                );
                setBottomValue(scrollProgress * 200);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.welcomeContent} ref={welcomeContentRef}>
            <div className={styles.welcomeContentText}>
                <div className={styles.welcomeTitle}><span>Welcome</span></div>
                <h2>We make the best pizza in <span>The Town.</span></h2>
                <div className={styles.vintageBorder}>
                    <Image src={vintageBorder} alt="vintageBorder" />
                </div>
                <p>Our pizzas are crafted with passion and perfection, using the freshest ingredients to deliver an unforgettable taste. From the rich, hand-stretched dough to our signature sauces and toppings, every bite is a celebration of flavor. Whether you crave classic recipes or bold, creative combinations, we're dedicated to serving the best pizza experience in town!</p>
                <Link href={"/about"}>
                    <button type="button"><span>Get The All Information</span></button>
                </Link>
            </div>
            <div className={styles.pizzSlice}>
                <div className={styles.shapeIcon}>
                    <Image src={shape2} alt="shape2" />
                </div>
                <div className={styles.pizzSliceBox} style={{ bottom: `${bottomValue}px` }}>
                    <Image src={pizzaSlice} alt="pizzaSlice" />
                </div>
            </div>
        </div>
    );
}
