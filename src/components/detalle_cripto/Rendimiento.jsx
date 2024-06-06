import React from 'react'
import Variacion from '../utils/Variacion'
import Subtitle from '../utils/Subtitle'
import Description from '../utils/Description'

export default function Rendimiento({ cripto }) {

  return (
    <section className='flex flex-col gap-2'>
      <Subtitle>Rendimiento</Subtitle>

      <Description>
        Acá tenés un resumen del rendimiento de {cripto.name} en distintos periodos de tiempo.
      </Description>

      <div className='grid grid-cols-4 gap-2'>

        <div className='bg-gray-700 p-3 rounded shadow-md flex flex-col items-center'>
          <h3 className='text-white text-center text-sm'>24 horas</h3>
          <Variacion variacion={cripto.quote.USD.percent_change_24h} />
        </div>

        <div className='bg-gray-700 p-3 rounded shadow-md flex flex-col items-center'>
          <h3 className='text-white text-center text-sm'>7 días</h3>
          <Variacion variacion={cripto.quote.USD.percent_change_7d} />
        </div>

        <div className='bg-gray-700 p-3 rounded shadow-md flex flex-col items-center'>
          <h3 className='text-white text-center text-sm'>30 días</h3>
          <Variacion variacion={cripto.quote.USD.percent_change_30d} />
        </div>

        <div className='bg-gray-700 p-3 rounded shadow-md flex flex-col items-center'>
          <h3 className='text-white text-center text-sm'>90 días</h3>
          <Variacion variacion={cripto.quote.USD.percent_change_90d} />
        </div>

      </div>
    </section>
  )
}
