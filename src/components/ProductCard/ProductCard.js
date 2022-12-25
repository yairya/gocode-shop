import React from 'react'
import "./ProductCard.css"

const ProductCard = ({imgSrc, title, price}) => {
    return(
        <div className="product-card">
            <div className="product-image">
                <img src={imgSrc} alt="product img"/>
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h6>{price}</h6>
            </div>
      </div>
    )
}

export default ProductCard