import React, { useState, useLayoutEffect } from 'react'

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useGetSaldo from './useGetSaldo';

import { FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Saldo() {

  const { saldo, isLoading } = useGetSaldo()
  const [saldoMostrado, setSaldoMostrado] = useState('****')
  const [ocultarSaldo, setOcultarSaldo] = useState(true)

  const handleOcultarSaldo = () => {
    if (ocultarSaldo) {
      setSaldoMostrado(saldo)
      } else {
      setSaldoMostrado('****')
    }
    localStorage.setItem('ocultarSaldo', !ocultarSaldo)
    setOcultarSaldo(!ocultarSaldo)
  }

 useLayoutEffect(() => {
    if (ocultarSaldo) {
      setSaldoMostrado('****')
    } else {
      setSaldoMostrado(saldo)
    }
  }, [ocultarSaldo])

  // Oculto el saldo según las preferencias guardadas en localStorage
  useLayoutEffect(() => {
    const storedOcultarSaldo = localStorage.getItem('ocultarSaldo')
    if (storedOcultarSaldo) {
      const ocultar = JSON.parse(storedOcultarSaldo)
      setOcultarSaldo(ocultar)
    }
  }, [])

  useLayoutEffect(() => {
    if (ocultarSaldo) {
      setSaldoMostrado('****')
    } else {
      setSaldoMostrado(saldo)
    }
  }, [saldo])

  return (
    <section className='bg-gray-700 text-white flex flex-col gap-1 p-4'>
      <p>Tu saldo</p>
      <div className='flex justify-between'>
        <Link to='/movimientos' className='text-3xl'>
        <p>
            {isLoading ? <Skeleton width={150} height={30} /> : saldoMostrado}
          </p>
        </Link>
        {
          ocultarSaldo ?
            <button onClick={handleOcultarSaldo}><FaEyeSlash className='w-6 h-6' /></button>
            :
            <button onClick={handleOcultarSaldo}><FaEye className='w-6 h-6' /></button>
        }
      </div>
      <p className='text-sm flex items-center gap-1 text-gray-400'><FaInfoCircle className='w-3 h-3' /> Clickeá tu saldo para ver tus movimientos</p>
    </section>
  )
}
