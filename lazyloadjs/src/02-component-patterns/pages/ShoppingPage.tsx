import React from 'react'
import { ProductCard } from '../components/ProductCard'

const product = {
img:'./coffee-mug.png',
title:'Coffee'
}

export const ShoppingPage = () => {
    return (
        <div>
        <h1>ShoppingPage</h1>
        <hr />
        <ProductCard product={product} >
            <h1>children</h1>
        </ProductCard>
        </div>
    )
}
