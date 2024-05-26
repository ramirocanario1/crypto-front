import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useGetCripto from '../components/detalle_cripto/useGetCripto'
import Title from '../components/utils/Title'
import Header from '../components/detalle_cripto/Header'
import Rendimiento from '../components/detalle_cripto/Rendimiento'
import MaximoHistorico from '../components/detalle_cripto/MaximoHistorico'
import DatosEconomicos from '../components/detalle_cripto/DatosEconomicos'
import Sentimientos from '../components/detalle_cripto/Sentimientos'

export default function DetalleCripto() {

  const { id } = useParams()
  const { isLoading, isError, data: cripto } = useGetCripto({ id })

  if (isLoading) return <p>Cargando...</p>

  if (isError) return <p>Ha ocurrido un error</p>

  console.log({cripto})

  return (
    <main className='p-2 flex flex-col gap-4'>

      <Header cripto={cripto} />
      <Rendimiento cripto={cripto} />
      <MaximoHistorico cripto={cripto} />
      <DatosEconomicos cripto={cripto} />
      <Sentimientos cripto={cripto} />
    </main>
  )
}
