import React from 'react'
import "./FilterBy.css"
import * as Constants from "../../constants"


const FilterBy = ({labelName, options, setCategory}) => {
    return(
        <div className="collection-sort">
            <label>{labelName}</label>
            <select onChange={e => setCategory(e.target.value)}>
                <option key="0" value={Constants.ALL_CATEGORIES} defaultValue>{Constants.ALL_CATEGORIES}</option>
                {options.map( (option,index) => <option key={index+1} value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default FilterBy