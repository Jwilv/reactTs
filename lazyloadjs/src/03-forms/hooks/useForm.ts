import { ChangeEvent, useState } from "react"

interface Fields  {
    name?: string,
    email?: string,
    password?: string,
    repeatPassword?: string,
}


export const useForm = (initialValue : Fields) => {
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