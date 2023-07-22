import { FormikErrors, useFormik } from 'formik'

import React from 'react'
import "../styles/styles.css"

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}


const FormikBasic = () => {

    const validate = ({ firstName, lastName, email }: FormValues ) => {
        
        const errors: FormikErrors<FormValues> = {};

        if ( !firstName ) {
            errors.firstName = 'Required';
        } else if( firstName.length >= 15 ) {
            errors.firstName = 'Must be 15 characters or less';
        }

        

        if ( !lastName ) {
            errors.lastName = 'Required';
        } else if( lastName.length >= 10 ) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( email )) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const { handleChange, values, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
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
                    onBlur={ handleBlur }
                    onChange={handleChange}
                    value={values.firstName}
                />
               { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label > last name </label>
                <input
                    type="text"
                    placeholder='lastName'
                    name='lastName'
                    onBlur={ handleBlur }
                    onChange={handleChange}
                    value={values.lastName}
                />
                { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label > email</label>
                <input
                    type="email"
                    placeholder='emial'
                    name='email'
                    onBlur={ handleBlur }
                    onChange={handleChange}
                    value={values.email}
                />
                { touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default FormikBasic