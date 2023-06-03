import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'
import { routes } from './routes'

export const Navigation = () => {
    return (
        <Suspense fallback={null}>
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
                            return <Route key={path} path={path} element={<Component />} />
                        })
                    }

                    
                </Routes>

            </div>

        </Suspense>
    )
}
