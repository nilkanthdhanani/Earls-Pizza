import HeroBanner from "@/pages/homePage/heroBanner";
import Welcome from "./welcome";
import Reserve from "./reserve";
import PizzaSlider from "./pizzaSlider";
import Menu from "./menu";
import Video from "./video";
import Reservation from "./reservation";
import Review from "./review";
import PizzaDetail from "./pizzaDetail";
import Chefs from "./chefs";

export default function HomePage() {
    return (
        <>
            <HeroBanner />
            <Reserve />
            <Welcome />
            <PizzaSlider />
            <Menu />
            <Video />
            <Reservation />
            <Review />
            <PizzaDetail />
            <Chefs />
        </>
    )
}
