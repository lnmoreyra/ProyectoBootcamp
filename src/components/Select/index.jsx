import './select.css'
import { useState } from "react";


function Select (props) {

    let [categoriesChecked, setCategoriesChecked]=useState([]);

        function handleCategoryChecked(category) {
            if (category.checked) {
                
                let arrayAuxCategoriesChecked = [...categoriesChecked, category.value]
                setCategoriesChecked (arrayAuxCategoriesChecked)
                props.handleCheckboxFilter(arrayAuxCategoriesChecked)
                } else {
                    let arrayAuxCategoriesChecked =  categoriesChecked.filter ((categoria)=> category.value!=categoria)
                    setCategoriesChecked (arrayAuxCategoriesChecked)
                    props.handleCheckboxFilter(arrayAuxCategoriesChecked)
                    
                }
                
                
        }
    
    return (
        <div className='checked'>
            <input onChange={(e)=>handleCategoryChecked(e.target)} type="checkbox" id="food" name="food" value="food"/>
            <label className='checkSelect'><span>Food</span>
            </label>
            <input onChange={(e)=>handleCategoryChecked(e.target)} type="checkbox" id="museum" name="museum" value="museum"/>
            <label className='checkSelect'><span>Museum</span>
            </label>
            <input onChange={(e)=>handleCategoryChecked(e.target)} type="checkbox" id="books" name="books" value="books"/>
            <label className='checkSelect'><span>Books</span>
            </label>
            <input onChange={(e)=>handleCategoryChecked(e.target)} type="checkbox" id="race" name="race" value="race"/>
            <label className='checkSelect'><span>Race</span>
            </label>
            <input onChange={(e)=>handleCategoryChecked(e.target)} type="checkbox" id="cinema" name="cinema" value="cinema"/>
            <label className='checkSelect'><span>Cinema</span>
            </label>
            <input onChange={(e)=>handleCategoryChecked(e.target)} type="checkbox" id="concert" name="concert" value="concert"/>
            <label className='checkSelect'><span>Concert</span>
            </label>
            <input onChange={(e)=>handleCategoryChecked(e.target)} type="checkbox" id="party" name="party" value="party"/>
            <label className='checkSelect'><span>Party</span>
            </label>
        </div>
        )
}

export default Select