import { useEffect, useRef, useState } from 'react';
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

    const isControlled = useRef(!!onchange)

    const increasBy = (value) => {

        if (isControlled) {
            return onChange!({ count:value, product})
        }

        const newValue = Math.max( productNumber +  value, 0)
        setProcuctNumber( newValue )

        onChange && onChange({ count : newValue, product})
    }

    useEffect(() => {
        setProcuctNumber(initialState)
    }, [initialState])
    

    return{productNumber,increasBy}
}