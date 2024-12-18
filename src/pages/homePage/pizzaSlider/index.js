import styles from './pizzaSlider.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7, pizza8, } from '@/assets/images/image';
import Image from 'next/image';

const pizza = [
    {
        id: 1,
        image: pizza1,
        title: "pizza 1",
        name: "Classic Margherita",
        description: "A timeless classic with fresh mozzarella, basil, and rich tomato sauce on a thin crust.",
    },
    {
        id: 2,
        image: pizza2,
        title: "pizza 2",
        name: "Pepperoni Delight",
        description: "Loaded with zesty pepperoni, melted cheese, and a perfectly crisp crust for every bite.",
    },
    {
        id: 3,
        image: pizza3,
        title: "pizza 3",
        name: "Veggie Supreme",
        description: "A garden-fresh mix of bell peppers, olives, onions, and mushrooms on a cheesy base.",
    },
    {
        id: 4,
        image: pizza4,
        title: "pizza 4",
        name: "BBQ Chicken",
        description: "Tender chicken pieces, smoky BBQ sauce, and caramelized onions on a cheesy crust.",
    },
    {
        id: 5,
        image: pizza5,
        title: "pizza 5",
        name: "Hawaiian Paradise",
        description: "A tropical twist with pineapple chunks, ham, and melted cheese on a golden crust.",
    },
    {
        id: 6,
        image: pizza6,
        title: "pizza 6",
        name: "Spicy Meat Feast",
        description: "A hearty mix of sausage, pepperoni, and spicy jalapeños for meat lovers with a kick.",
    },
    {
        id: 7,
        image: pizza7,
        title: "pizza 7",
        name: "Truffle Mushroom",
        description: "Rich truffle oil, creamy cheese, and earthy mushrooms for a luxurious pizza experience.",
    },
    {
        id: 8,
        image: pizza8,
        title: "pizza 8",
        name: "Four Cheese Heaven",
        description: "A cheesy delight with mozzarella, parmesan, gorgonzola, and cheddar on a crispy crust.",
    },
];


export default function PizzaSlider() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.pizzaSlider}>
            <Slider {...settings}>
                {pizza.map((data, index) => (
                    <div className={styles.sliderMain} key={index}>
                        <div className={styles.sliderImg}>
                            <Image src={data.image} alt={data.title} />
                        </div>
                        <div className={styles.sliderBox}>
                            <div className={styles.sliderBoxInner}>
                                <span>Food</span>
                                <h2>{data.name}</h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
