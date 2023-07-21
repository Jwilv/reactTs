import React from 'react'
import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components'
import {  ProductCardHandlers } from '../interfaces/interfaces'

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
                            initialValues={{
                                counter: 10,
                                countMax: 15,
                            }}
                        >
                            { ( {reset,count,increasBy, countMax, isMaxReached} : ProductCardHandlers )=> (
                            <>
                                <ProductImg />
                                <ProductTitle />
                                <ProductButtons/>
                            </>
                            )}
                        </ProductCard>


            </div>


        </div>
    )
}
