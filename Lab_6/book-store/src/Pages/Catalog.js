import "./../ComponentsStyle/Catalog.css";
import Select from "react-select";
import books from "../data/books.js";
import {useState} from "react";
import {Link} from "react-router-dom";
import ItemCard from "../Components/ItemCard/ItemCard";

let data = books;

const Catalog = () => {
    const [books, setBooks] = useState(data);
    const [inputValue, setInputValue] = useState('');
    const filteredBooks = books.filter(book => {
        return book.tittle.toLowerCase().includes(inputValue.toLowerCase());
    })

    const langOptions = [
        {value: "null", label: "-?-"},
        {value: "c++", label: "C++"},
        {value: "java", label: "Java"},
        {value: "python", label: "Python"}
    ]

    const sortOptions = [
        {value: "null", label: "-?-"},
        {value: "price", label: "Price"},
        {value: "alfabet", label: "Alfabet"}
    ]

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleLangOption = (selectedOption) => {
        switch (selectedOption.label) {

            case "C++":
                setBooks(data.filter(book => {
                    return book.tittle.includes("C++");
                }));
                break;

            case "Java":
                setBooks(data.filter(book => {
                    return book.tittle.includes("Java");
                }));
                break;

            case "Python":
                setBooks(data.filter(book => {
                    return book.tittle.includes("Python");
                }));
                break;

            default:
                setBooks(data);
        }
    }
    const sortBooksByPrice = () => {
        let sorted = books.slice(0);
        sorted.sort(function (a, b) {
            return b.price - a.price
        });
        return sorted;
    }

    const sortBooksByAlfabet = () => {
        let sorted = books.slice(0);
        sorted.sort(function (a, b) {
            return a.tittle.localeCompare(b.tittle)
        });
        return sorted;
    }

    const handleSortOption = (selectedOption) => {
        switch (selectedOption.label) {
            case "Price":
                setBooks(sortBooksByPrice);
                break;
            case "Alfabet":
                setBooks(sortBooksByAlfabet);
                break
            default:
                setBooks(data);
        }
    }

    return (
        <>
            <section className="filter-section" defaultValue={"Some"}>
                <div className="filters-container">
                    <label htmlFor="select" className="filter-label">Language/Technology</label>
                    <Select options={langOptions} onChange={handleLangOption}/>
                    <label htmlFor="select" className="filter-label">Sort by</label>
                    <Select options={sortOptions} onChange={handleSortOption}/>
                </div>
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="Search Technology"
                           onChange={handleInputChange}/>
                </div>
            </section>
            <div className="page-container">
                <div className="cards-wrapper">
                    {filteredBooks.map(book => {
                        return <Link exact to={`/item/${book.id}`} key={book.id}>
                                   <ItemCard item={book} style={{width: '250px'}}/>
                               </Link>
                    })}
                </div>
            </div>
        </>
    )
}

export default Catalog;