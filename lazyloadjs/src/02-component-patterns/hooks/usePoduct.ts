import { useEffect, useRef, useState } from 'react';
import { InitialValues, Product, ProductChangeArgs } from '../interfaces/interfaces';

interface ReturnProduct {
    productNumber: number,
    increasBy:  (value: any) => void;
    isMaxReached : boolean
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

    const isMounted = useRef(false)

    const increasBy = (value) => {

        if (isControlled.current) {
            return onChange!({ count:value, product})
        }

        let newValue = Math.max( productNumber +  value, 0)
        if( initialValues?.countMax ){
            newValue = Math.min( newValue, initialValues.countMax)
        }

        setProcuctNumber( newValue )

        onChange && onChange({ count : newValue, product})
    }   

    useEffect(() => {

        if( !isMounted.current ) return ; 
        
        if( isControlled.current ){
            setProcuctNumber(value); 
        }

    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, [])

    const isMaxReached = !!initialValues?.countMax && productNumber === initialValues.countMax
    

    return{productNumber,increasBy,isMaxReached}
}