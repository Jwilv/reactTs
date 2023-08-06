import React from "react"
import FormJson from "../data/custom-form.json"
import { Form, Formik } from "formik"
import { Selection, TextInput } from "../components"
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {}

const requiredFields: { [key: string]: any } = {}


for (const input of FormJson) {
  initialValues[input.name] = input.value

  if(!input.validations) continue ;

  let schema = Yup.string()

  for (const rule of input.validations) {
    if( rule.type === 'required') schema = schema.required("este campo es requerido") ;

    if(rule.type === "minlength"){
      schema = schema.min( (rule as any).value || 2, `min ${ (rule as any).value || 2} caracteres`)
    }

    if(rule.type === "email"){
      schema = schema.email("email invalido")
    }
    
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
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
