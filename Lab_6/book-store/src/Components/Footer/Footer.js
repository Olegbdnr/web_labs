import "../../ComponentsStyle/Footer.css";
import Logo from "../Logo/Logo";
import UsefulLinks from "./UsefulLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
        <footer className="footer">
            <UsefulLinks />
            <Logo />
            <SocialLinks />
        </footer>
    )
}

export default Footer;