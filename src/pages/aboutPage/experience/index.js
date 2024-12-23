import Image from 'next/image'
import styles from './experience.module.scss'
import { experience, vintageBorder } from '@/assets/images/image'

export default function Experience() {
    return (
        <section className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.experienceDiv}>
                    <div className={styles.experienceDivHead}>
                        <div className={styles.welcomeTitle}><span>Modern Cuisine</span></div>
                        <h2>Crafting Memories with <span>Every Slice</span></h2>
                        <div className={styles.vintageBorder}>
                            <Image src={vintageBorder} alt="vintageBorder" />
                        </div>
                        <p>Discover the perfect harmony of flavors with our modern approach to cuisine. From artisanal ingredients to creative presentations, we bring passion and innovation to every bite, making each dining experience unforgettable.</p>
                    </div>
                    <div className={styles.experienceDivImage}>
                        <Image src={experience} alt="experience" />
                    </div>
                </div>
            </div>
        </section>
    )
}
