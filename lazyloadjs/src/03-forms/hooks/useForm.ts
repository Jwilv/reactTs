import { ChangeEvent, useState } from "react"


export const useForm = (initialValue = {}) => {
    const [values, setValues] = useState(initialValue);

    const changeField = (event: ChangeEvent<HTMLInputElement>) => {

        const { target } = event

        setValues({
            ...values,
            [target.name]: target.value
        })

    }

    const reset = ()=>{
        setValues(initialValue)
    }

    return { values, changeField, reset }
}