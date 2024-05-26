

import React from 'react'

export default function Resaltado({children}) {
  return (
    <span className='bg-gray-700 px-1 text-white'>
      {children}
    </span>
  )
}
