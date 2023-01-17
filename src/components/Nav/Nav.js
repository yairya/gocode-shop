import React from 'react'
import "./Nav.css"
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import FilterBy from '../FilterBy/FilterBy'
import SortBy from '../SortBy/SortBy'

const Nav = () => {
    return(
        <nav className="product-filter">
            <h1>Jackets</h1>
            <div className="sort">
                <ShoppingCart/>
                <FilterBy/>
                <SortBy labelName={"Sort by:"} options={["Featured","Best Selling","Alphabetically, A-Z","Alphabetically, Z-A","Price, low to high","Price, high to low","Date, new to old","Date, old to new"]} />
            </div>
        </nav>
    )
}

export default Nav
