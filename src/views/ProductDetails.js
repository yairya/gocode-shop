import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetJson } from '../hooks/GetJson';


const ProductDetails = () => {

    const urlParams = useParams();
    const [product, setProduct] = useState("");

    useEffect(() => {
        GetJson("https://fakestoreapi.com/products/"+urlParams.productId, setProduct);
      },[]);

      console.log(product);
    return(
        <div className="product-details">
            <h5>{product.title} - {product.id}</h5>
            <div className="product-image">
                <img src={product.image} alt="product img"/>
            </div>
            <div className="product-info">
                <h6>price: {product.price}</h6>
            </div>
            <Link to={"/"}>Back </Link>
      </div>
    )
}

export default ProductDetails