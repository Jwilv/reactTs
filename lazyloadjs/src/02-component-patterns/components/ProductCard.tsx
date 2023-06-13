import React, { createContext, useContext } from 'react'

import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/usePoduct'
import { ProductContextProps, Props } from '../interfaces/interfaces'
import { ProductImg } from './ProductImg'



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductButtons = () => {

    const { increasBy, productNumber } = useContext(ProductContext)
    return (
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={() => increasBy(-1)}
            > - </button>

            <div className={styles.countLabel}>{productNumber}</div>

            <button className={styles.buttonAdd}
                onClick={() => increasBy(1)}> + </button>
        </div>
    );
}

export const ProductCard = ({ product, children }: Props) => {

    const { productNumber, increasBy } = useProduct(0)

    return (
        <Provider value={{
            product,
            productNumber,
            increasBy
        }}>
            <div className={styles.productCard}>
                {children}

                {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffee mug" /> */}

                {/* <ProductImg img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons productNumber={productNumber} increasBy={increasBy} /> */}

            </div>
        </Provider>
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Img = ProductImg;
ProductCard.Buttons = ProductButtons;