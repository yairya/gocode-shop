import React from 'react'

const ShoppingCartProduct = ({id, imgSrc, title, price, amount}) => {
    return(
        <div className="shopping-cart-product">
            <div className="product-image">
                <img src={imgSrc} alt="product img"/>
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h5>serial number: {id}</h5>
                <p>amount: {amount}</p>
                <h6>total price: {price * amount}</h6>
                {/* <button onClick={()=> productToCart(id,"increment")}>Add to cart</button> */}
            </div>
      </div>
    )
}

export default ShoppingCartProduct