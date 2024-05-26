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
          <span>{cripto.ranking}</span>
        </Container>

        <Container>
          <h3 className='text-white'>Capitalización</h3>
          <span>{agregarPuntos(cripto.capitalizacion)}</span>
        </Container>

        <Container>
          <h3 className='text-white text-center'>Unidades máximas</h3>
          <span>{agregarPuntos(cripto.total)}</span>
        </Container>

        <Container>
          <h3 className='text-white text-center'>Unidades en circulación</h3>
          <span>{agregarPuntos(cripto.circulacion)}</span>
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