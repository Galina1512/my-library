import './App.css';
import Books from './Components/Books/Books';
import Category from './Components/Category/AllCategoty';
import Cart from './Components/Cart/Cart';
// import { data } from './data';

function App() {
  return (<div className='App' >
    <Category/>
    <Books/>
    <Cart/>

  </div>)
}

export default App;
