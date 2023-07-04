import { CSSProperties, ReactElement } from "react";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImgProps } from "../components/ProductImg";
import { ProductButtonsComponentProps } from "../components/ProductButtons";

export interface ProductCardProps {
    count ?: number;
    product: Product;
    // children?: ReactElement | ReactElement[];
    children?: ( message: string) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args : ProductChangeArgs)=> void;
    initialValues?: InitialValues ; 
}

export interface InitialValues{
    counter: number;
    countMax: number;
}

export interface ProductChangeArgs{
    count : number;
    product : Product;
}
export interface Product {
    id: string,
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
    countMax?: number;
    isMaxReached : boolean
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): React.JSX.Element;
    Title: (Props: ProductTitleProps) => React.JSX.Element
    Img: (Props: ProductImgProps) => React.JSX.Element
    Buttons: (Props: ProductButtonsComponentProps) => React.JSX.Element;
}