import React from 'react'
import Subtitle from '../utils/Subtitle'
import Description from '../utils/Description'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

export default function Operar({ cripto }) {
  return (
    <section className='flex flex-col gap-2'>
      <Subtitle>{cripto ? "Operar" : <Skeleton width={100} />}</Subtitle>

      {cripto ? <Description>
        Comprá o vendé {cripto?.info.name} en tiempo real.
      </Description> : <Skeleton count={0.8} />}
        

      {cripto ? 
      <div className='flex items-center gap-2'>
        <Link to={`/comprar/${cripto?.info.id}`} className='bg-green-500 text-white w-full p-3 rounded shadow-md text-center'>Comprar</Link>
        <Link to={`/vender/${cripto?.info.id}`} className='bg-red-500 text-white w-full p-3 rounded shadow-md text-center'>Vender</Link>
      </div>
      :
      <div className='flex items-center gap-2'>
        <Skeleton height={50} containerClassName="flex-1"/>
        <Skeleton height={50} containerClassName="flex-1"/>
      </div>
      }
    </section>
  )
}
