import RightChevronIcon from '@/assets/images/svg/rightChevron'
import styles from './cartMain.module.scss'
import DiscountIcon from '@/assets/images/svg/discountIcon'
import { emptyCart, pizza40 } from '@/assets/images/image'
import Image from 'next/image'
import CloseIcon from '@/assets/images/svg/closeIcon'

export default function CartMain() {
    return (
        <section className={styles.cartMain}>
            <div className={styles.container}>
                {/* <div className={styles.cartEmptyBox}>
                    <Image src={emptyCart} alt="emptyCart" />
                    <h2>Your cart is empty.</h2>
                    <p>Start adding your favorite pizzas to your cart.</p>
                    <Link href={"/shop"}>
                        <button type="button"><span>Explore Menu</span></button>
                    </Link>
                </div> */}
                <div className={styles.cartDiv}>
                    <div className={styles.cartDetails}>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><CloseIcon /></td>
                                    <td>
                                        <div className={styles.product}>
                                            <Image src={pizza40} alt="pizza40" />
                                            <h2>Black Olives</h2>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.price}>
                                            <p>Regular <span>($13.99)</span></p>
                                            <p>Medium <span>($16.99)</span></p>
                                            <p>Large <span>($18.99)</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.quantity}>
                                            <button>-</button>
                                            <input type="number" />
                                            <button>+</button>
                                        </div>
                                        <div className={styles.quantity}>
                                            <button>-</button>
                                            <input type="number" />
                                            <button>+</button>
                                        </div>
                                        <div className={styles.quantity}>
                                            <button>-</button>
                                            <input type="number" />
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.subtotal}>
                                            <span>$13.99</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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