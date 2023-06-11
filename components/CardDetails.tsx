import { CarProps } from '@/types'
import React from 'react'

interface CardDetailsProps {
    isOpen: boolean,
    closeModel: () => void,
    car: CarProps
}
const CardDetails = ({isOpen,closeModel,car}: CardDetailsProps) => {
  return (
    <div>CardDetails</div>
  )
}

export default CardDetails