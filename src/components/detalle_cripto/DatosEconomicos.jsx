import React from 'react'
import Subtitle from '../utils/Subtitle'
import agregarPuntos from '../utils/agregarPuntos'

export default function DatosEconomicos({ cripto }) {
  return (
    <section className='flex flex-col gap-2'>
      <Subtitle>Datos económicos</Subtitle>
      <div className='flex flex-col gap-2'>

        <Container>
          <h3 className='text-white text-center'>Puesto</h3>
          <span>{cripto.cmc_rank}</span>
        </Container>

        <Container>
          <h3 className='text-white text-center'>Dominancia</h3>
          <span>{cripto.quote.USD.market_cap_dominance.toFixed(1)}%</span>
        </Container>

        <Container>
          <h3 className='text-white'>Capitalización</h3>
          <span>${agregarPuntos(cripto.quote.USD.market_cap)}</span>
        </Container>

        <Container>
          <h3 className='text-white'>Volumen (24hs)</h3>
          <span>${agregarPuntos(cripto.quote.USD.volume_24h)}</span>
        </Container>

        <Container>
          <h3 className='text-white text-center'>Unidades máximas</h3>
          <span>{cripto.max_supply ? agregarPuntos(cripto.max_supply) : 'Sin límite'}</span>
        </Container>

        <Container>
          <h3 className='text-white text-center'>Unidades en circulación</h3>
          <span>{agregarPuntos(cripto.circulating_supply)}</span>
        </Container>
      </div>
    </section>
  )
}

function Container({ children }) {
  return (
    <div className='bg-gray-700 p-3 rounded shadow-md flex items-center justify-between'>
      {children}
    </div>
  )
}