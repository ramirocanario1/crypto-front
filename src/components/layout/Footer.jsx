import React from 'react'
import { Link } from 'react-router-dom'
import { FaWallet } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0">
      <div className='bg-gray-800 py-4 shadow-md'>
        <div className='grid grid-cols-5'>
          
          <Acceso label='Movimientos' to='movimientos'>
            <FaMoneyBill1Wave className='w-6 h-6'/>
          </Acceso>
          <Acceso label='Portafolio' to='portafolio'>
            <FaWallet className='w-6 h-6'/>
          </Acceso>
          <Acceso label='Inicio' to='/'>
            <FaHome className='w-6 h-6'/>
          </Acceso>
          <Acceso label='Depositar' to='depositar'>
            <FaArrowDown className='w-6 h-6'/>
          </Acceso>
          <Acceso label='Retirar' to='retirar'>
            <FaArrowUp className='w-6 h-6'/>
          </Acceso>
        </div>
      </div>
    </footer>
  )
}

function Acceso({ to = '', children = '', label = '' }) {
  return (
    <Link to={to} className="flex flex-col items-center justify-center text-white hover:text-green-500 transition-colors">
      {children}
      <span className='text-xs'>
        {label}
      </span>
    </Link>
  )
}