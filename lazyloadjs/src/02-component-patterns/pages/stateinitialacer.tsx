import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interfaces/interfaces'
import { useShoppingCart } from '../hooks/useShoppingCart'

const product = {
    img: './coffee-mug.png',
    title: 'Coffee',
    id: '1',
}

export const StateInitialazer = () => {

    return (
        <div>
            <h1>State Initialazer</h1>
            <hr />

            <div>


                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark'
                        >
                            <ProductImg />
                            <ProductTitle className='text-white' />
                            <ProductButtons className='buttons-white' />
                        </ProductCard>


            </div>


        </div>
    )
}
