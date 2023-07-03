import { useEffect, useRef, useState } from 'react';
import { InitialValues, Product, ProductChangeArgs } from '../interfaces/interfaces';

interface ReturnProduct {
    productNumber: number,
    increasBy:  (value: any) => void
}

interface Props{
    value?: number;
    onChange?: (args: ProductChangeArgs) => void
    product : Product;
    initialValues?: InitialValues;
}

export const useProduct = ({ value = 0, onChange, product, initialValues} : Props): ReturnProduct => {

    const [productNumber, setProcuctNumber] = useState<number>( initialValues?.counter || value)

    const isControlled = useRef(!!onChange)

    const increasBy = (value) => {

        if (isControlled) {
            return onChange!({ count:value, product})
        }

        const newValue = Math.max( productNumber +  value, 0)
        setProcuctNumber( newValue )

        onChange && onChange({ count : newValue, product})
    }

    useEffect(() => {
        setProcuctNumber(value)
    }, [value])
    

    return{productNumber,increasBy}
}