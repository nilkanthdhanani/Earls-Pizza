import Image from 'next/image';
import StarIcon from '@/assets/images/svg/starIcon';
import StarIcon2 from '@/assets/images/svg/starIcon2';

export default function PizzaDetails({ pizza, onClose }) {
    const modalRef = useRef(null);
    const [regularQty, setRegularQty] = useState(0);
    const [mediumQty, setMediumQty] = useState(0);
    const [largeQty, setLargeQty] = useState(0);
    const [rating, setRating] = useState(0);

    const calculateTotal = (quantity, price) => {
        return quantity * parseFloat(price.replace('$', ''));
    };

    const calculateOverallTotal = () => {
        const regularTotal = calculateTotal(regularQty, pizza.price);
        const mediumTotal = calculateTotal(mediumQty, pizza.mediumPrice);
        const largeTotal = calculateTotal(largeQty, pizza.largePrice);
        return regularTotal + mediumTotal + largeTotal;
    };

    const handleAddToCart = () => {
        if (regularQty === 0 && mediumQty === 0 && largeQty === 0) {
            alert("Please select at least one pizza to add to the cart.");
            return;
        }
        onClose();
    };

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    useEffect(() => {
        setRating(1);
    }, [pizza]);

    if (!pizza) return null;

    return (
        <div className={styles.pizzaDetails}>
            <div className={styles.pizzaDetailsDiv} ref={modalRef} data-aos="fade-up">
                <div className={styles.pizzaImage}>
                    <div className={styles.closeBtn} onClick={onClose}>
                        <CloseIcon />
                    </div>
                    <Image src={pizza.image} alt={pizza.name} />
                </div>
                <div className={styles.pizzaContent}>
                    <div className={styles.pizzaContentHead}>
                        <h4>{pizza.name}</h4>
                        <div className={styles.stars}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <StarIcon key={index} fill={index < pizza.rating ? 'white' : 'gray'} />
                            ))}
                        </div>
                        <p>{pizza.description}</p>
                    </div>
                    <div className={styles.priceDiv}>
                        <div className={styles.price}>
                            <div className={styles.priceBox}>
                                <p>Regular (serves 1) <span>{pizza.price}</span></p>
                            </div>
                            <div className={styles.totalBox}>
                                <input type="number" value={regularQty} onChange={(e) => setRegularQty(Number(e.target.value))} min="0" max="10" />
                                <span>${calculateTotal(regularQty, pizza.price).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.priceBox}>
                                <p>Medium (serves 2) <span>{pizza.mediumPrice}</span></p>
                            </div>
                            <div className={styles.totalBox}>
                                <input type="number" value={mediumQty} onChange={(e) => setMediumQty(Number(e.target.value))} min="0" max="10" />
                                <span>${calculateTotal(mediumQty, pizza.mediumPrice).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.priceBox}>
                                <p>Large (serves 4) <span>{pizza.largePrice}</span></p>
                            </div>
                            <div className={styles.totalBox}>
                                <input type="number" value={largeQty} onChange={(e) => setLargeQty(Number(e.target.value))} min="0" max="10" />
                                <span>${calculateTotal(largeQty, pizza.largePrice).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={styles.totalMain}>
                            <p>Total</p>
                            <span>${calculateOverallTotal().toFixed(2)}</span>
                        </div>
                        <button type="button" onClick={handleAddToCart}><span>Add to Cart</span></button>
                    </div>
                    <form>
                        <h5>Review to "{pizza.name}"</h5>
                        <div className={styles.commentForm}>
                            <div className={styles.commentInput}>
                                <input type="text" placeholder='Name' required aria-label='Enter Your Name' />
                            </div>
                            <div className={styles.commentInput}>
                                <input type="email" placeholder='Your Email' required aria-label='Enter Your Email' />
                            </div>
                        </div>
                        <div className={styles.commentInput}>
                            <textarea placeholder='Your Review' rows={5} required aria-label='Enter Your Comment' />
                        </div>
                        <div className={styles.stars}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <StarIcon2 key={index} fill={index < rating ? 'white' : '#0f1d22'} onClick={() => handleStarClick(index)} />
                            ))}
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
                            <button type='submit'><span>Submit</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}