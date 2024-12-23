import styles from './clientReview.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client1, client2, client3, client4, client5, client6, client7, client8 } from '@/assets/images/image';
import Image from 'next/image';
import ArrowRight from '@/assets/images/svg/arrowRight';
import ArrowLeft from '@/assets/images/svg/arrowLeft';
import QuotIcon from '@/assets/images/svg/quotIcon';

const reviews = [
    {
        id: 1,
        image: client1,
        name: "Emma Johnson",
        post: "Food Blogger",
        description: "The pizzas are simply incredible! The crust is perfectly crispy, and the toppings are always fresh. Delivery was fast, and the pizza arrived hot. This place never disappoints. Highly recommend their margherita and pepperoni pizzas!"
    },
    {
        id: 2,
        image: client2,
        name: "Michael Brown",
        post: "Software Engineer",
        description: "Amazing pizza and great service! I ordered the BBQ chicken pizza, and it was full of flavor. The delivery was quick, and the pizza was still steaming hot. Definitely my new favorite pizza place!"
    },
    {
        id: 3,
        image: client3,
        name: "Sophia Williams",
        post: "College Student",
        description: "This restaurant serves the best pizzas in town! The cheese burst pizza is a must-try. The online ordering process was super easy, and the delivery was right on time. Perfect for a movie night treat!"
    },
    {
        id: 4,
        image: client4,
        name: "James Wilson",
        post: "Entrepreneur",
        description: "I tried their veggie supreme pizza, and it was absolutely delicious. The toppings were fresh, and the flavors were perfectly balanced. Delivery was fast and efficient. This is now my go-to pizza spot!"
    },
    {
        id: 5,
        image: client5,
        name: "Olivia Martinez",
        post: "Graphic Designer",
        description: "The pizzas here are fantastic! The crust is just the right thickness, and the toppings are generous. I loved the spicy chicken pizza. Delivery was quick, and everything was perfect. Will definitely order again!"
    },
    {
        id: 6,
        image: client6,
        name: "Liam Anderson",
        post: "Teacher",
        description: "I'm blown away by the quality of the pizzas here. The Hawaiian pizza was delicious and had just the right amount of sweetness. Delivery was super fast, and the pizza arrived fresh and hot."
    },
    {
        id: 7,
        image: client7,
        name: "Isabella Clark",
        post: "Fitness Enthusiast",
        description: "Their thin-crust pizzas are amazing! I tried the classic margherita, and it was bursting with flavor. The delivery was timely, and the entire experience was delightful. Great option for healthy yet delicious pizza cravings!"
    },
    {
        id: 8,
        image: client8,
        name: "Noah Harris",
        post: "Freelance Writer",
        description: "I'm super impressed with this pizza place! The meat lover's pizza was packed with toppings, and the flavors were incredible. The online ordering system was easy to use, and delivery was quick. Highly recommended!"
    },
];


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={`${className} ${styles.customNextArrow}`} style={{ ...style }} onClick={onClick}>
            <ArrowRight />
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={`${className} ${styles.customPrevArrow}`} style={{ ...style }} onClick={onClick}>
            <ArrowLeft />
        </div>
    );
}

export default function ClientReview() {
    const setting = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        pauseOnHover: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className={styles.clientReview}>
            <div className={styles.container}>
                <div className={styles.clientReviewHead}>
                    <div className={styles.welcomeTitle}><span>What Say Our Clients</span></div>
                    <h2>Customer <span>Reviews</span></h2>
                </div>
                <div className={styles.clientReviewSlider}>
                    <Slider {...setting}>
                        {reviews.map((data, index) => (
                            <div className={styles.reviewBox} key={index}>
                                <div className={styles.reviewText}>
                                    <div className={styles.reviewBorder}>
                                        <QuotIcon />
                                    </div>
                                    <p>{data.description}</p>
                                    <div className={styles.clientImage}>
                                        <Image src={data.image} alt="client" />
                                    </div>
                                    <h2>{data.name}</h2>
                                    <span>{data.post}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
