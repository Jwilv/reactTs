import React, { CSSProperties } from 'react'
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface ProductImgProps {
    img?: string;
    className?: string;
    style?: CSSProperties ;
}


export const ProductImg = ({ img, className, style }: ProductImgProps) => {

    const { product } = useContext(ProductContext)

    let imgToShow = product.img;

    if (img) {
        imgToShow = img;
    } else if (!img && !product.img) {
        imgToShow = noImg;
    }

    return (
        <img
            className={`${styles.productImg} ${className}`}
            style={style}
            src={imgToShow}
            alt="No image"
        />
    );
}