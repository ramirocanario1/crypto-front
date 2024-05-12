import React from 'react'
import HomeSection from './HomeSection'
import usdt from '../../assets/usdt.svg'
import { Link } from 'react-router-dom'

export default function DolarCripto() {
  return (
    <HomeSection 
        title={'💸 Dolar Cripto'} 
        description={'Este valor se toma como referencia al momento de realizar un depósito o retiro de dinero.'}>
        <div className='flex items-center justify-center gap-5 mt-2'>
            <div className='flex flex-col items-center text-white gap-1'>
                <img src={usdt} alt="USDT" className='w-8'/>
                <span>USDT</span>
            </div>
            <span className='text-4xl'>=</span>
            <span className='text-4xl'>$1100</span>
        </div>
      <div className='flex gap-2 justify-center mt-3'>
        <Link to='depositar' className='w-32 py-2 bg-green-500 hover:bg-green-700 transition-colors text-white font-medium rounded-md text-center'>Depositar</Link>
        <Link to='retirar' className='w-32 py-2 bg-red-500 hover:bg-red-700 transition-colors text-white font-medium rounded-md text-center'>Retirar</Link>
      </div>
    </HomeSection>
  )
}
