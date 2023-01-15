import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

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
                <button onClick={()=> productToCart(id,"increment")}>Add to cart</button>
                <p>{amount}</p>
                <button onClick={()=> productToCart(id,"decrement")}>Remove from cart</button>
            </div>
      </div>
    )
}

export default ProductCard