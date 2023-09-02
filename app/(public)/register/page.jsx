"use client"
import { registrationFormFields } from '@/constants/constants'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import React from 'react'
import GoogleIcon from '@/public/icons/GoogleIcon'
import { useAuth } from '@/context/AuthContext'

const Register = () => {
  const initialValues = {firstName:'', lastName:'', email:'', password:''}
    const {createUser, signupProvider} = useAuth()

  const handleSubmit = (values, actions)=>{
    const displayName = `${values.firstName} ${values.lastName}`
    createUser(values.email, values.password, displayName)
  }
  return (

    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className='flex flex-col items-stretch'>
        <h2 className="text-red-main text-2xl font-[500] text-center mb-3">
          Sign Up
        </h2>
        {registrationFormFields.map(field=>(
          <div className='relative z-0 mb-6' key={field.name} >
              <Field type={field.type} name={field.name} className="peer" id={field.name} placeholder=" "/>
              <label htmlFor={field.name}>{field.label}</label>
          </div>
        ))}

        <div className="flex justify-center">
          <Link href="/login" className='py-3 font-[0.75rem] cursor-pointer text-gray-500 hover:text-red-main transition-colors'> Sign In</Link>
        </div>

        <button className='btn-danger mb-5' type='submit'>
          Register
        </button>
        <button className='btn-danger flex items-center justify-between' type='button'
        onClick={()=>signupProvider()}
        >
          <span> Continue with Google</span>
          <GoogleIcon/>
        </button>

      </Form>

    </Formik>
  )
}

export default Register