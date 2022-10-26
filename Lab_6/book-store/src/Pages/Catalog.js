import ItemCard from "../Components/ItemCard/ItemCard";
import Item1 from "../Components/Icons/Item1.png";
import "./../ComponentsStyle/Catalog.css";
import FilterBar from "../Components/FilterBar/FilterBar";

const item1 = '';
let Books = [item1, item1, item1, item1, item1, item1];
Books = Books.map(book => {
    book = <a href="#">
               <ItemCard src={Item1} tittle="Solutions Architect’s Handbook" description="
               If you're looking to learn programming to solve business problems or
               want to enhance your exiting Python progr..." author="Oleh Bodnar" price="544$" style={{width: '250px'}}/>
           </a>;
    return book;
})

const Catalog = () => {
    return (
        <>
            <FilterBar/>
            <div className="page-container">
                <div className="cards-wrapper">
                    {Books}
                </div>
            </div>
        </>
    )
}

export default Catalog;