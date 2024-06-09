import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useGetCripto from '../components/detalle_cripto/useGetCripto'
import Header from '../components/detalle_cripto/Header'
import Rendimiento from '../components/detalle_cripto/Rendimiento'
import MaximoHistorico from '../components/detalle_cripto/MaximoHistorico'
import DatosEconomicos from '../components/detalle_cripto/DatosEconomicos'
import Sentimientos from '../components/detalle_cripto/Sentimientos'
import Operar from '../components/detalle_cripto/Operar'

export default function DetalleCripto() {

  const { id } = useParams()
  const precios = useLocation().state.precios
  const { isLoading, isError, data: cripto } = useGetCripto({ id, precios })

  return (
    <main className='p-2 flex flex-col gap-4'>

      <Header cripto={cripto?.info} />
      <Operar cripto={cripto} />
      <Rendimiento cripto={cripto?.precios} />
      {/* <MaximoHistorico cripto={cripto} /> */}
      <DatosEconomicos cripto={cripto?.precios} />
      {/* <Sentimientos cripto={cripto} /> */}
    </main>
  )
}
