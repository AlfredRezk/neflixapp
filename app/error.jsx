"use client"

import { useEffect } from "react"

const Error = ({error}) => {

  useEffect(()=>{
    console.error(error)
  }, [error])

  return (
    <div className="mt-64 text-center">
        <h1 className="text-red-main text-2xl"> Something went wrong! </h1>
    </div>
  )
}

export default Error