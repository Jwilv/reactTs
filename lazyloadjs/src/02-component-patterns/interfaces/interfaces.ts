import { CSSProperties, ReactElement } from "react";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImgProps } from "../components/ProductImg";
import { ProductButtonsComponentProps } from "../components/ProductButtons";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
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
    Title: (Props: ProductTitleProps) => React.JSX.Element
    Img: (Props: ProductImgProps) => React.JSX.Element
    Buttons: (Props: ProductButtonsComponentProps) => React.JSX.Element;
}