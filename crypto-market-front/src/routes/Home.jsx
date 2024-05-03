import React from 'react'

import { FaBitcoin } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { MdGetApp } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";


export default function Home() {
  return (
    <main>
      <h1 className='text-2xl font-medium'>Bienvenido, Ramiro</h1>
      <Accesos />
    </main>
  ) 
}

function Accesos() {
  return (
    <section className='bg-gray-700 py-2'>
      <h2 className='text-xl font-semibold text-white ml-2'>Accesos</h2>
      <nav className='flex gap-3 overflow-x-auto p-2'>
        <Acceso icon={<FaBitcoin className='w-full h-full text-orange-500'/>} label='Comprar'/>
        <Acceso icon={<MdGetApp className='w-full h-full text-green-600'/>} label='Depositar'/>
        <Acceso icon={<FaChartPie className='w-full h-full text-white'/> } label='Portafolio'/>
        <Acceso icon={<BsGraphUpArrow className='w-full h-full text-cyan-400'/>} label='Tendencias'/>
        <Acceso icon={<FaWallet className='w-full h-full text-amber-800'/>} label='Billetera'/>
        <Acceso icon={<FaUserAlt className='w-full h-full text-yellow-400'/>} label='Perfil'/>
        <Acceso icon={<FaCog className='w-full h-full text-gray-500'/>} label='Ajustes'/>
      </nav>
    </section>
  )
}

function Acceso({icon, label=''}) {
  return (
    <button className={`bg-gray-800 p-4 rounded-md h-20 w-20 flex gap-1 flex-col items-center justify-center flex-shrink-0`}>
      {icon}
      <span className='text-white text-sm'>{label}</span>
    </button>
  )
}