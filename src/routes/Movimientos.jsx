import React from 'react'
import useGetMovimientos from '../components/movimientos/useGetMovimientos'
import Movimiento from '../components/movimientos/Movimiento'
import { SkeletonTheme } from 'react-loading-skeleton'
import MovimientoSkeleton from '../components/movimientos/MovimientoSkeleton'

export default function Movimientos() {

  const {movimientos, isLoading, isError} = useGetMovimientos()


  if (isLoading) {
    return (
      <>
      {[...Array(10)].map((_, index) => (
        <SkeletonTheme key={index} baseColor='#252c35' highlightColor="#4b5563">
        <MovimientoSkeleton />
        </SkeletonTheme>
      ))}
      </>
    )
  }
  
  return (
    <main className='flex flex-col'>
        {movimientos.map((movimiento) => (
            <Movimiento movimiento={movimiento} key={movimiento.id} />
        ))}
        <p className='text-sm m-3 text-center text-gray-400'>-- No hay más movimientos --</p>
    </main>
  )
}