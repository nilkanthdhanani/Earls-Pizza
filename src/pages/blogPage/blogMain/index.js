import styles from './blogMain.module.scss'
import BlogPart1 from './blogPart1'
import BlogPart2 from './blogPart2'

export default function BlogMain() {
    return (
        <section className={styles.blogMain}>
            <div className={styles.container}>
                <div className={styles.blogMainDiv}>
                    <BlogPart1 />
                    <BlogPart2 />
                </div>
            </div>
        </section>
    )
}
