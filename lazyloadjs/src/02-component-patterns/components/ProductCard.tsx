import React from 'react'

import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { useProduct } from '../hooks/usePoduct'

interface Props {
    product : Product
}
interface Product {
    id?:number,
    title:string,
    img:string,
}

export const ProductImg = ({img = ''})=>{
    return(
        <img className={styles.productImg} src={ img ? img : noImg} alt="No image" />
    );
}

export const ProductCard = ({ product } : Props) => {

const {productNumber, increasBy} = useProduct( 0 )

    return (
        <div className={styles.productCard}>

            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffee mug" /> */}

            <ProductImg img={product.img}/>
            

            <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={ ()=> increasBy(-1) }
                > - </button>

                <div className={styles.countLabel}>{productNumber}</div>

                <button className={styles.buttonAdd}
                    onClick={ ()=> increasBy(1)}> + </button>
            </div>
        </div>
    )
}
