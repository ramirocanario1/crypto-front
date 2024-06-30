import React from 'react'
import Saldo from '../components/home/saldo/Saldo'
import Tenencias from '../components/portafolio/Tenencias'

export default function Portafolio() {
  return (
    <div className='flex flex-col gap-3'>
      <Saldo />
      <Tenencias />
    </div>
  )
}
