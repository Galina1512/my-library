import React from 'react';
import{
BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import { useSelector } from "react-redux";
import Firstpage from './Firstpage';
import './App.css';
import { getCartItems } from "./redux/cartSlice";

function App(){
    const cartItems = useSelector(getCartItems);

    return <Router>
        <nav className='header'>
            <Link to='/' className='center h1'>Что выбрать почитать</Link>
            <div className='rigth'>
            <Link to='/cart' className='vibor'>Ваш выбор</Link>
            <span className='circle'>{ cartItems.length }</span>

            </div>
        </nav>
        <Routes>
            <Route path='/' element={<Firstpage/>}/>
            <Route path='/Cart' element ={<Cart/>}/> 
        </Routes>
    </Router>
};
export default App;
