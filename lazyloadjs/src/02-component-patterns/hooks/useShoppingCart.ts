import { useState } from "react";
import { Product } from "../interfaces/interfaces";


interface ProductInCart extends Product {
    count: number;
}

export const useShoppingCart = () => {

    const [ShoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const handleChangeProduct = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            const productCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

            if (Math.max(productCart.count + count, 0) > 0) {
                productCart.count += count;

                return {
                    ...oldShoppingCart,
                    [product.id]: productCart
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart

            return { ...rest }

        })
    }

    return {ShoppingCart, handleChangeProduct}
}