import React from 'react'
import "./SortBy.css"

const SortBy = ({labelName, options}) => {
    return(
        <div className="collection-sort">
            <label>{labelName}</label>
            <select>
                {options.map( (option,index) => <option key={index} value="/">{option}</option>)}
            </select>
        </div>
    )  
}

export default SortBy