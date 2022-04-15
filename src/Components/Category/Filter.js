import { useSelector, useDispatch } from "react-redux";
import { filterGanre, getSelectedGanre } from "../../redux/booksSlice";


const Filter = ({ganre}) =>{
    const selectedGanre = useSelector(getSelectedGanre);
    const dispatch = useDispatch();
return (<div>
    <div className="category">
    <p onClick={()=>{dispatch(filterGanre(ganre))}} className={selectedGanre===ganre?'ganreButtonSelected ganreButton': 'ganreButton'}> 
         {ganre} </p>
    </div>
     </div>)
}
export default Filter;
