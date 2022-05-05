import { useSelector } from "react-redux";
import { useState } from "react";
import Firstpage from "../../Firstpage";
import { getCartItems } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import up from "./double-up-50.png";
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector(getCartItems);

    const [visible, setVisible] = useState(false);

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100)
         {setVisible(true)}
    else if (scrolled <= 300) 
         {setVisible(false)}
  };

 window.addEventListener('scroll', toggleVisible);

    return (<div>
        <div className="container">
        <h1>Планирую прочитать</h1>
        <h3 >Выбрано { cartItems.length } книг(и)</h3>
        </div>
        <div  className="choice">
    {cartItems.map(cartItem => <CartItem cartItem = { cartItem }/>)}
    </div>
    {/* <div>
    <Router>
        <nav>
            <Link to='/firstpage'>Вернуться на главную страницу </Link>

        </nav>
        <Routes>
            <Route path="/firstpage" element={<Firstpage/>}/>
        </Routes>
    </Router>
    </div> */}
            <div className="upp">
    <button onClick={scrollToTop } className="btnup" style={{display: visible ? 'inline' : 'none'}}><img src={up}  width='45px' alt='setup' className='btnupp' /> </button>
</div>

    </div>)
} 
export default Cart;