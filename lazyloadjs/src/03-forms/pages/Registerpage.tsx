

import React from 'react'
import "../styles/styles.css"

const Registerpage = () => {
    return (
        <div>
            <form >

                <input
                    type="email"
                    placeholder='Email'
                />

                <input
                    type="text"
                    placeholder='Name'
                />

                <input
                    type="password"
                    placeholder='Password'
                />

                <input
                    type="password"
                    placeholder='Repeat Password'
                />

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default Registerpage