import React, { createContext } from 'react'

import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/usePoduct'
import { ProductCardProps, ProductContextProps, InitialValues } from '../interfaces/interfaces';



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

    const { productNumber, increasBy, isMaxReached, reset} = useProduct({ value : count, product, onChange, initialValues}) 

    return (
        <Provider value={{
            product,
            productNumber,
            increasBy,
            countMax : initialValues?.countMax,
            isMaxReached,
        }}>
            <div 
            className={`${styles.productCard} ${className}`}
            style={style}
            >
                { children && children({
                    count : productNumber,
                    isMaxReached,
                    increasBy,
                    reset,
                    product,
                })  }
            </div>
        </Provider>
    )
}