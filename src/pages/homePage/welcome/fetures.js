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
        title: "Fast Delivery",
        detail: "Enjoy your favorite pizzas delivered hot and fresh to your doorstep, thanks to our efficient delivery team."
    },
    {
        image: kFood03,
        title: "Customizable Options",
        detail: "Create your perfect pizza with our wide range of toppings, sauces, and crust options tailored to your taste."
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
