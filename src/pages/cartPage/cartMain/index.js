import RightChevronIcon from '@/assets/images/svg/rightChevron'
import styles from './cartMain.module.scss'
import DiscountIcon from '@/assets/images/svg/discountIcon'
import { emptyCart } from '@/assets/images/image'
import Image from 'next/image'
import CloseIcon from '@/assets/images/svg/closeIcon'
import { useCart } from '@/components/cartContext'
import Link from 'next/link'

export default function CartMain() {
    const { cartItems, removeFromCart, updateCartItemQuantity, loading } = useCart();

    const calculateSubtotal = (item) => {
        const regularTotal = item.quantities.regular * parseFloat(item.price.replace('$', ''));
        const mediumTotal = item.quantities.medium * parseFloat(item.mediumPrice.replace('$', ''));
        const largeTotal = item.quantities.large * parseFloat(item.largePrice.replace('$', ''));
        return regularTotal + mediumTotal + largeTotal;
    };

    const calculateTotalSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);
    };

    const totalSubtotal = calculateTotalSubtotal();
    const taxesAndCharges = totalSubtotal * 0.18;
    const grandTotal = totalSubtotal + taxesAndCharges;

    if (loading) {
        return (
            <div className={styles.loading}>
                <div className={styles.container}>Loading your cart...</div>
            </div>
        );
    }

    return (
        <section className={styles.cartMain}>
            <div className={styles.container}>
                {cartItems.length === 0 ? (
                    <div className={styles.cartEmptyBox}>
                        <Image src={emptyCart} alt="emptyCart" />
                        <h2>Your cart is empty.</h2>
                        <p>Start adding your favorite pizzas to your cart.</p>
                        <Link href={"/shop"}>
                            <button type="button"><span>Explore Menu</span></button>
                        </Link>
                    </div>
                ) : (
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
                                    {cartItems.map((item) => (
                                        <tr key={item.uniqueId}>
                                            <td onClick={() => removeFromCart(item.uniqueId)}>
                                                <CloseIcon />
                                            </td>
                                            <td>
                                                <div className={styles.product}>
                                                    <Image src={item.image} alt={item.name} />
                                                    <h2>{item.name}</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.price}>
                                                    <p>Regular <span>(${item.price})</span></p>
                                                    <p>Medium <span>(${item.mediumPrice})</span></p>
                                                    <p>Large <span>(${item.largePrice})</span></p>
                                                </div>
                                            </td>
                                            <td>
                                                {['regular', 'medium', 'large'].map((size) => (
                                                    <div className={styles.quantity} key={size}>
                                                        <button onClick={() => updateCartItemQuantity(item.uniqueId, size, item.quantities[size] - 1)}>
                                                            -
                                                        </button>
                                                        <input type="number" value={item.quantities[size]} readOnly />
                                                        <button onClick={() => updateCartItemQuantity(item.uniqueId, size, item.quantities[size] + 1)}>
                                                            +
                                                        </button>
                                                    </div>
                                                ))}
                                            </td>
                                            <td>
                                                <div className={styles.subtotal}>
                                                    <span>${calculateSubtotal(item).toFixed(2)}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
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
                                        <span>${totalSubtotal.toFixed(2)}</span>
                                    </div>
                                    <div className={styles.offersTotalText}>
                                        <p>Texes and Charges</p>
                                        <span>${taxesAndCharges.toFixed(2)}</span>
                                    </div>
                                    <div className={styles.offersTotalText}>
                                        <p>Grand Total</p>
                                        <span>${grandTotal.toFixed(2)}</span>
                                    </div>
                                    <button type="button"><span>Procced to Checkout</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
