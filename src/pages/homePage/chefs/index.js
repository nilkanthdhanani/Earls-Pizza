import styles from './chefs.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { chef1, chef2, chef3, chef4, chef5, chef6, vintageBorder } from '@/assets/images/image';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@/assets/images/svg/facebookIcon';
import LinkdInIcon from '@/assets/images/svg/linkdInIcon';
import TwitterIcon from '@/assets/images/svg/twitterIcon';

const chefs = [
    {
        image: chef1,
        name: 'Chef Gordon Ramsay',
        post: 'Head Chef'
    },
    {
        image: chef2,
        name: 'Chef Jamie Oliver',
        post: 'Executive Chef'
    },
    {
        image: chef3,
        name: 'Chef Alice Waters',
        post: 'Pastry Chef'
    },
    {
        image: chef4,
        name: 'Chef Thomas Keller',
        post: 'Sous Chef'
    },
    {
        image: chef5,
        name: 'Chef Dominique Crenn',
        post: 'Chef de Cuisine'
    },
    {
        image: chef6,
        name: 'Chef Massimo Bottura',
        post: 'Line Chef'
    },
];

export default function Chefs() {
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
        <section className={styles.chefs}>
            <div className={styles.container}>
                <div className={styles.chefsHead}>
                    <div className={styles.welcomeTitle}><span>Team</span></div>
                    <h2>Our <span>Expert Chefs</span></h2>
                    <div className={styles.vintageBorder}>
                        <Image src={vintageBorder} alt="vintageBorder" />
                    </div>
                    <p>Our chefs are passionate about creating delicious and innovative dishes that are sure to satisfy your taste buds.</p>
                </div>
            </div>
            <div className={styles.chefSlider}>
                <Slider {...settings}>
                    {chefs.map((data, index) => (
                        <div className={styles.sliderMain} key={index}>
                            <div className={styles.sliderImg}>
                                <Image src={data.image} alt={data.name} />
                            </div>
                            <div className={styles.sliderBox}>
                                <div className={styles.sliderBoxInner}>
                                    <h3>{data.name}</h3>
                                    <span>{data.post}</span>
                                    <div className={styles.socialLinks}>
                                        <Link href={"https://www.facebook.com/"} target='_blank' aria-label='facebook' tabIndex="-1">
                                            <FacebookIcon />
                                        </Link>
                                        <Link href={"https://www.linkedin.com/"} target='_blank' aria-label='linkedin' tabIndex="-1">
                                            <LinkdInIcon />
                                        </Link>
                                        <Link href={"https://twitter.com/"} target='_blank' aria-label='twitter' tabIndex="-1">
                                            <TwitterIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
