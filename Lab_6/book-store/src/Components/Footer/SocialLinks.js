import Facebook from "../Icons/Facebook.png";
import Twitter from "../Icons/Twitter.png";
import Linkedin from "../Icons/Linkedin.png";
import Gplus from "../Icons/Gplus.png";

const SocialLinks = () => {
    return (
        <div className="links-wrapper">
            <h1 className="links-tittle">FOLLOW US</h1>
            <ul className="row-wrapper">
                <li className="social-item">
                    <a href="">
                        <img src={Facebook} alt="FacebookIcon" className="social-link"/>
                    </a>
                </li>
                <li className="social-item">
                    <a href="">
                        <img src={Twitter} alt="FacebookIcon" className="social-link"/>
                    </a>
                </li>
                <li className="social-item">
                    <a href="">
                        <img src={Linkedin} alt="FacebookIcon" className="social-link"/>
                    </a>
                </li>
                <li className="social-item">
                    <a href="">
                        <img src={Gplus} alt="FacebookIcon" className="social-link"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks;

