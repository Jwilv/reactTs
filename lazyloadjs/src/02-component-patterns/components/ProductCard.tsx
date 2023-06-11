import React, { ReactElement, createContext, useContext } from 'react'

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
    img?: string,
}

interface ProducbuttonsProps {
    productNumber: number,
    increasBy: (value: any) => void,
}

interface ProductContextProps {
    productNumber: number;
    increasBy: (value: any) => void;
    product: Product;
}

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductImg = ({ img = '' }) => {

    const { product } = useContext(ProductContext)

    let imgToShow = product.img;

    if (img) {
        imgToShow = img;
    } else if (!img && !product.img) {
        imgToShow = noImg;
    }

    return (
        <img className={styles.productImg} src={imgToShow} alt="No image" />
    );
}

export const ProductTitle = ({ title }: { title?: string }) => {

    const { product } = useContext(ProductContext)
    return (
        <span className={styles.productDescription}>{title ? title : product.title}</span>
    );
}

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