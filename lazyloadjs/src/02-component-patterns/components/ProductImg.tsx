import React from 'react'
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface ProductImgProps {
    img?: string;
    className?: string;
}


export const ProductImg = ({ img, className }: ProductImgProps) => {

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
            src={imgToShow}
            alt="No image"
        />
    );
}