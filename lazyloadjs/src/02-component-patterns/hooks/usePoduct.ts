import { useState } from 'react';

interface Product {
    productNumber: number,
    increasBy:  (value: any) => void
}

export const useProduct = (initialState = 0): Product => {

    const [productNumber, setProcuctNumber] = useState(initialState)

    const increasBy = (value) => {
        setProcuctNumber( prev => Math.max( prev +  value, 0) )
    }

    return{productNumber,increasBy}
}