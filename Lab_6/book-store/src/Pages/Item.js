import "../ComponentsStyle/ItemPage.css"
import {Link, useParams} from "react-router-dom";
import books from "../data/books.js";
import {useState} from "react";
import PlusImg from "../Components/Icons/icons8-plus-math-24.png";
import MinusImg from "../Components/Icons/icons8-minus-24.png";

const Item = () => {
    const {id} = useParams();
    const item = books[id - 1];
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decrementQuantity = () => {
        if (quantity === 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
            <div className="item-page-container">
                <div className="img-container">
                    <img src={item.src} alt="book" className="item-img"/>
                </div>
                <div className="item-data-container">
                    <h1 className="item-tittle">{item.tittle}</h1>
                    <p className="item-desc">{item.description}</p>
                    <div className="form-input-container">
                        <label htmlFor="span" className="input-label">Quantity:</label>
                        <span className="quantity">{quantity}</span>
                        <button className="increase-btn" onClick={incrementQuantity}>
                            <img src={PlusImg} alt="" style={{width: 18}}/>
                        </button>
                        <button className="increase-btn" onClick={decrementQuantity}><img src={MinusImg} alt=""/>
                        </button>
                    </div>
                    <div className="item-price">Total Price: {quantity * item.price + "$"}</div>
                    <div className="buttons-container">
                        <Link exact to="/catalog">
                            <button className="decline-btn">Go back</button>
                        </Link>
                        <button className="apply-btn">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;