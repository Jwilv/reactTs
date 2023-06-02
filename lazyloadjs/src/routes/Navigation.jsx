import React from 'react'
import { Route, Routes } from 'react-router'
import logo from '../assets/react.svg'
import { NavLink } from 'react-router-dom'
import { LazyPage, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

export const Navigation = () => {
    return (
        <>
            <div className="main-layout">
                
                <nav>
                    <img src={logo} alt='logo' />
                    <ul>
                        <li><NavLink to={'/lazy'} className='nav-active'>lazy</NavLink></li>
                        <li><NavLink to={'/lazy2'} className='nav-active'>lazy2</NavLink></li>
                        <li><NavLink to={'/lazy3'} className='nav-active'>lazy3</NavLink></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/lazy' element={<LazyPage />} />
                    <Route path='/lazy2' element={<LazyPage2 />} />
                    <Route path='/lazy3' element={<LazyPage3 />} />
                </Routes>

            </div>

        </>
    )
}
