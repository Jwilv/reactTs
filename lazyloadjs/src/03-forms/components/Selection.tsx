import { useField } from 'formik'
import React from 'react'

interface Props {
    label: string
    name: string
    [x:string]: any
}

export const Selection = ({ label, ...props} : Props) => {

    const [ field, meta] = useField(props)
    return (
        <>
            <label htmlFor={ props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </>
    )
}
