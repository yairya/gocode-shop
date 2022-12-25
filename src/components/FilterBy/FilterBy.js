import React from 'react'
import "./FilterBy.css"

const FilterBy = ({labelName, options}) => {
    return(
        <div className="collection-sort">
            <label>{labelName}</label>
            <select>
                {options.map( (option,index) => <option key={index} value="/">{option}</option>)}
            </select>
        </div>
    )
}

export default FilterBy