import Image from 'next/image'
import styles from './blogPart2.module.scss'
import { post1, post10, post11, post2, post3, post4, post5, post6, post7, post8, post9, profile } from '@/assets/images/image'
import Link from 'next/link'
import RightChevronIcon from '@/assets/images/svg/rightChevron'
import InstagramIcon from '@/assets/images/svg/instagramIcon'

const post = [
    { image: post1 }, { image: post2 }, { image: post3 }, { image: post4 }, { image: post5 }, { image: post6 }, { image: post7 }, { image: post8 }
]

const postList = [
    {
        image: post9,
        date: "December 14, 2024",
        description: "Baking can be done with a few things."
    },
    {
        image: post10,
        date: "December 15, 2024",
        description: "Great food is not just eating energy."
    },
    {
        image: post11,
        date: "December 16, 2024",
        description: "The smell of good bread baking."
    },
]

export default function BlogPart2() {
    return (
        <div className={styles.blogMainDiv2}>
            <div className={styles.companyDetail}>
                <h3>About Our Company</h3>
                <div className={styles.companyProfile}>
                    <Image src={profile} alt="profile" />
                    <div className={styles.companyProfileDetail}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dicta sunt rerum consectetur, eveniet dolores hic modi vero corporis reiciendis totam quasi! Non, autem omnis! Id officiis quibusdam sunt dolor.</p>
                        <span>Marathon William</span>
                    </div>
                </div>
            </div>
            <div className={styles.categories}>
                <h3>Categories</h3>
                <div className={styles.categoriesList}>
                    <Link href="/blog"><RightChevronIcon />Pizza</Link>
                    <Link href="/blog"><RightChevronIcon />Salads</Link>
                    <Link href="/blog"><RightChevronIcon />Desserts</Link>
                    <Link href="/blog"><RightChevronIcon />Drinks</Link>
                    <Link href="/blog"><RightChevronIcon />Pastas</Link>
                </div>
            </div>
            <div className={styles.instagramPost}>
                <h3>Instagram Posts</h3>
                <div className={styles.igPost}>
                    {post.map((data, index) => (
                        <Link href="/blog" key={index}>
                            <div className={styles.igPostImg}>
                                <div className={styles.igPostop}>
                                    <InstagramIcon />
                                </div>
                                <Image src={data.image} alt="post1" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.resentPost}>
                <h3>Recent Posts</h3>
                {postList.map((data, index) => (
                    <Link href="/blog" key={index}>
                        <div className={styles.resentPostList}>
                            <div className={styles.resentPostListDiv}>
                                <div className={styles.resentPostListImg}>
                                    <Image src={data.image} alt="post9" />
                                </div>
                                <div className={styles.resentPostListDetail}>
                                    <span>{data.date}</span>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
