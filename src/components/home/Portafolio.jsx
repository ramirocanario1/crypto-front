import React from 'react'
import HomeSection from './HomeSection'
import { Link } from 'react-router-dom'

export default function Portafolio() {
  return (
    <HomeSection 
        title={'💼 Portafolio'} 
        description={'Ingresá a tu portafolio para ver información sobre tus tenencias.'}>
      <div className='flex gap-2 justify-center mt-3'>
        <Link to='portafolio' className='w-56 py-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium rounded-md text-center'>Acceder a mi portafolio</Link>
      </div>
    </HomeSection>
  )
}
