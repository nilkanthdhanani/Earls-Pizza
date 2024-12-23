import Image from 'next/image';
import styles from './book.module.scss';
import { vintageBorder } from '@/assets/images/image';
import SearchIcon from '@/assets/images/svg/searchIcon';
import React, { useState, useEffect, useRef } from 'react';
import DropIcon from '@/assets/images/svg/dropIcon';

export default function Book() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const [selectedValue, setSelectedValue] = useState('Persons 1');

    const options = ['Persons 2', 'Persons 3', 'Persons 4', 'Persons 5'];

    const toggleDropdown = () => {
        setActiveDropdown(activeDropdown ? null : 'persons');
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

    return (
        <section className={styles.book}>
            <div className={styles.container}>
                <div className={styles.bookDiv}>
                    <div className={styles.bookDivHead}>
                        <div className={styles.welcomeTitle}><span>Fresh From Earls</span></div>
                        <h2>Book <span>Online</span></h2>
                        <div className={styles.vintageBorder}>
                            <Image src={vintageBorder} alt="vintageBorder" />
                        </div>
                        <p>Elevate your dining experience with ease! Reserve a table at our restaurant, where exquisite cuisine meets inviting ambiance. Enjoy impeccable service and create memorable moments with your loved ones, ensuring a delightful and unforgettable mealtime.</p>
                    </div>
                    <form>
                        <div className={styles.inputs}>
                            <div className={styles.inputsDiv}>
                                <input type="text" name="name" id="name" placeholder="Your Name *" required />
                            </div>
                            <div className={styles.inputsDiv}>
                                <input type="email" name="email" id="email" placeholder="Your email *" required />
                            </div>
                            <div className={styles.inputsDiv}>
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
                            <div className={styles.inputsDiv}>
                                <input type="date" name="date" id="date" required />
                            </div>
                        </div>
                        <div className={styles.bookBtn}>
                            <button type="submit" aria-label='search'><span>Book Now</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
