import ItemCard from "./ItemCard";
import {Link, useParams} from "react-router-dom";


const ItemsList = ({books}) => {
    return (
        <>
            {books.map(book => {
                return <Link exact to={`/item/${book.id}`} key={book.id}><ItemCard item={book} style={{width: '250px'}}/></Link>
            })}
        </>
    )
}

export default ItemsList;