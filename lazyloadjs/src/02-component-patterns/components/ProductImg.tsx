import React from 'react'
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'


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