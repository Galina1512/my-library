import { useDispatch } from "react-redux";
import { addItemsToCart } from "../../redux/cartSlice";

const Book = ({book}) =>{
    const dispatch = useDispatch();
    return( <div className="onebook">
        <img src={book.image} className="image" alt=""/>
        <button onClick={()=> dispatch(addItemsToCart({book}) )} className='btn'>ВЫБРАТЬ</button>
    </div>)
}
export default Book;