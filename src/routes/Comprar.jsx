import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useOperarCripto from '../components/comprar/useOperarCripto'
import PrecioCripto from '../components/comprar/PrecioCripto'
import FormularioCompra from '../components/comprar/FormularioCompra'
import Saldo from '../components/comprar/Saldo'
import useGetSaldo from '../components/home/saldo/useGetSaldo'

export default function Comprar() {

  const { id } = useParams()
  const { precio, comprar } = useOperarCripto({cripto: id})
  const cripto = useLocation().state.cripto

  const { saldo, isLoading: isSaldoLoading } = useGetSaldo(false)

  console.log({saldo})

  return (
    <main className='flex flex-col gap-3'>
      <Saldo saldo={saldo} isLoading={isSaldoLoading} />
      <PrecioCripto cripto={cripto} precio={precio} />
      <FormularioCompra cripto={cripto} precio={precio} saldo={saldo} comprar={comprar} />
    </main>
  )
}
