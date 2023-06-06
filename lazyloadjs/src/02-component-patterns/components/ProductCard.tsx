import React, { useState } from 'react'

import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'

export const ProductCard = () => {

    const [counter, setCounter] = useState(0)

    const increasBy = (value) => {
        setCounter( prev => Math.max( prev +  value, 0) )
    }

    return (
        <div className={styles.productCard}>

            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffee mug" /> */}
            <img className={styles.productImg} src={noImg} alt="No image" />
            <span className={styles.productDescription}>Coffee Mug</span>

            <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={ ()=> increasBy(-1) }
                > - </button>

                <div className={styles.countLabel}>{counter}</div>

                <button className={styles.buttonAdd}
                    onClick={ ()=> increasBy(1)}> + </button>
            </div>
        </div>
    )
}
