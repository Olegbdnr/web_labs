import SearchIcon from "./Icons/SearchIcon.png";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search Technology"/>
            <div className="search-button">
                <img src={SearchIcon} alt="SearchIcon" className="search-icon"/>
            </div>
        </div>
)
}

export default SearchBar;