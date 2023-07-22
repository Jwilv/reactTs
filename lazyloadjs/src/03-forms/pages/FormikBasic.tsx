import { useFormik } from 'formik'

import React from 'react'
import "../styles/styles.css"
import { InitialValues } from '../../02-component-patterns/interfaces/interfaces';
const FormikBasic = () => {

    const { handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div>
            <form 
            noValidate
            onSubmit={handleSubmit}
            >

                <label>First name </label>
                <input
                    type="text"
                    placeholder='firstName'
                    name='firstName'
                    onChange={handleChange}
                    value={values.firstName}
                />
                <span>first name is required</span>

                <label > last name </label>
                <input
                    type="text"
                    placeholder='lastName'
                    name='lastName'
                    onChange={handleChange}
                    value={values.lastName}
                />
                <span>last name is required</span>

                <label > email</label>
                <input
                    type="email"
                    placeholder='emial'
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                />
                <span>email is required</span>
                <span>check for an valid email format</span>

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default FormikBasic