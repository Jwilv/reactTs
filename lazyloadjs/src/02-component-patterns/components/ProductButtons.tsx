import React, { CSSProperties, useCallback } from 'react'
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface ProductButtonsComponentProps {
    className?: string;
    style?: CSSProperties;
}


export const ProductButtons = ({className, style } : ProductButtonsComponentProps)  => {

    const { increasBy, productNumber, countMax } = useContext(ProductContext)

    const isMaxReached = useCallback( 
        () => !!countMax && productNumber === countMax , 
        [productNumber, countMax], )
    
    return (
        <div 
        className={`${styles.buttonsContainer} ${ className }`}
        style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increasBy(-1)}
            > - </button>

            <div className={styles.countLabel}>{productNumber}</div>

            <button className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled } `}
                onClick={() => increasBy(1)}> + </button>
        </div>
    );
}

