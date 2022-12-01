import "../ComponentsStyle/ItemPage.css"
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PlusImg from "../Components/Icons/icons8-plus-math-24.png";
import MinusImg from "../Components/Icons/icons8-minus-24.png";
import axios from "axios";
import {Oval} from "react-loader-spinner";
import BookImage from "../Components/Icons/Item1.png"

const Item = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    console.log(id === `636d6f9c2d7a3196c766cc27`);
    const getOneBook = async (bookId) => {
        await axios.get(`http://localhost:5000/api/books/${bookId}`)
            .then(res => {
                    setItem(res.data);
                }
            )
        setLoading(true);
    }
    useEffect(() => {
        getOneBook(id);
    }, [])

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
            {loading ? (
                <div className="item-page-container">
                    <div className="img-container">
                        <img src={BookImage} alt="book" className="item-img"/>
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
            ) : (<Oval
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
        </>
    )
}

export default Item;