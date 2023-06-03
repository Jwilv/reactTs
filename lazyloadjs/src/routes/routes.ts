import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXElement = ()=> JSX.Element

interface Router {
    path: string,
    Component: JSXElement,
    name: string,
}


export const routes = [
    {
        path: '/lazy',
        Component: LazyPage,
        name: 'lazypage'
    },
    {
        path: '/lazy2',
        Component: LazyPage2,
        name: 'lazypage-2'
    },
    {
        path: '/lazy3',
        Component: LazyPage3,
        name: 'lazypage-3'
    },
]