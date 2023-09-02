"use client"

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


const Privatelayout = ({children}) => {

    const {currentUser} = useAuth()
    const router = useRouter()

    useEffect(()=>{

        const user = JSON.parse(sessionStorage.getItem('user'))
        if(!user) {
            router.replace('/login')
        }
    }, [currentUser])
  return (
    <section>{children}</section>
  )
}

export default Privatelayout