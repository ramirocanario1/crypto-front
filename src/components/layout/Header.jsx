import React, { useEffect, useState } from 'react'
import { MdLogout } from "react-icons/md";
import { TbReceiptBitcoin } from "react-icons/tb";
import { Link } from 'react-router-dom';

export default function Header() {


  const [showLogout, setShowLogout] = useState(false)

  useEffect(() => {
    // Verifico si el usuario está logueado
    const user = localStorage.getItem('user')
    if (user) {
      setShowLogout(true)
    }
  }, [])



  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <header className='bg-green-600 p-2 shadow-md flex justify-center'>
      <div className='flex justify-between w-full px-5 text-white'>
        <h1 className='text-white flex gap-2 items-center'>
          <TbReceiptBitcoin className='w-8 h-8 text-green-800' /> <Link to='/'>Crypto Market</Link>
        </h1>
        {showLogout &&
          <button onClick={handleLogout}>
            <MdLogout className='w-6 h-6 text-green-800' />
          </button>
        }
      </div>
    </header>
  )
}
