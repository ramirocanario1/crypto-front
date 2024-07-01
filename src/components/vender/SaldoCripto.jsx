import React from 'react'
import Section from '../deposito/Section'
import Skeleton from 'react-loading-skeleton'

export default function SaldoCripto({ saldo, precio, cripto, isLoading }) {
  return (
    <Section className='bg-gray-700 text-white flex flex-col gap-1 p-4 text-center'>
      <p>Tu saldo disponible de {cripto.name} es</p>
      <p className='text-3xl'>
        {isLoading ? <Skeleton width={200} height={30} /> : saldo}
      </p>
    </Section>
  )
}
