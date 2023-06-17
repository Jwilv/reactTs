import React from 'react'
import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components'
import '../styles/custom-styles.css'

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

        <ProductCard product={product}
        className='bg-dark'
        >
            <ProductImg img='./coffee-mug.png'/>
            <ProductTitle
            className='text-white' 
            title='Cafe' 
            />
            <ProductButtons className='buttons-white' />
        </ProductCard>
        </div>
    )
}
