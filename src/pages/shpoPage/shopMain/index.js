import { useState } from 'react';
import Link from 'next/link';
import { Slider } from '@mui/material';
import styles from './shopMain.module.scss';
import RightChevronIcon from '@/assets/images/svg/rightChevron';
import ShopDiv1 from './shopDiv1';

export default function ShopMain() {
    const [priceRange, setPriceRange] = useState([0, 500]);

    const handlePriceChange = (newValue) => {
        setPriceRange(newValue);
    };

    return (
        <section className={styles.shopMain}>
            <div className={styles.container}>
                <div className={styles.shopDiv}>
                    <ShopDiv1 />
                    <div className={styles.shopDiv2}>
                        <div className={styles.priceFilter}>
                            <h3>Filter by Price</h3>
                            <Slider
                                value={priceRange}
                                onChange={handlePriceChange}
                                valueLabelDisplay="off"
                                min={0}
                                max={1000}
                                aria-label="range-slider"
                            />
                            <p>Price: ${priceRange[0]} - ${priceRange[1]}</p>
                            <button type="button"><span>Filter</span></button>
                        </div>
                        <div className={styles.openingTime}>
                            <h3>Opening Time</h3>
                            <p>Monday - Friday 09:00 - 22:00</p>
                            <p>Saturday 11:00 - 00:00</p>
                            <p>Sunday 11:00 - 23:00</p>
                            <p>* Happy hour 17:00 - 21:00</p>
                        </div>
                        <div className={styles.categoriesList}>
                            <h3>Categories</h3>
                            <Link href="/shop"><RightChevronIcon />Pizza</Link>
                            <Link href="/shop"><RightChevronIcon />Salads</Link>
                            <Link href="/shop"><RightChevronIcon />Desserts</Link>
                            <Link href="/shop"><RightChevronIcon />Drinks</Link>
                            <Link href="/shop"><RightChevronIcon />Pastas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
