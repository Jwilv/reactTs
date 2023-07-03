import React, { createContext } from 'react'

import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/usePoduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ 
    product, 
    children, 
    className, 
    style, 
    onChange, 
    count, 
    initialValues }: ProductCardProps) => {

    const { productNumber, increasBy } = useProduct({ value : count, product, onChange, initialValues})

    return (
        <Provider value={{
            product,
            productNumber,
            increasBy
        }}>
            <div 
            className={`${styles.productCard} ${className}`}
            style={style}
            >
                {children}
            </div>
        </Provider>
    )
}