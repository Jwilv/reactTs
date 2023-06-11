import React, { ReactElement } from 'react'

import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { useProduct } from '../hooks/usePoduct'

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
}
interface Product {
    id?: number,
    title: string,
    img: string,
}

interface ProducbuttonsProps {
    productNumber: number,
    increasBy: (value: any) => void,
}

export const ProductImg = ({ img = '' }) => {
    return (
        <img className={styles.productImg} src={img ? img : noImg} alt="No image" />
    );
}

export const ProductTitle = ({ title }: { title: string }) => {
    return (
        <span className={styles.productDescription}>{title}</span>
    );
}

export const ProductButtons = ({ productNumber, increasBy }: ProducbuttonsProps) => {
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
        <div className={styles.productCard}>
            {children}

            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffee mug" /> */}

            {/* <ProductImg img={product.img} />

            <ProductTitle title={product.title} />

            <ProductButtons productNumber={productNumber} increasBy={increasBy} /> */}

        </div>
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Img = ProductImg;
ProductCard.Buttons = ProductButtons;