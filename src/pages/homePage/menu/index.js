import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './menu.module.scss';
import { pizza1, pizza10, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8, pizza9, shape3, vintageBorder } from '@/assets/images/image';
import Link from 'next/link';

const menuItems = [
    {
        image: pizza1,
        name: "Margherita Pizza",
        description: "Classic pizza with fresh mozzarella and basil",
        price: "$12.99",
    },
    {
        image: pizza2,
        name: "Pepperoni Pizza",
        description: "Topped with spicy pepperoni and mozzarella",
        price: "$14.99",
    },
    {
        image: pizza3,
        name: "Veggie Delight Pizza",
        description: "Loaded with bell peppers, olives, and onions",
        price: "$13.99",
    },
    {
        image: pizza4,
        name: "BBQ Chicken Pizza",
        description: "Grilled chicken, BBQ sauce, and red onions",
        price: "$15.99",
    },
    {
        image: pizza5,
        name: "Four Cheese Pizza",
        description: "Mozzarella, cheddar, gouda, and parmesan blend",
        price: "$14.49",
    },
    {
        image: pizza6,
        name: "Hawaiian Pizza",
        description: "Sweet pineapple and ham with mozzarella cheese",
        price: "$13.49",
    },
    {
        image: pizza7,
        name: "Meat Lovers Pizza",
        description: "Pepperoni, sausage, ham, and crispy bacon",
        price: "$16.99",
    },
    {
        image: pizza8,
        name: "Spicy Jalapeno Pizza",
        description: "Fiery jalapeños, hot sauce, and mozzarella",
        price: "$13.49",
    },
    {
        image: pizza9,
        name: "Mediterranean Pizza",
        description: "Feta, olives, tomatoes, and fresh spinach",
        price: "$14.99",
    },
    {
        image: pizza10,
        name: "Truffle Mushroom Pizza",
        description: "Rich truffle oil and sautéed wild mushrooms",
        price: "$17.99",
    },
];

export default function Menu() {
    const [menuShapeOffset, setMenuShapeOffset] = useState(100);

    useEffect(() => {
        const handleScroll = () => {
            const menuSection = document.querySelector(`.${styles.menu}`);
            const sectionTop = menuSection?.offsetTop || 0;
            const sectionHeight = menuSection?.offsetHeight || 0;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                const progress = (scrollPosition - sectionTop) / sectionHeight;
                const offset = Math.max(200 - progress * 200, 0);
                setMenuShapeOffset(offset);
            } else if (scrollPosition < sectionTop) {
                setMenuShapeOffset(200);
            } else {
                setMenuShapeOffset(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.menuShape} style={{ top: `${menuShapeOffset}px` }}>
                    <Image src={shape3} alt="shape3" />
                </div>
                <div className={styles.menuHead}>
                    <div className={styles.welcomeTitle}>
                        <span>Special selection</span>
                    </div>
                    <h2>From <span>Our Menu</span></h2>
                    <div className={styles.vintageBorder}>
                        <Image src={vintageBorder} alt="vintageBorder" />
                    </div>
                </div>
                <div className={styles.menuContent}>
                    <div className={styles.menuContentGrid}>
                        {menuItems.map((item, index) => (
                            <div key={index} className={styles.menuGridBox}>
                                <Image src={item.image} alt={item.name} />
                                <div className={styles.menuText}>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.viewMoreBtn}>
                    <Link href={'/shop'}>
                        <button type="button"><span>View More</span></button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
