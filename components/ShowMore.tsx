"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

const ShowMore = ({pageNumber,isNextPage}:{pageNumber:number,isNextPage:boolean}) => {
  const router=useRouter();
  const handleNavigation=()=>{
    const newLimit= (pageNumber+1)*8
      const newPageNumber=updateSearchParams("limit",newLimit.toString())
      router.push(newPageNumber)
  }
    return (
    <div className='w-full flex-center gap-5 mt-5'>
        { !isNextPage && (
            <CustomButton
            title='Show More'
            btnType='button'
            containerStyles='bg-primary-blue rounded-full text-white'
            handleClick={handleNavigation}
            />
        )}
        </div>
  )
}

export default ShowMore