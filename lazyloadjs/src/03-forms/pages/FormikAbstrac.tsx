import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'

import React from 'react'
import "../styles/styles.css"
import { TextInput } from '../components/TextInput'
import { Selection } from '../components/Selection'
import { Checkbox } from '../components/Checkbox'


const FormikAbstractation = () => {

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(15, 'max 15')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(15, 'max 15')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        terms: Yup.boolean().oneOf([true], 'Required'),
        job: Yup.string().notOneOf(['intern'], 'invalid').required('Required')
    }

    )

    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "", terms: false, job: '' }}
            onSubmit={(values) => { console.log(values) }}
            validationSchema={validationSchema}
        >
            {
                () => (
                    <Form noValidate>
                        <TextInput label='First Name' name='firstName' />

                        <TextInput label='Last Name' name='lastName' />

                        <Selection label='job' name='job' >
                            <option value="">--Select--</option>
                            <option value="developer">developer</option>
                            <option value="designer">designer</option>
                            <option value="manager">manager</option>
                            <option value="other">other</option>
                            <option value="intern">intern</option>
                        </Selection>

                        <TextInput label='Email' name='email' type='email' />

                        <Checkbox name='terms' label='terminos y condiciones' />

                        <button type='submit'>Create</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikAbstractation