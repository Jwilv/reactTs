import { FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup'

import React from 'react'
import "../styles/styles.css"


const FormikComponents = () => {

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(15, 'max 15')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(15, 'max 15')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required')

    })

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema
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
                    {...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label > last name </label>
                <input
                    type="text"
                    placeholder='lastName'
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label > email</label>
                <input
                    type="email"
                    placeholder='emial'
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default FormikComponents