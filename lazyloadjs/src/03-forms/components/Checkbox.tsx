import { useField, ErrorMessage } from 'formik';
import React from 'react'

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const Checkbox = ({ label, ...props }: Props) => {

    const [field, meta] = useField({...props, type : "checkbox"})
    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props}/>
                {label}
            </label>
            <ErrorMessage name={props.name} component='span' />
        </>
    )
}
 