import { ReactElement } from "react";

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
}
export interface Product {
    id?: number,
    title: string,
    img?: string,
}

export interface ProducbuttonsProps {
    productNumber: number,
    increasBy: (value: any) => void,
}

export interface ProductContextProps {
    productNumber: number;
    increasBy: (value: any) => void;
    product: Product;
}