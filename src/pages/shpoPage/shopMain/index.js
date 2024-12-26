import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Slider } from '@mui/material';
import styles from './shopMain.module.scss';
import RightChevronIcon from '@/assets/images/svg/rightChevron';
import ListIcon from '@/assets/images/svg/listIcon';
import GridIcon from '@/assets/images/svg/gridIcon';
import DropIcon from '@/assets/images/svg/dropIcon';

export default function ShopMain() {
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const [selectedValue, setSelectedValue] = useState('Short by List');

    const options = ['New Collection', 'Tell Sell', 'Top Rated'];

    const toggleDropdown = () => {
        setActiveDropdown(activeDropdown ? null : 'Short by list');
    };

    const handleOptionClick = (value) => {
        setSelectedValue(value);
        setActiveDropdown(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    return (
        <section className={styles.shopMain}>
            <div className={styles.container}>
                <div className={styles.shopDiv}>
                    <div className={styles.shopDiv1}>
                        <div className={styles.shopDiv1Head}>
                            <div className={styles.shopDiv1HeadView}>
                                <div className={styles.iconWrap}><ListIcon /></div>
                                <div className={styles.iconWrap}><GridIcon /></div>
                            </div>
                            <div className={styles.customSelect} ref={dropdownRef}>
                                <div className={styles.select} onClick={toggleDropdown}>
                                    {selectedValue}
                                    <div className={`${styles.dropIcon} ${activeDropdown ? styles.rotate : ''}`}>
                                        <DropIcon />
                                    </div>
                                </div>
                                {activeDropdown && (
                                    <div className={styles.dropBox}>
                                        {options.map((option, index) => (
                                            <div key={index} onClick={() => handleOptionClick(option)}>
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.shopDiv1Body}>
                        </div>
                    </div>
                    <div className={styles.shopDiv2}>
                        <h2>Filter by Price</h2>
                        <div className={styles.priceFilter}>
                            <Slider
                                value={priceRange}
                                onChange={handlePriceChange}
                                valueLabelDisplay="off"
                                min={0}
                                max={1000}
                                aria-labelledby="range-slider"
                            />
                            <p>Price: ${priceRange[0]} - ${priceRange[1]}</p>
                            <button type="button"><span>Filter</span></button>
                        </div>
                        <h2>Opening Time</h2>
                        <div className={styles.openingTime}>
                            <p>Monday - Friday 09:00 - 22:00</p>
                            <p>Saturday 11:00 - 00:00</p>
                            <p>Sunday 11:00 - 23:00</p>
                            <p>* Happy hour 17:00 - 21:00</p>
                        </div>
                        <h2>Categories</h2>
                        <div className={styles.categoriesList}>
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
