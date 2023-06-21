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

const product2 = {
    img: './69coffee-mug2.png',
    title: 'Coffee meme',
    id: '2',
}



const products: Product[] = [product, product2]

export const ShoppingPage = () => {

    const { ShoppingCart, handleChangeProduct } = useShoppingCart()

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark'
                            onChange={handleChangeProduct}
                            count={ShoppingCart[product.id]?.count || 0}
                        >
                            <ProductImg />
                            <ProductTitle className='text-white' />
                            <ProductButtons className='buttons-white' />
                        </ProductCard>
                    ))
                }

            </div>


            <div className='shopinng-cart'>
                {
                    Object.entries(ShoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            count={product.count}
                            onChange={handleChangeProduct}
                        >
                            <ProductImg />
                            <ProductTitle />
                            <ProductButtons />
                        </ProductCard>
                    ))
                }
            </div>

            <code>
                {
                    JSON.stringify(ShoppingCart, null, 5)
                }
            </code>

        </div>
    )
}
