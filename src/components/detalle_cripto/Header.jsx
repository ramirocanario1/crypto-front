

import React from 'react'
import Title from '../utils/Title'
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export default function Header({ cripto }) {
  return (
    <header className='flex justify-between items-center'>
      <div className='flex items-center gap-1'>
        <picture className='m-2'>
          {cripto?.logo ? <img src={cripto?.logo} alt={cripto?.name} className='w-8' /> : <Skeleton width={30} height={30} circle />}
        </picture>
        <Title>{cripto?.name || <Skeleton width={150} />}</Title>
        {cripto?.symbol && <span className='text-gray-300'>({cripto?.symbol})</span>}
      </div>

      {cripto?.urls ? <Link to={cripto?.urls.website[0]} className='flex items-center gap-1 transition-all hover:border-b-2 border-gray-300'>
        <span className='text-gray-300 text-sm'>Sitio oficial</span>
        <FiExternalLink className='' />
      </Link> : <Skeleton width={50} />}

    </header>
  )
}
