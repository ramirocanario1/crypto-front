import React from 'react'
import useGetMovimientos from '../components/movimientos/useGetMovimientos'
import Movimiento from '../components/movimientos/Movimiento'

export default function Movimientos() {

  const {movimientos, isLoading, isError} = useGetMovimientos()
  
  return (
    <main className='flex flex-col'>
        {movimientos.map((movimiento) => (
            <Movimiento movimiento={movimiento} key={movimiento.id} />
        ))}
        <p className='text-sm m-3 text-center text-gray-400'>-- No hay más movimientos --</p>
    </main>
  )
}



