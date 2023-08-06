import { useField } from 'formik'
import React from 'react'

interface Props {
    label: string
    name: string
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    [x:string]: any
}

export const TextInput = ({ label, ...props} : Props) => {

    const [ field, meta] = useField(props)
    return (
        <>
            <label htmlFor={ props.id || props.name}>{label}</label>
            <input type={ props.type || 'text'} {...props} {...field} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </>
    )
}
