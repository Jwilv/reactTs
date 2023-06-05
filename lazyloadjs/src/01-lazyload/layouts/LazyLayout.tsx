import React from 'react'
import { Navigation } from '../router/Navigation'
import { Outlet } from 'react-router'

const LazyLayout = () => {

    return (
        <>
            <h1>LazyLoafing Page </h1>
            <Navigation />
            <Outlet />
        </>
    )
}

export default LazyLayout