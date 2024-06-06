

import React from 'react'
import Title from '../utils/Title'
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Header({ cripto }) {
  return (
    <header className='flex justify-between items-center'>
      <div className='flex items-center gap-1'>
        <picture className='m-2'>
          <img src={cripto.logo} alt={cripto.name} className='w-8' />
        </picture>
        <Title>{cripto.name}</Title>
        <span className='text-gray-300'>({cripto.symbol})</span>
      </div>

      <Link to={cripto.urls.website[0]} className='flex items-center gap-1 transition-all hover:border-b-2 border-gray-300'>
        <span className='text-gray-300 text-sm'>Sitio oficial</span>
        <FiExternalLink className=''/>
      </Link>
    </header>
  )
}
