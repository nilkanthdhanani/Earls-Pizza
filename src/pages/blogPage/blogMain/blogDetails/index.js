import CloseIcon from '@/assets/images/svg/closeIcon';
import styles from './blogDetails.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@/assets/images/svg/facebookIcon';
import LinkdInIcon from '@/assets/images/svg/linkdInIcon';
import TwitterIcon from '@/assets/images/svg/twitterIcon';
import { client5, client6 } from '@/assets/images/image';

export default function BlogDetails({ blog, closeModal }) {
    return (
        <div className={styles.blogDetails}>
            <div className={styles.blogDetailsDiv}>
                <div className={styles.blogImage}>
                    <div className={styles.closeBtn} onClick={closeModal}><CloseIcon /></div>
                    <Image src={blog.image} alt={blog.title} />
                    <h4>{blog.title}</h4>
                </div>
                <div className={styles.blogContent}>
                    <div className={styles.blogList}>
                        <div className={styles.blogListText}>
                            <span>{blog.name}</span>
                        </div>
                        <div className={styles.blogListLine}></div>
                        <div className={styles.blogListText}>
                            <span>{blog.date}</span>
                        </div>
                        <div className={styles.blogListLine}></div>
                        <div className={styles.blogListText}>
                            <span>{blog.comment} Commentes</span>
                        </div>
                    </div>
                    <div className={styles.blogDetailsList}>
                        <p>{blog.description}</p>
                        <p>{blog.description2}</p>
                        <p>{blog.description3}</p>
                    </div>
                    <div className={styles.tagsDiv}>
                        <div className={styles.tags}>
                            <span>Tags:</span>
                            <p>{blog.tags}</p>
                        </div>
                        <div className={styles.socialLinks}>
                            <Link href={"https://www.facebook.com/"} target='_blank' aria-label='facebook' tabIndex="-1">
                                <FacebookIcon />
                            </Link>
                            <Link href={"https://www.linkedin.com/"} target='_blank' aria-label='linkedin' tabIndex="-1">
                                <LinkdInIcon />
                            </Link>
                            <Link href={"https://twitter.com/"} target='_blank' aria-label='twitter' tabIndex="-1">
                                <TwitterIcon />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.comments}>
                        <h5>Comments(02)</h5>
                        <div className={styles.comment}>
                            <div className={styles.commentImg}>
                                <Image src={client5} alt="client5" />
                            </div>
                            <div className={styles.commentText}>
                                <h6>Farrel Collins</h6>
                                <span>2 Jul, 2023</span>
                                <p>Great article! I really enjoyed reading it.</p>
                            </div>
                        </div>
                        <div className={styles.comment}>
                            <div className={styles.commentImg}>
                                <Image src={client6} alt="client5" />
                            </div>
                            <div className={styles.commentText}>
                                <h6>Nabby Gail</h6>
                                <span>1 Jul, 2023</span>
                                <p>I had a great time reading this article. It was informative and engaging.</p>
                            </div>
                        </div>
                    </div>
                    <form>
                        <h5>Leave a Reply</h5>
                        <div className={styles.commentForm}>
                            <div className={styles.commentInput}>
                                <input type="text" placeholder='Name' required aria-label='Enter Your Name' />
                            </div>
                            <div className={styles.commentInput}>
                                <input type="email" placeholder='Your Email' required aria-label='Enter Your Email' />
                            </div>
                        </div>
                        <div className={styles.commentInput}>
                            <textarea placeholder='Your Comment' rows={5} required aria-label='Enter Your Comment' />
                        </div>
                        <div className={styles.checkboxDiv}>
                            <div className={styles.checkbox}>
                                <input type="checkbox" id="check" required />
                                <span htmlFor="check">
                                    <svg viewBox="0,0,50,50">
                                        <path d="M5 30 L 20 45 L 45 5"></path>
                                    </svg>
                                </span>
                            </div>
                            <label htmlFor="check">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <div className={styles.commentSubmit}>
                            <button type='submit'><span>Post Comment</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
