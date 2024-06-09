import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Layout() {
  return (
    <div className='bg-gray-950 grid place-content-center'>
      <div className="min-h-screen flex flex-col max-w-2xl min-w-96">
        <Header />
        <main className="flex-grow bg-gray-600 text-white">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
