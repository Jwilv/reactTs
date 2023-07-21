import { ChangeEvent, useState } from "react"

export const useForm = <T>(initialValue: T) => {
    const [formData, setFormData] = useState(initialValue);

    const changeField = (event: ChangeEvent<HTMLInputElement>) => {

        const { target } = event

        setFormData({
            ...formData,
            [target.name]: target.value
        })

    }

    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const reset = () => {
        setFormData(initialValue)
    }

    return {
        formData,
        changeField,
        reset,
        isValidEmail
    }
}