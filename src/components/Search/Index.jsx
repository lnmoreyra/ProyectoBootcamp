import './search.css'
import { useRef } from "react";
import Buscar from '../../assets/images/buscar.png'



function Search(props) {
    let inputSearchElement = useRef(null) 
    
    return(
    <div className ="search-container">
        <label className='src'>
        <button className="search-button "type="search"><img src={Buscar} alt="buscar" srcset="" /></button>
        <input onChange={(event) =>props.filterEvents(event.target.value)} ref= {inputSearchElement} type="text" placeholder="Buscar..." />
        </label>
    </div>
)
}

export default Search;
