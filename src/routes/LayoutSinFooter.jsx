import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';

export default function LayoutSinFooter() {
  return (
    <div className='bg-gray-950 flex justify-center'>
      <div className='min-h-screen flex flex-col max-w-lg flex-grow'>
        <Header showLogout={false} />
        <main className="flex-grow bg-gray-600 text-white w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
