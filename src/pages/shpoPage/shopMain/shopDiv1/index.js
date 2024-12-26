import { useEffect, useRef, useState } from 'react';
import styles from './shopDiv1.module.scss';
import Image from 'next/image';
import StarIcon from '@/assets/images/svg/starIcon';
import ListIcon from '@/assets/images/svg/listIcon';
import GridIcon from '@/assets/images/svg/gridIcon';
import DropIcon from '@/assets/images/svg/dropIcon';
import pizzaArray from '@/components/pizzaArray';
import RightChevronIcon from '@/assets/images/svg/rightChevron';
import PizzaDetails from '../../pizzaDetails';

export default function ShopDiv1() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const shopesPerPage = 6;
  const totalPages = Math.ceil(pizzaArray.length / shopesPerPage);

  const [selectedValue, setSelectedValue] = useState('Short by List');
  const options = ['New Collection', 'Tell Sell', 'Top Rated'];

  const toggleDropdown = () => {
    setActiveDropdown(activeDropdown ? null : 'Short by list');
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

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setActiveDropdown(null);
  };

  const currentPages = pizzaArray.slice(
    (currentPage - 1) * shopesPerPage,
    currentPage * shopesPerPage
  );

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getPaginationButtons = () => {
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + 2);

    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button key={i} type="button" className={currentPage === i ? styles.activePage : ''} onClick={() => goToPage(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPizza(null);
    document.body.classList.remove('no-scroll');
  };

  return (
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
        {currentPages.map((data, id) => (
          <div className={styles.pizzaBox} key={id} onClick={() => openModal(data)}>
            <div className={styles.pizzaBoxImg}>
              <Image src={data.image} alt={data.name} />
            </div>
            <div className={styles.pizzaBoxContent}>
              <div className={styles.pizzaBoxContentHead}>
                <h2>{data.name}</h2>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon key={index} fill={index < data.rating ? 'white' : 'gray'} />
                  ))}
                </div>
                <p><span>{data.price}</span> - <span>{data.discountPrice}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pageNumber}>
        <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous">
          <RightChevronIcon />
        </button>
        {getPaginationButtons()}
        <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next">
          <RightChevronIcon />
        </button>
      </div>
      {isModalOpen && (
        <PizzaDetails pizza={selectedPizza} onClose={closeModal} />
      )}
    </div>
  );
}
