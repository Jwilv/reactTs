import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'


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