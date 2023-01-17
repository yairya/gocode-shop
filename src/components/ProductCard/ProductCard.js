import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';


const ProductCard = ({id, imgSrc, title, price, productToCart, amount}) => {
    return(
        <div className="product-card">
            <div className="product-image">
            <Link to={"/products/"+id}>
                <img src={imgSrc} alt="product img"/>
            </Link>
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h6>{price}</h6>
                <div className="product-amount">
                    <IconButton color="primary" aria-label="add to shopping cart"  onClick={()=> productToCart(id,"increment")}>
                        <Add />
                    </IconButton>
                    <p>{amount}</p>
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={()=> productToCart(id,"decrement")}>
                        <Remove />
                    </IconButton>
                </div>
            </div>
      </div>
    )
}

export default ProductCard