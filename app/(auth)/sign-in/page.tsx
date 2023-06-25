import React from 'react'
import {signIn} from "next-auth/react"
import { getAuthSession } from '@/lib/authConfig'
import Link from 'next/link'
const page = async () => {
    const handleClick=()=>{
        signIn("google")
    }
    const session= await getAuthSession()
    console.log(session)
  return (
    <div className= "w-full pt-36">
        <Link href='/api/auth/signin'>google</Link>
        
    </div>
    
  )
}

export default page