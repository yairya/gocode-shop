import React, { useContext } from 'react'
import "./FilterBy.css"
import ProductContext from '../ProductContext/ProductContext'
import * as Constants from "../../constants"


const FilterBy = () => {
    const {categories, setCategory} = useContext(ProductContext);
    return(
        <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={e => setCategory(e.target.value)}>
                <option key="0" value={Constants.ALL_CATEGORIES} defaultValue>{Constants.ALL_CATEGORIES}</option>
                {categories.map( (option,index) => <option key={index+1} value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default FilterBy