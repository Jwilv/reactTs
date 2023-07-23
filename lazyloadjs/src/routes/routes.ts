import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import { StateInitialazer } from "../02-component-patterns/pages/stateinitialacer";
import Registerpage from "../03-forms/pages/Registerpage";
import FormikBasic from "../03-forms/pages/FormikBasic";
import FormYup from "../03-forms/pages/FormYup";
import FormikComponents from "../03-forms/pages/FormikComponents";


type JSXElement = () => JSX.Element

interface Route {
    path: string,
    Component: LazyExoticComponent<JSXElement> | JSXElement,
    name: string,
    children?:Route[],
}

// const LazyPage = lazy( () => import('../01-lazyload/pages/LazyPage'));
// const LazyPage2 = lazy( () => import('../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy( () => import('../01-lazyload/pages/LazyPage3'));



export const routes: Route[] = [
    {
        path: '/lazyload/*',
        Component: lazy(() => import('../01-lazyload/layouts/LazyLayout')),
        name: 'lazyLoading page ',
        children:[
            {
                path:'la',
                Component:NoLazy,
                name:'si se puede'
            }
        ]
    },
    {
        path: '/nolazy',
        Component: NoLazy,
        name: 'no lazy loading',
    },
    {
        path:'shopping',
        Component: ShoppingPage,
        name:'ShoppingPage'
    },
    {
        path:'stateinitialazer',
        Component:StateInitialazer,
        name:'state initialazer'
    },
    {
        path:'register',
        Component: Registerpage,
        name:'register'
    },
    {
        path:'formikbasic',
        Component: FormikBasic,
        name:'Formik basic'
    },
    {
        path:'formyup',
        Component: FormYup,
        name:'Form Yup'
    },
    {
        path:'formikcomponents',
        Component: FormikComponents,
        name:'Formik components'
    }
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