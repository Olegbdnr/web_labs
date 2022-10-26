import Logo from "../Logo/Logo";
import Navigation from "./Navigation";
import "../../ComponentsStyle/Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
            <SearchBar />
        </header>
    )
}

export default Header;