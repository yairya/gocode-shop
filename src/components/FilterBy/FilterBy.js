import React from 'react'
import "./FilterBy.css"
import ALL_CATEGORIES from "../../constants"


const FilterBy = ({labelName, options, setCategory}) => {
    return(
        <div className="collection-sort">
            <label>{labelName}</label>
            <select onChange={e => setCategory(e.target.value)}>
                <option key="0" value={ALL_CATEGORIES} defaultValue>{ALL_CATEGORIES}</option>
                {options.map( (option,index) => <option key={index+1} value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default FilterBy