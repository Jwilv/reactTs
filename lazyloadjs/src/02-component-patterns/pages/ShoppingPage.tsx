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
            <ProductCard.Img img='./coffee-mug.png'/>
            <ProductCard.Title title='Cafe' />
        </ProductCard>
        </div>
    )
}
