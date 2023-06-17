import { ReactElement } from "react";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImgProps } from "../components/ProductImg";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
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

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): React.JSX.Element;
    Title: ({ title, className }: ProductTitleProps) => React.JSX.Element
    Img: ({ img, className }: ProductImgProps) => React.JSX.Element
    Buttons: () => React.JSX.Element;
}