import React from 'react'
import "./Nav.css"

import FilterBy from '../FilterBy/FilterBy'
import SortBy from '../SortBy/SortBy'

const Nav = () => {
    return(
        <nav className="product-filter">
            <h1>Jackets</h1>
            <div className="sort">
                <FilterBy labelName={"Filter by:"} options={["All Jackets","2016","jacket","Jackets","layers","Obermeyer","Roxy","womens"]} />
                <SortBy labelName={"Sort by:"} options={["Featured","Best Selling","Alphabetically, A-Z","Alphabetically, Z-A","Price, low to high","Price, high to low","Date, new to old","Date, old to new"]} />
            </div>
        </nav>
    )
}

export default Nav
