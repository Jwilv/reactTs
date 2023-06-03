import React from 'react'
import { Route, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'
import { LazyPage, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import { routes } from './routes'

export const Navigation = () => {
    return (
        <>
            <div className="main-layout">

                <nav>
                    <ul>
                        {
                            routes.map(({ name, path }) => {
                                return (<li key={path}> <NavLink to={path}>{name}</NavLink> </li>)
                            })
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(({ path, Component }) => {
                            return <Route path={path} element={<Component />} />
                        })
                    }

                    
                </Routes>

            </div>

        </>
    )
}
