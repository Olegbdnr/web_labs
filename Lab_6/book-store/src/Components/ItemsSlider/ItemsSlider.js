import ItemCard from "../ItemCard/ItemCard";
import "../../ComponentsStyle/ItemsSlider.css";
import books from "../../data/books.js";
import {Link} from "react-router-dom";

const ItemsSlider = () => {
    const data = books;
    return (
        <section className="items-slider">
            <h1 className="items-slider_tittle">Most popular content</h1>
            <div className="home-cards-wrapper">
                <Link exact to={`/item/${data[0].id}`} key={data[0].id}><ItemCard item={data[0]}/></Link>
                <Link exact to={`/item/${data[1].id}`} key={data[1].id}><ItemCard item={data[1]}/></Link>
                <Link exact to={`/item/${data[2].id}`} key={data[2].id}><ItemCard item={data[2]}/></Link>
            </div>
            <a href="">VIEW MORE</a>
        </section>
    )
}

export default ItemsSlider;