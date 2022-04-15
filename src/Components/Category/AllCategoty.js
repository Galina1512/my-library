import Filter from "./Filter";

const AllCategory = () => {
    return (<div>
        <h1>Что выбрать почитать</h1>
        <div className="menu">
            {['ФАНТАСТИКА', 'СКАЗКИ', 'СТИХИ', 'МЕМУАРЫ', 'ДЕТЕКТИВЫ', 'ВСЕ'].map(ganre =>
        <Filter ganre={ganre}/>
        
        )}
        </div>
    </div>)
} 
export default AllCategory;