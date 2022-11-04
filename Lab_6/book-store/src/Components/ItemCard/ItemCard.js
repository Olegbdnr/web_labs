const ItemCard = (props) => {
    return (
        <div className="book-item" style={props.style}>
            <div className="img-wrapper">
                <img src={props.item.src} alt="bookImage" className="book-image"/>
            </div>
            <h1 className="book-tittle">{props.item.tittle}</h1>
            <p className="book-description">{props.item.description}</p>
            <div className="item-bottom">
                <span className="book-author">{props.item.author}</span>
                <span className="book-price">{props.item.price + "$"}</span>
            </div>
        </div>
    )
}

export default ItemCard;