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

    const reset = () => {
        setFormData(initialValue)
    }

    return { formData, changeField, reset }
}