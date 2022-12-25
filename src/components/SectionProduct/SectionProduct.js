import React from 'react'
import "./SectionProduct.css"

import ProductCard from "../ProductCard/ProductCard"

const SectionProduct = ({products}) => {
    return(
        <section className="products">
            {products.map( (product, index) => <ProductCard key={index} imgSrc={product.imgSrc} title={product.title} price={product.price} />)}
        </section>
    )
}

export default SectionProduct