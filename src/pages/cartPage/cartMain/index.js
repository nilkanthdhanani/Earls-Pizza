import RightChevronIcon from '@/assets/images/svg/rightChevron'
import styles from './cartMain.module.scss'
import DiscountIcon from '@/assets/images/svg/discountIcon'

export default function CartMain() {
    return (
        <section className={styles.cartMain}>
            <div className={styles.container}>
                <div className={styles.cartDiv}>
                    <div className={styles.cartDetails}></div>
                    <div className={styles.cartMainTotal}>
                        <div className={styles.offers}>
                            <h3>Offers</h3>
                            <div className={styles.offersDiv}>
                                <DiscountIcon />
                                <div className={styles.offersDivText}>
                                    <p>Select offer / Apply coupon</p>
                                    <span>Get discount on your order</span>
                                </div>
                                <RightChevronIcon />
                            </div>
                        </div>
                        <div className={styles.cartMainTotalBox}>
                            <h3>Price Details</h3>
                            <div className={styles.offersDiv}>
                                <div className={styles.offersTotalText}>
                                    <p>Sub Total</p>
                                    <span>$299.99</span>
                                </div>
                                <div className={styles.offersTotalText}>
                                    <p>Discount</p>
                                    <span>-</span>
                                </div>
                                <div className={styles.offersTotalText}>
                                    <p>Texes and Charges</p>
                                    <span>$2.99</span>
                                </div>
                                <div className={styles.offersTotalText}>
                                    <p>Grand Total</p>
                                    <span>$302.98</span>
                                </div>
                                <button type="button"><span>Procced to Checkout</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
