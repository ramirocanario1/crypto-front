import React, { useState, useEffect, useLayoutEffect } from 'react'

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useGetSaldo from './useGetSaldo';

export default function Saldo() {

  const { saldo, isLoading, isError, isSuccess } = useGetSaldo()
  const [ocultarSaldo, setOcultarSaldo] = useState(false)

  const handleOcultarSaldo = () => {

    const newValue = !ocultarSaldo

    setOcultarSaldo(newValue)
    localStorage.setItem('ocultarSaldo', newValue)
  }

  useLayoutEffect(() => {
    const storedOcultarSaldo = localStorage.getItem('ocultarSaldo')
    if (storedOcultarSaldo) {
      setOcultarSaldo(JSON.parse(storedOcultarSaldo))
    }
  }, [])

  return (
    <section className='bg-gray-700 text-white flex flex-col gap-1 p-4'>
      <p>Tu saldo</p>

      <div className='flex justify-between'>
        <h1 className='text-3xl'>{ocultarSaldo ? '****' : saldo + ' USDT'}</h1>
        {
          ocultarSaldo ? <button onClick={handleOcultarSaldo}><FaEyeSlash className='w-6 h-6' /></button> : <button onClick={handleOcultarSaldo}><FaEye className='w-6 h-6' /></button>
        }
      </div>
    </section>
  )
}
