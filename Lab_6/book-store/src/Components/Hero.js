import "../../src/ComponentsStyle/Hero.css";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <section className="hero-section">
            <HeroText />
            <HeroImage />
        </section>
    )
}

export default Hero;