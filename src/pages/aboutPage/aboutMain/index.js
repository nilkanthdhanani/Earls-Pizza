import { aboutLines, pizzaBg, pizzaRotate, vintageBorder } from '@/assets/images/image'
import styles from './aboutMain.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutMain() {
    return (
        <section className={styles.aboutMain}>
            <div className={styles.aboutLines}>
                <Image src={aboutLines} alt="aboutLines" />
            </div>
            <div className={styles.container}>
                <div className={styles.aboutMainGrid}>
                    <div className={styles.aboutMainText}>
                        <div className={styles.welcomeTitle}><span>About Us</span></div>
                        <h2>About <span>Earls</span></h2>
                        <div className={styles.vintageBorder}>
                            <Image src={vintageBorder} alt="vintageBorder" />
                        </div>
                        <p>Welcome to Earls Pizza, where every slice tells a story! Founded with a passion for authentic flavors and handcrafted perfection, Earls Pizza has become a go-to destination for pizza lovers craving something special. We pride ourselves on using the freshest ingredients, from our house-made dough to our signature sauces and premium toppings. Whether you're enjoying a classic favorite or exploring one of our creative specialties, every bite is crafted with love and care. At Earls Pizza, it's not just about great food—it's about bringing people together, one delicious slice at a time.</p>
                        <Link href={"/about"}>
                            <button type="button"><span>Get The All Information</span></button>
                        </Link>
                    </div>
                    <div className={styles.aboutMainImage}>
                        <div className={styles.pizzaRotate}>
                            <Image src={pizzaRotate} alt="pizzaRotate" />
                        </div>
                        <div className={styles.pizzaBg}>
                            <Image src={pizzaBg} alt="pizzaBg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
