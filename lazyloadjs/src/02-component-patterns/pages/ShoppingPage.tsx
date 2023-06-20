import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { Product } from '../interfaces/interfaces'

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

interface ProductInCart extends Product {
    count: number;
}

const products: Product[] = [product, product2]

export const ShoppingPage = () => {

    const [ShoppingCart, setShoppingCart] = useState<{ [key:string]:ProductInCart}>({})

    const handleChangeProduct = ({ count, product} : {count : number, product : Product})=>{

        setShoppingCart( oldShoppingCart => {

            if(count === 0){
                const { [product.id] : toDelete, ...rest} = oldShoppingCart
                return rest
            }

            return {
                ...oldShoppingCart,
                [product.id] : { ...product, count}
            }
        })
    }

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
                            onChange={ handleChangeProduct }
                        >
                            <ProductImg />
                            <ProductTitle className='text-white' />
                            <ProductButtons className='buttons-white' />
                        </ProductCard>
                    ))
                }

            </div>


            <div className='shopinng-cart'>
                <ProductCard
                    product={product}
                    className='bg-dark'
                    style={{ width: '100px' }}
                >
                    <ProductImg />
                    <ProductTitle className='text-white' />
                    <ProductButtons className='buttons-white' />
                </ProductCard>
            </div>

            <code>
                {
                    JSON.stringify(ShoppingCart,null,5)
                }
            </code>

        </div>
    )
}
