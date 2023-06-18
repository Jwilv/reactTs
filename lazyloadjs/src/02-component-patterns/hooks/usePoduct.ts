import { useState } from 'react';
import { Product, ProductChangeArgs } from '../interfaces/interfaces';

interface ReturnProduct {
    productNumber: number,
    increasBy:  (value: any) => void
}

interface Props{
    initialState?: number;
    onChange?: (args: ProductChangeArgs) => void
    product : Product;
}

export const useProduct = ({ initialState = 0, onChange, product} : Props): ReturnProduct => {

    const [productNumber, setProcuctNumber] = useState<number>(initialState)

    const increasBy = (value) => {
        const newValue = Math.max( productNumber +  value, 0)
        setProcuctNumber( newValue )

        onChange && onChange({ count : newValue, product})
    }

    return{productNumber,increasBy}
}