import Image from 'next/image'
import styles from './reservation.module.scss'
import { clock, kFood05, kFood06, kFood07, tometo, vintageBorder } from '@/assets/images/image'
import { useEffect, useRef, useState } from 'react';

const fetures = [
    {
        image: kFood05,
        title: "Skilled Chefs",
        detail: "Our talented chefs combine expertise and creativity to craft pizzas that are as visually stunning as they are delicious.",
    },
    {
        image: kFood06,
        title: "Cozy Ambiance",
        detail: "Dine in a warm and inviting atmosphere, perfect for family gatherings, date nights, or catching up with friends."
    },
    {
        image: kFood07,
        title: "Bamboo Bar's Best Bar",
        detail: "Pair your pizza with refreshing drinks from our Bamboo Bar, offering the best cocktails, mocktails, and beverages in town.",
    },
]

export default function Reservation() {
    const reservationRef = useRef(null);
    const [tometoBottom, setTometoBottom] = useState(-100);

    useEffect(() => {
        const handleScroll = () => {
            if (!reservationRef.current) return;

            const rect = reservationRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);

            setTometoBottom(-100 + progress * 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.reservation} ref={reservationRef}>
            <div className={styles.container}>
                <div className={styles.resDiv}>
                    <div className={styles.resDivContent}>
                        <div className={styles.resDivContentHead}>
                            <div className={styles.welcomeTitle}><span>Reservations</span></div>
                            <h2>Batter food <span>forever</span></h2>
                            <div className={styles.vintageBorder}>
                                <Image src={vintageBorder} alt="vintageBorder" />
                            </div>
                            <p>Reserve your table now for a delightful pizza experience with fresh flavors and ambiance!</p>
                        </div>
                        <div className={styles.fetures}>
                            {fetures.map((data, index) => (
                                <div className={styles.feturesBox} key={index}>
                                    <div className={styles.feturesImage}>
                                        <Image src={data.image} alt={data.title} />
                                    </div>
                                    <div>
                                        <h3>{data.title}</h3>
                                        <p>{data.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.resDivImage}>
                        <div className={styles.tometos} style={{ bottom: `${tometoBottom}px` }}>
                            <Image src={tometo} alt="tometo" />
                        </div>
                        <div className={styles.resDivTime}>
                            <Image src={clock} alt="clock" />
                            <span>BF: 6am - 9:30am</span>
                            <span>Lunch: 10:30am - 1pm</span>
                            <span>Dinner: 5pm - 11pm</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
