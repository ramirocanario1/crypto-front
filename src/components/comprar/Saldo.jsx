import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Section from '../deposito/Section'

export default function Saldo({ saldo, isLoading}) {
  return (
    <Section className='bg-gray-700 text-white flex flex-col gap-1 p-4 text-center'>
      <p>Tu saldo disponible para operar es</p>
      <p className='text-3xl'>
        {isLoading ? <Skeleton width={150} height={30} /> : saldo}
      </p>
    </Section>
  )
}
