import React from "react"
import FormJson from "../data/custom-form.json"
import { Form, Formik } from "formik"
import { Selection, TextInput } from "../components"

const initialValues: { [key: string]: any } = {}

for (const input of FormJson) {
  initialValues[input.name] = input.value
}

export const DynamicForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ }) => (

          <Form noValidate autoComplete="off">
            {
              FormJson.map(({ name, type, label, placeholder, value, options }) => {

                if(type === 'select'){
                  return <Selection
                  label={label}
                  name={name}
                  key={name}
                  >
                    <option value="">Select option</option>
                    {
                      options?.map( option =>(
                        <option key={option.id} value={option.id}>{option.label}</option>
                      ))
                    }
                  </Selection>
                }

                return <TextInput
                  key={name}
                  name={name}
                  type={type as any}
                  label={label}
                  placeholder={placeholder}
                  value={value}
                />
              })
            }

            <button type="submit">create</button>

          </Form>
        )}
      </Formik>
    </div>
  )
}
