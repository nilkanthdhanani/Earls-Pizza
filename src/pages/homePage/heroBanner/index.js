import Link from 'next/link'
import styles from './heroBanner.module.scss'

export default function HeroBanner() {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroBannerMain}>
        <div className={styles.container}>
          <div className={styles.heroBannerContent}>
            <div className={styles.welcome}><span>Welcome To Earls</span></div>
            <h1>Share Your <span>Love For Pizza</span></h1>
            <p>Delicious, handcrafted pizzas made fresh daily with the finest ingredients. Perfectly baked, loaded with flavor, and made for sharing! </p>
            <Link href={"/"}>
              <button type="button"><span>View More</span></button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
