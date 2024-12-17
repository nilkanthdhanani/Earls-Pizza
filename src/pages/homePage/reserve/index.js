import { useState } from 'react';
import DropIcon from '@/assets/images/svg/dropIcon';
import styles from './reserve.module.scss';
import SearchIcon from '@/assets/images/svg/searchIcon';

export default function Reserve() {
    const [activeDropdown, setActiveDropdown] = useState(null);
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

    const renderDropdown = (name, label) => (
        <div className={styles.inputsDiv}>
            <div className={styles.customSelect}>
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
                                <div className={styles.inputsDiv}>
                                    <input type="number" name="phone" id="phone" placeholder="Phone" required />
                                </div>
                                {renderDropdown('persons', 'Persons')}
                                {renderDropdown('date', 'Date')}
                                {renderDropdown('time', 'Time')}
                            </div>
                            <div className={styles.searchBtn}>
                                <button type="submit"><SearchIcon /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
