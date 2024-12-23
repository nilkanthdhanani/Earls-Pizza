import styles from './ourStory.module.scss'

export default function OurStory() {
    return (
        <section className={styles.ourStory}>
            <div className={styles.container}>
                <div className={styles.ourStoryText}>
                    <div className={styles.welcomeTitle}><span>Discover</span></div>
                    <h2>Our <span>Story</span></h2>
                    <p>At Earl's Pizza, our journey began with a simple idea: bringing families and friends together over unforgettable flavors. Rooted in tradition and crafted with love, our pizzas are made with the finest ingredients and a passion for perfection. From classic recipes to creative twists, Earl's Pizza isn't just a meal—it's a celebration of taste and togetherness.</p>
                </div>
            </div>
        </section>
    )
}
