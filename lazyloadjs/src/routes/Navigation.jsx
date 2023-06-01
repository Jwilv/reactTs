import React from 'react'
import { Route, Routes } from 'react-router'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <>
            <div className="main-layout">
                
                <nav>
                    <img src={logo} alt='logo' />
                    <ul>
                        <li><Link to={'/'} className='nav-active'>home</Link></li>
                        <li><Link to={'/about'} className='nav-active'>about</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={<h1>home</h1>} />
                    <Route path='/about' element={<h1>about</h1>} />
                </Routes>

            </div>

        </>
    )
}
