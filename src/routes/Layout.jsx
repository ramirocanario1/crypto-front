import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col max-w-2xl">
      <Header />
      <main className="flex-grow bg-gray-600 text-white">
        <Outlet />
      </main>
      <Footer />
    </div> 
  )
}
