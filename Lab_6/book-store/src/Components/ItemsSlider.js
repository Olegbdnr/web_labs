import ItemCard from "./ItemCard";
import Item1 from "./Icons/Item1.png";
import "./../ComponentsStyle/ItemsSlider.css";

const ItemsSlider = () => {
    return (
        <section className="items-slider">
            <h1 className="items-slider_tittle">Most popular content</h1>
            <div className="cards-wrapper">
                <a href="">
                    <ItemCard src={Item1} tittle="Solutions Architect’s Handbook" description="
                    If you're looking to learn programming to solve business problems or
                    want to enhance your exiting Python progr..." author="Oleh Bodnar" price="544$"/>
                </a>
                <a href="">
                    <ItemCard src={Item1} tittle="Solutions Architect’s Handbook" description="
                    If you're looking to learn programming to solve business problems or
                    want to enhance your exiting Python progr..." author="Oleh Bodnar" price="544$"/>
                </a>
                <a href="">
                    <ItemCard src={Item1} tittle="Solutions Architect’s Handbook" description="
                    If you're looking to learn programming to solve business problems or
                    want to enhance your exiting Python progr..." author="Oleh Bodnar" price="544$"/>
                </a>
            </div>
            <a href="">VIEW MORE</a>
        </section>
    )
}

export default ItemsSlider;