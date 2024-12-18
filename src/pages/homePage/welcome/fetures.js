import { kFood01, kFood02, kFood03, kFood04 } from '@/assets/images/image'
import styles from './welcome.module.scss'
import Image from 'next/image'

const fetures = [
    {
        image: kFood01,
        title: "Fresh Products",
        detail: "We use only the finest, farm-fresh ingredients to ensure every pizza is bursting with natural flavors and unbeatable quality.",
    },
    {
        image: kFood02,
        title: "Skilled Chefs",
        detail: "Our talented chefs combine expertise and creativity to craft pizzas that are as visually stunning as they are delicious.",
    },
    {
        image: kFood03,
        title: "Bamboo Bar's Best Bar",
        detail: "Pair your pizza with refreshing drinks from our Bamboo Bar, offering the best cocktails, mocktails, and beverages in town.",
    },
    {
        image: kFood04,
        title: "Vegan Cuisine",
        detail: "Our vegan-friendly pizzas are packed with plant-based goodness, ensuring everyone can enjoy a slice of perfection!",
    },
]

export default function Fetures() {
    return (
        <div className={styles.fetures}>
            {fetures.map((data, index) => (
                <div className={styles.feturesBox} key={index}>
                    <div className={styles.feturesImage}>
                        <Image src={data.image} alt={data.title} />
                    </div>
                    <h3>{data.title}</h3>
                    <p>{data.detail}</p>
                </div>
            ))}
        </div>
    )
}
