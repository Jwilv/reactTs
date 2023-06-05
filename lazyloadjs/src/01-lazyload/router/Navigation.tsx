import React from 'react'
import { Route, Routes } from 'react-router'
import { Link, useLocation } from 'react-router-dom'


export const Navigation = () => {

    return (
        <>
            <h2>lazy layout pages</h2>
            <ul>
                <li> <Link to={`la`}>lazy page 1</Link> </li>
            </ul>
        </>
    )
}
