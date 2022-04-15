import { data } from "../../data";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CartItem = ({cartItem}) =>{
    const book = data.find (item => item.id === cartItem.bookId);
        const dispatch = useDispatch();
        const [showMore, setShowMore]=useState(true);
        console.log(book);

    return(<div className="onebookselected">
    <div className="strong">
        <div>
            <img src={book.image} width='80px' alt=""/>
        </div>
    <div className="text">
    <p className="italia">Автор: <span className="autor">{ book.author }</span></p>
    <p className="italia">Название: <span className="autor">{ book.title } </span></p>
    </div>
    </div>
    <div>
        <p className="describe">{showMore ? book.describe.substring(0, 70) + '...' : book.describe}
        <button onClick={()=>setShowMore(!showMore) } className="show">
            {showMore ? 'Показать больше' : 'Показать меньше'}
        </button>
        </p>
    </div>
    {/* <img src={ddelete.jpg} alt="" width='30px'/> */}
    <button onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id})) } className='fordelete'>
    УДАЛИТЬ
    </button> 
    </div>)
}
export default CartItem;