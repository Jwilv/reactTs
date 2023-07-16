

import React from 'react'
import "../styles/styles.css"
import { useForm } from '../hooks/useForm'

const Registerpage = () => {

    const fields = {
        name: 'juan',
        email: 'juanTest@gmail.com',
        password: '123456',
        repeatPassword: '123456',
    }

    const { formData, changeField, reset } = useForm(fields)

    const { name, email, password, repeatPassword } = formData

    return (
        <div>
            <form >

                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={changeField}
                />

                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={changeField}
                />

                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={changeField}
                />

                <input
                    type="password"
                    placeholder='Repeat Password'
                    name='repeatPassword'
                    value={repeatPassword}
                    onChange={changeField}
                />

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default Registerpage