import Logo from "./Logo";
import Navigation from "./Navigation";
import "../../src/ComponentsStyle/Header.css";
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