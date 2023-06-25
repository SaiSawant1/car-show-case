import React from 'react'
import Image from 'next/image'
import { User } from 'next-auth'
import Link from 'next/link'
interface AvatarProps{
    user:Pick<User,"name"|"image">
}
const Avatar:React.FC<AvatarProps> = ({user}) => {
  return (
    <Link href="/">
        {user.image?(
            <Image src={user.image} width={40} height={40} className=' max-w-fit relative max-h-fit rounded-full ' alt='avatar'/>
        ):(
            <div>
                no image
            </div>
        )}
    </Link>
  )
}

export default Avatar