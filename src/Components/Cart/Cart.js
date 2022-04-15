import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);

    return (<div>
        <h1>Планирую прочитать</h1>
        <h3 >Выбрано { cartItems.length } книг(и)</h3>
        <div  className="choice">
    {cartItems.map(cartItem => <CartItem cartItem = { cartItem }/>)}
    </div>
    </div>)
} 
export default Cart;