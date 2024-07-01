

import React from 'react'
import Section from '../deposito/Section'
import Skeleton from 'react-loading-skeleton'

export default function PrecioCripto({ cripto, precio }) {
  return (
    <Section className='flex items-center justify-center gap-5'>
      <div className="flex flex-col items-center text-white gap-1">
        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${cripto?.info.id}.png`} alt={cripto?.info.symbol} className="w-8" />
        <span>{cripto?.info.symbol}</span>
      </div>
      <span className="text-4xl">=</span>
      {precio ? <span className="text-4xl">
        ${precio} <span className='text-sm'>USDT</span>
      </span> : <Skeleton width={150} height={40} />}
    </Section>
  )
}
