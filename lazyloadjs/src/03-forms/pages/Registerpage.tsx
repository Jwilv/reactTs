

import React, { FormEvent } from 'react'
import "../styles/styles.css"
import { useForm } from '../hooks/useForm'

const Registerpage = () => {

    const fields = {
        name: 'juan',
        email: 'juanTest@gmail.com',
        password: '123456',
        repeatPassword: '123456',
    }

    const { formData, changeField, reset, isValidEmail} = useForm(fields)

    const { name, email, password, repeatPassword } = formData

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={changeField}
                    className={`${ !isValidEmail(email) && 'has-error'}`}
                />
                {
                    !isValidEmail(email) && <span>el email es requerido</span>
                }

                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={changeField}
                    className={`${ name.trim().length <= 3  && 'has-error'}`}
                />
                {
                    name.trim().length <= 3  && <span>the name is invalid </span>
                }

                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={changeField}
                    className={`${ password.trim().length < 6  && 'has-error'}`}
                />
                {
                    password.trim().length < 6  && <span>The password must be at least 6 characters</span>
                }

                <input
                    type="password"
                    placeholder='Repeat Password'
                    name='repeatPassword'
                    value={repeatPassword}
                    onChange={changeField}
                    className={`${ repeatPassword !== password  && 'has-error'}`}
                />
                {
                    repeatPassword !== password  && <span>invalid password</span>
                }

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default Registerpage