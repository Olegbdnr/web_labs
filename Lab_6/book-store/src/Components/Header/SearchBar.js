import SearchIcon from "../Icons/SearchIcon.png";
import {Link} from "react-router-dom";
import {useState} from "react";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("?");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const validInputValue = () => {
        if (inputValue === '/undefined') {
            return "?"
        }
    }

    return (
        <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search Technology" onChange={handleInputChange}/>
                <div className="search-button">
                    <img src={SearchIcon} alt="SearchIcon" className="search-icon"/>
                </div>
        </div>
    )
}

export default SearchBar;