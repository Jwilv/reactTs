import { lazy, LazyExoticComponent } from "react";


type JSXElement = () => JSX.Element

interface Router {
    path: string,
    Component: LazyExoticComponent<JSXElement> | JSXElement,
    name: string,
}

// const LazyPage = lazy( () => import('../01-lazyload/pages/LazyPage'));
// const LazyPage2 = lazy( () => import('../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy( () => import('../01-lazyload/pages/LazyPage3'));



export const routes = [
    {
        path: '/lazyload',
        Component: lazy(() => import('../01-lazyload/layouts/LazyLayout')),
        name: 'lazyLoading page '
    },
    // {
    //     path: '/lazy2',
    //     Component: LazyPage2,
    //     name: 'lazypage-2'
    // },
    // {
    //     path: '/lazy3',
    //     Component: LazyPage3,
    //     name: 'lazypage-3'
    // },
]