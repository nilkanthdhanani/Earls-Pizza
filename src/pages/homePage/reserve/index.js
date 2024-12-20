import React, { useState, useEffect, useRef } from 'react';
import DropIcon from '@/assets/images/svg/dropIcon';
import styles from './reserve.module.scss';
import SearchIcon from '@/assets/images/svg/searchIcon';

export default function Reserve() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRefs = useRef({});

    const [selectedValues, setSelectedValues] = useState({
        persons: 'Persons 1',
        date: 'March 2',
        time: '5:00 pm',
    });

    const options = {
        persons: ['Persons 2', 'Persons 3', 'Persons 4', 'Persons 5'],
        date: ['May 20', 'April 17', 'Jun 12', 'September 26'],
        time: ['6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm'],
    };

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const handleOptionClick = (name, value) => {
        setSelectedValues({ ...selectedValues, [name]: value });
        setActiveDropdown(null);
    };

    const renderDropdown = (name) => {
        if (!dropdownRefs.current[name]) {
            dropdownRefs.current[name] = React.createRef();
        }

        return (
            <div className={styles.inputsDiv}>
                <div className={styles.customSelect} ref={dropdownRefs.current[name]}>
                    <div className={styles.select} onClick={() => toggleDropdown(name)}>
                        {selectedValues[name]}
                        <div className={`${styles.dropIcon} ${activeDropdown === name ? styles.rotate : ''}`}>
                            <DropIcon />
                        </div>
                    </div>
                    {activeDropdown === name && (
                        <div className={styles.dropBox}>
                            {options[name].map((option, index) => (
                                <div key={index} onClick={() => handleOptionClick(name, option)}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isOutside = !Object.values(dropdownRefs.current).some((ref) =>
                ref.current && ref.current.contains(event.target)
            );
            if (isOutside) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.reserve}>
                    <div className={styles.reserveDiv}>
                        <div className={styles.reserveDivTitle}>
                            <span>Online Reserve</span>
                            <h2>Reservation</h2>
                        </div>
                        <form>
                            <div className={styles.inputs}>
                                <div className={styles.inputsDivMain}>
                                    <div className={styles.inputsDiv}>
                                        <input type="number" name="phone" id="phone" placeholder="Phone" required />
                                    </div>
                                    <div className={styles.searchBtn2}>
                                        <button type="submit" aria-label='search'><SearchIcon /></button>
                                    </div>
                                </div>
                                {renderDropdown('persons')}
                                {renderDropdown('date')}
                                {renderDropdown('time')}
                            </div>
                            <div className={styles.searchBtn}>
                                <button type="submit" aria-label='search'><SearchIcon /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
