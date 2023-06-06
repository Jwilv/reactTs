import React from 'react'

import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'

export const ProductCard = () => {
    return (
        <div className={styles.productCard}>

            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffee mug" /> */}
            <img className={styles.productImg} src={noImg} alt="No image" />
            <span className={styles.productDescription}>Coffee Mug</span>

            <div className={styles.buttonsContainer}>
                <button
                className={styles.buttonMinus}
                > - </button>

                <div className={styles.countLabel}> 0 </div>

                <button className={ styles.buttonAdd }> + </button>
            </div>
        </div>
    )
}
