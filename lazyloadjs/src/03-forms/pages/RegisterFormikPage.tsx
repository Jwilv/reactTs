

import React, { FormEvent } from 'react'
import "../styles/styles.css"
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { TextInput } from '../components';

const RegisterFormikPage = () => {

    const fields = {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    }

    const handleSubmit = (values) => {
        console.log(values)
    }

    const validationsFields = Yup.object({
        name: Yup.string()
            .min(2, 'too short')
            .max(15, 'too long')
            .required('required'),
        email: Yup.string()
            .email('invalid email')
            .required('required'),
        password: Yup.string()
            .min(6, 'min 6 characters')
            .max(15, 'max 15 characters')
            .required('required'),
        repeatPassword: Yup.string()
            .min(6, 'min 6 characters')
            .max(15, 'max 15 characters')
            .oneOf([Yup.ref('password')], 'passwords do not match')
            .required('required')

    })

    return (<Formik initialValues={fields} onSubmit={handleSubmit} validationSchema={validationsFields} >
        {
            ({handleReset}) =>(
                <Form noValidate>
                    <TextInput label='Name' name='name' />
                    <TextInput label='Email' name='email' type='email' />
                    <TextInput label='Password' name='password' type='password' />
                    <TextInput label='Repeat Password' name='repeatPassword' type='password' />
                    <button type='submit'>Create</button>
                    <button onClick={handleReset}>Reset</button>
                </Form>
            )
        }
    </Formik>

    )
}

export default RegisterFormikPage