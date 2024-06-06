import React, { useState, useLayoutEffect } from 'react'

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useGetSaldo from './useGetSaldo';

import { FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
        <Link to='/movimientos' className='text-3xl'>{ocultarSaldo ? '****' : saldo.toFixed(2) + ' USDT'}</Link>
        {
          ocultarSaldo ? 
            <button onClick={handleOcultarSaldo}><FaEyeSlash className='w-6 h-6' /></button> 
            : 
            <button onClick={handleOcultarSaldo}><FaEye className='w-6 h-6' /></button>
        }
      </div>
      <p className='text-sm flex items-center gap-1 text-gray-400'><FaInfoCircle className='w-3 h-3'/> Clickeá tu saldo para ver tus movimientos</p>
    </section>
  )
}
