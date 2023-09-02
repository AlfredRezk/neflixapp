"use client";
import { loginFormFields } from "@/constants/constants";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import GoogleIcon from "@/public/icons/GoogleIcon";
import { useAuth } from "@/context/AuthContext";
const Login = () => {
  const initialValues = { email: "", password: "" };
  const { signIn, signupProvider, forgotPassword } = useAuth();

  const handleSubmit = (values, actions) => {
    signIn(values.email, values.password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className="flex flex-col items-stretch">
          <h2 className="text-red-main text-2xl font-[500] text-center mb-3">
            Sign In
          </h2>
          {loginFormFields.map((field) => (
            <div className="relative z-0 mb-6" key={field.name}>
              <Field
                type={field.type}
                name={field.name}
                className="peer"
                id={field.name}
                placeholder=" "
              />
              <label htmlFor={field.name}>{field.label}</label>
            </div>
          ))}

          <div className="flex justify-between">
            <span
              className="py-3 font-[0.75rem] cursor-pointer text-gray-500 hover:text-red-main transition-colors"
              onClick={() => forgotPassword(values.email)}
            >
              Forgot Password
            </span>

            <Link
              href="/register"
              className="py-3 font-[0.75rem] cursor-pointer text-gray-500 hover:text-red-main transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <button className="btn-danger mb-5" type="submit">
            Login
          </button>
          <button
            className="btn-danger flex items-center justify-between"
            type="button"
            onClick={() => signupProvider()}
          >
            <span> Continue with Google</span>
            <GoogleIcon />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
