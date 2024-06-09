import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function MovimientoSkeleton() {
  return (
    <div className='flex items-center gap-3 border-b-[1px] border-t-[1px] border-gray-700 shadow-md p-2'>
      <div className={`grid place-content-center`}>
        <div>
          <Skeleton circle width={40} height={40}/>
        </div>
      </div>
      <div className='flex flex-col'>
        <span className='text-sm text-gray-400'><Skeleton width={60} /></span>
        <span className='text-xl'><Skeleton width={100} height={20} /></span>
      </div>
      <div className='ml-auto'>
        <span className='text-gray-400'>
          <Skeleton width={100} />
        </span>
      </div>
    </div>
  )
}
