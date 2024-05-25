import React, { useState, useEffect } from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";

export default function Variacion({ variacion, className }) {

  const [icon, setIcon] = useState('')
  const [valor, setValor] = useState('')
  const color = variacion > 0 ? 'text-green-500' : 'text-red-500'

  useEffect(() => {
    if (variacion > 0) {
      setIcon(<IoMdArrowRoundUp className='text-green-500' />)
      setValor(variacion.toFixed(2))
    } else {
      setIcon(<IoMdArrowRoundDown className='text-red-500' />)
      setValor((variacion * -1).toFixed(2))
    }
  }, [variacion])

  return (
    <span className={`flex items-center ${color} ${className}`}>
      {icon} {valor}%
    </span>
  )
}
