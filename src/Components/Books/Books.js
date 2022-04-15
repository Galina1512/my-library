import { useSelector } from "react-redux";
import { getSelectedGanre } from "../../redux/booksSlice";
import { data } from "../../data";
import Book from './Book';

const Books = () =>{
    const selectedGanre = useSelector(getSelectedGanre);
    return (<div className="allbooks">
        {data
        .filter (book =>{
            if (selectedGanre === 'ВСЕ') return true;
            return selectedGanre === book.genre;})
        .map (book => <Book book = {book}/>)
        }

    </div>)
}
export default Books;