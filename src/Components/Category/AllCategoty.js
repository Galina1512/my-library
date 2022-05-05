import { getCartItems } from "../../redux/cartSlice";
import Filter from "./Filter";

const AllCategory = () => {
    return (<div>
        {/* <div className="header">
        <div className="center"><h1>Что выбрать почитать</h1> </div>
        <div className="rigth"><a className="vibor" href="{<Cart/>}">Ваш выбор</a><span className="circle">{getCartItems.length}</span></div>
        </div> */}
        
        <div className="menu">
            {['ФАНТАСТИКА', 'СКАЗКИ', 'СТИХИ', 'МЕМУАРЫ', 'ДЕТЕКТИВЫ', 'ВСЕ'].map(ganre =>
        <Filter ganre={ganre}/>
        
        )}
        </div>
    </div>)
} 
export default AllCategory;