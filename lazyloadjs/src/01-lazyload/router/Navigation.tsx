import React from 'react'
import { Route, Routes } from 'react-router'
import { Link, useLocation } from 'react-router-dom'


export const Navigation = () => {

    const { pathname } = useLocation()

    return (
        <>
            <h2>lazy layout pages</h2>
            <ul>
                <li> <Link to={`la`}>lazy page 1</Link> </li>
            </ul>

            <Routes>
                <Route path={`/lazyload/la`} element={<h1>aca toy</h1>} />
            </Routes>
        </>
    )
}
