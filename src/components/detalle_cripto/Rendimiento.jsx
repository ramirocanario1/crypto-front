import React from 'react'
import Variacion from '../utils/Variacion'
import Subtitle from '../utils/Subtitle'
import Description from '../utils/Description'
import Skeleton from 'react-loading-skeleton'

export default function Rendimiento({ cripto }) {

  return (
    <section className='flex flex-col gap-2'>

      { cripto ? <Subtitle>Rendimiento</Subtitle> : <Skeleton width={200}/>}

      {cripto ? <Description>
        Acá tenés un resumen del rendimiento de {cripto?.name || <Skeleton width={50} />} en distintos periodos de tiempo.
      </Description> : <Skeleton count={1.3}/>}
      

      <div className='grid grid-cols-4 gap-2'>

        <div className='bg-gray-700 p-3 rounded shadow-md flex flex-col items-center'>
          <h3 className='text-white text-center text-sm'>{cripto ? "24 horas" : <Skeleton width={50} />}</h3>
          {cripto?.quote?.USD?.percent_change_24h ? <Variacion variacion={cripto.quote.USD.percent_change_24h} /> : <Skeleton width={80}/>}
        </div>

        <div className='bg-gray-700 p-3 rounded shadow-md flex flex-col items-center'>
          <h3 className='text-white text-center text-sm'>{cripto ? "7 días" : <Skeleton width={50} />}</h3>
          {cripto?.quote?.USD?.percent_change_7d ? <Variacion variacion={cripto.quote.USD.percent_change_7d} /> : <Skeleton width={80}/>}
        </div>

        <div className='bg-gray-700 p-3 rounded shadow-md flex flex-col items-center'>
          <h3 className='text-white text-center text-sm'>{cripto ? "30 días" : <Skeleton width={50} />}</h3>
          {cripto?.quote?.USD?.percent_change_30d ? <Variacion variacion={cripto.quote.USD.percent_change_30d} /> : <Skeleton width={80}/>}
        </div>

        <div className='bg-gray-700 p-3 rounded shadow-md flex flex-col items-center'>
          <h3 className='text-white text-center text-sm'>{cripto ? "90 días" : <Skeleton width={50} />}</h3>
          {cripto?.quote?.USD?.percent_change_90d ? <Variacion variacion={cripto.quote.USD.percent_change_90d} /> : <Skeleton width={80}/>}
        </div>

      </div>
    </section>
  )
}
