

import React, { FormEvent } from 'react'
import "../styles/styles.css"
import { useForm } from '../hooks/useForm'

const FormikBasic = () => {

    return (
        <div>
            <form>
                
                <label>First name </label>
                <input
                    type="text"
                    placeholder='firstName'
                    name='firstName'
                />
                <span>first name is required</span>

                <label > last name </label>
                <input
                    type="text"
                    placeholder='lastName'
                    name='lastName'
                />
                <span>last name is required</span>

                <label > email</label>
                <input
                    type="email"
                    placeholder='emial'
                    name='email'
                />
                <span>email is required</span>
                <span>check for an valid email format</span>

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default Registerpage