import HeroBanner from "@/pages/homePage/heroBanner";
import Welcome from "./welcome";
import Reserve from "./reserve";
import PizzaSlider from "./pizzaSlider";
import Menu from "./menu";

export default function HomePage() {
    return (
        <>
            <HeroBanner />
            <Reserve />
            <Welcome />
            <PizzaSlider />
            <Menu />
        </>
    )
}
