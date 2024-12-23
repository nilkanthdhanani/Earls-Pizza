import AboutBanner from "./aboutBanner";
import AboutMain from "./aboutMain";
import Book from "./book";
import ClientReview from "./clientReview";
import Experience from "./experience";
import OurStory from "./ourStory";
import AboutVideo from "./video";

export default function AboutPage() {
    return (
        <>
            <AboutBanner />
            <AboutMain />
            <OurStory />
            <AboutVideo />
            <Experience />
            <ClientReview />
            <Book />
        </>
    )
}
