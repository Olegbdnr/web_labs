const ItemCard = (props) => {
    return (
        <div className="book-item" style={props.style}>
            <div className="img-wrapper">
                <img src={props.src} alt="bookImage" className="book-image"/>
            </div>
            <h1 className="book-tittle">{props.tittle}</h1>
            <p className="book-description">{props.description}</p>
            <div className="item-bottom">
                <span className="book-author">{props.author}</span>
                <span className="book-price">{props.price}</span>
            </div>
        </div>
    )
}

export default ItemCard;