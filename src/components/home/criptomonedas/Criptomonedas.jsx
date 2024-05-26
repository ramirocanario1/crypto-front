import React from 'react'
import Title from '../../utils/Title'
import Description from '../../utils/Description'
import useGetCriptomonedas from './useGetCriptomonedas'
import Variacion from '../../utils/Variacion'
import { Link } from 'react-router-dom'

export default function Criptomonedas() {

  const { isLoading, isError, errorMessage, isSuccess, data } = useGetCriptomonedas()

  return (
    <section className='bg-gray-700 p-3 flex flex-col gap-3'>
      <Title>📈 Criptomonedas</Title>
      <Description>
        Accedé a las principales criptomonedas del mercado y mantenete informado sobre su cotización.
      </Description>

      {isLoading && <p>Cargando...</p>}

      {isError && <p>{errorMessage}</p>}

      {isSuccess && <ListaCriptos criptos={data.datos} />}
    </section>
  )
}

function ListaCriptos({ criptos }) {
  return (
    <div className='flex flex-col gap-2'>
      {criptos.map(cripto => (
        <Cripto key={cripto.id} cripto={cripto} />
      ))}
    </div>
  )
}

function Cripto({ cripto }) {
  return (
    <Link to={`/cripto/${cripto.id_api}`} className='bg-gray-800 flex items-center shadow-md rounded hover:bg-gray-900 transition-colors'>
      
      <picture>
        <img src={cripto.imagen} alt={cripto.nombre} className='w-20 p-3' />
      </picture>

      <div className='grid grid-cols-3 w-full '>

        <div className='flex flex-col items-start'>
          <h3 className='text-white font-normal'>{cripto.nombre}</h3>
          <span className='text-gray-500'>{cripto.simbolo.toUpperCase()}</span>
        </div>

        <div className='grid place-content-center'>
          <Variacion variacion={cripto.variacion}/>
        </div>

        <div className='grid place-content-center'>
          <h3 className='text-lg'>${cripto.precio}</h3>
        </div>

      </div>
    </Link>
  )
}

