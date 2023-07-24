import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'

import React from 'react'
import "../styles/styles.css"


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
                    <Form>

                        <label htmlFor="fistName">First Name</label>
                        <Field type="text" name="firstName" />
                        <ErrorMessage name="firstName" component='span' />

                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name="lastName" />
                        <ErrorMessage name="lastName" component='span' />

                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component='span' />

                        <label ><Field type="checkbox" name="terms" />terminos</label>
                        <ErrorMessage name="terms" component='span' />

                        <label htmlFor="job">Select job</label>
                        <Field as='select' name="job" >
                            <option value="">--Select--</option>
                            <option value="developer">developer</option>
                            <option value="designer">designer</option>
                            <option value="manager">manager</option>
                            <option value="other">other</option>
                            <option value="intern">intern</option>
                        </Field>
                        <ErrorMessage name="job" component='span' />

                        <button type='submit'>Create</button>

                    </Form>
                )
            }
        </Formik>
    )
}

export default FormikAbstractation