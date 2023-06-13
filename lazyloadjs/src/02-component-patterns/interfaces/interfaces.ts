import { ReactElement } from "react";

export interface ProductCardProps {
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

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): React.JSX.Element;
    Title: ({ title }: { title?: string; }) => React.JSX.Element;
    Img: ({ img }: { img?: string }) => React.JSX.Element;
    Buttons: () => React.JSX.Element;
}