import React from 'react'
import IconButton from '@mui/material/IconButton';
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart';

const ShoppingCartProduct = ({id, imgSrc, title, price, amount, removeFromCart}) => {
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
                <IconButton color="primary" aria-label="add to shopping cart">
                        <RemoveShoppingCart onClick={()=> removeFromCart(id)}/>
                </IconButton>
            </div>
      </div>
    )
}

export default ShoppingCartProduct