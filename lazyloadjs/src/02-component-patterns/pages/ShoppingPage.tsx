import React from 'react'
import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
    img: './coffee-mug.png',
    title: 'Coffee'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <ProductCard
                product={product}
                className='bg-dark'
                style={{ backgroundColor : 'grey'}}
            >
                <ProductCard.Img img='./coffee-mug.png' />
                <ProductCard.Title
                    title='Cafe'
                    className='text-white'
                />
                <ProductCard.Buttons 
                className='buttons-white'
                style={{ backgroundColor:'green'}} 
                />
            </ProductCard>

            <ProductCard
                product={product}
                className='bg-dark'
            >
                <ProductImg img='./coffee-mug.png' />
                <ProductTitle
                    className='text-white'
                    title='Cafe 2'
                />
                <ProductButtons className='buttons-white' />
            </ProductCard>

            <ProductCard
                product={product}
                className='bg-dark'
            >
                <ProductImg img='./coffee-mug.png' />
                <ProductTitle
                    className='text-white'
                    title='Cafe 2'
                />
                <ProductButtons className='buttons-white' />
            </ProductCard>
        </div>
    )
}
