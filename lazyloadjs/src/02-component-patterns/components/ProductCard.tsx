import React, { createContext } from 'react'

import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/usePoduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'
import { ProductImg } from './ProductImg'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children, className }: ProductCardProps) => {

    const { productNumber, increasBy } = useProduct(0)

    return (
        <Provider value={{
            product,
            productNumber,
            increasBy
        }}>
            <div className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    )
}