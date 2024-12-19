import styles from './review.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviewBg } from '@/assets/images/image';
import Image from 'next/image';
import ArrowRight from '@/assets/images/svg/arrowRight';
import ArrowLeft from '@/assets/images/svg/arrowLeft';
import QuotIcon from '@/assets/images/svg/quotIcon';

const reviews = [
    {
        id: 2,
        name: "Wade Warren",
        post: "Manager",
        description: "Wade Warren is an exceptional manager with a talent for creating a welcoming atmosphere. His leadership ensures seamless operations, while his friendly demeanor and problem-solving skills make him a favorite among staff and customers alike. Wade always goes above and beyond to provide outstanding service."
    },
    {
        id: 1,
        name: "Dev Jon",
        post: "Senior Chef",
        description: "Dev Jon is a remarkable chef with years of experience in crafting delightful culinary creations. His attention to detail and passion for cooking make him stand out in the kitchen. Customers consistently praise his innovative dishes and ability to elevate traditional recipes into unforgettable dining experiences."
    },
    {
        id: 3,
        name: "Kamlia Hafi",
        post: "Junior Chef",
        description: "Kamlia Hafi is an up-and-coming talent in the culinary world. Her creativity and dedication shine through in every dish she prepares. Despite being a junior chef, Kamlia consistently impresses with her ability to learn quickly and adapt to challenges, making her a valuable member of the team."
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

export default function Review() {
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
        <section className={styles.review}>
            <div className={styles.container}>
                <div className={styles.reviewDiv}>
                    <div className={styles.reviewImg}>
                        <Image src={reviewBg} alt="reviewBg" />
                    </div>
                    <div className={styles.reviewSlide}>
                        <Slider {...setting}>
                            {reviews.map((data, index) => (
                                <div className={styles.reviewBox} key={index}>
                                    <div className={styles.reviewText}>
                                        <div className={styles.reviewBorder}>
                                            <QuotIcon />
                                        </div>
                                        <p>{data.description}</p>
                                        <h2>{data.name}</h2>
                                        <span>{data.post}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}
