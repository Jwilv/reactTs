import React from 'react'
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface ProductButtonsComponentProps {
    className?: string;
}


export const ProductButtons = ({className} : ProductButtonsComponentProps)  => {

    const { increasBy, productNumber } = useContext(ProductContext)
    return (
        <div className={`${styles.buttonsContainer} ${ className }`}>
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

