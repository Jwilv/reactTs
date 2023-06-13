import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImg } from "./ProductImg";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImg } from "./ProductImg";
export { ProductTitle } from "./ProductTitle";

export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Img: ProductImg,
    Buttons: ProductButtons,

})