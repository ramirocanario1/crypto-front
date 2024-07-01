import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useOperarCripto from '../components/comprar/useOperarCripto'
import SaldoCripto from '../components/vender/SaldoCripto'
import useGetSaldoCripto from '../components/vender/useGetSaldoCripto'
import PrecioCripto from '../components/comprar/PrecioCripto'
import FormularioVenta from '../components/vender/FormularioVenta'

export default function Vender() {

  const { id } = useParams()
  const { precio, vender } = useOperarCripto({cripto: id})
  const cripto = useLocation().state.cripto

  const { saldo, isSaldoLoading } = useGetSaldoCripto(id)

  return (
    <main className='flex flex-col gap-3'>
      <PrecioCripto cripto={cripto} precio={precio} />
      <SaldoCripto saldo={saldo} precio={precio} cripto={cripto.info} isLoading={isSaldoLoading} />
      <FormularioVenta cripto={cripto} precio={precio} saldo={saldo} vender={vender} />
    </main>
  )
}
