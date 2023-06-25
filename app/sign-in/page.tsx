'use client'
import React from 'react'
import {signIn} from "next-auth/react"
import { getAuthSession } from '@/lib/authConfig'
const page = async () => {
    const handleClick=()=>{
        signIn("google")
    }
    const session= await getAuthSession()
    console.log(session)
  return (
    <div className= "w-full pt-36">
        <button onClick={handleClick}>Google</button>
        
    </div>
    
  )
}

export default page