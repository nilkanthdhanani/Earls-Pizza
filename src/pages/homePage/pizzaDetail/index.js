import { pizzaDetail } from '@/assets/images/image';
import styles from './pizzaDetail.module.scss';
import Image from 'next/image';
import PizzaTextIcon from '@/assets/images/svg/pizzaText';

export default function PizzaDetail() {
    return (
        <section className={styles.pizzaDetail}>
            <div className={styles.pizzaDetailText}>
                <PizzaTextIcon />
            </div>
            <div className={styles.container}>
                <div className={styles.pizzaDetailBox}>
                    <div className={styles.detailBox1}>
                        <div className={styles.detailBoxText}>
                            <h2>Black Olives</h2>
                            <p>A classic topping that adds a rich, savory flavor to any pizza.</p>
                        </div>
                    </div>
                    <div className={styles.detailBox2}>
                        <Image src={pizzaDetail} alt="pizzaDetail" />
                        <div className={styles.detailBoxText}>
                            <h2>Gorgonzola and Mushroom</h2>
                            <p>Earthy mushrooms meet creamy, bold gorgonzola for a gourmet treat.</p>
                        </div>
                    </div>
                    <div className={styles.detailBox3}>
                        <div className={styles.detailBoxText}>
                            <h2>Capers, Anchovies</h2>
                            <p>Salty and tangy, perfect for Mediterranean-inspired pizzas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
