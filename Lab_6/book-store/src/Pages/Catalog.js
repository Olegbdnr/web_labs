import "./../ComponentsStyle/Catalog.css";
import Select from "react-select";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ItemCard from "../Components/ItemCard/ItemCard";
import axios from "axios";
import {Oval} from "react-loader-spinner";

const Catalog = () => {
    const [books, setBooks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const filteredBooks = books.filter(book => {
        return book.tittle.toLowerCase().includes(inputValue.toLowerCase());
    })

    const fetchAllBooks = async () => {
        await axios.get('http://localhost:5000/api/books')
            .then(res => {
                setBooks(res.data);
            });
        setLoading(true);
    }

    const fetchBooksByLang = async (lang) => {
        await axios.get(`http://localhost:5000/api/books/option/${lang}`)
            .then(res => {
                setBooks(res.data);
            });
        setLoading(true);
    }

    useEffect(() => {
        fetchAllBooks()
    }, [])

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

    const handleLangOption = async (selectedOption) => {
        switch (selectedOption.label) {

            case "C++":
                await fetchBooksByLang('c++');
                break;

            case "Java":
                await fetchBooksByLang('java');
                break;

            case "Python":
                await fetchBooksByLang('python');
                break;

            default:
                fetchAllBooks().then(res => {
                    console.log(res)
                });
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
                fetchAllBooks();
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
                    {loading ? (filteredBooks.map(book => {
                        return <Link exact to={`/item/${book._id}`} key={book.id}>
                            <ItemCard item={book} style={{width: '250px'}}/>
                        </Link>
                    })) : (<Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}

                    />)}
                </div>
            </div>
        </>
    )
}

export default Catalog;