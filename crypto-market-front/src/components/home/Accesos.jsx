import HomeSection from "./HomeSection";

import { FaBitcoin } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdGetApp } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";

export default function Accesos() {
    return (
      <HomeSection title={'📲 Accesos'} description={'Accede a las principales funciones de la app.'}>
        <nav className='flex gap-3 overflow-x-auto p-2'>
          <Acceso icon={<FaBitcoin className='w-full h-full text-orange-500'/>} label='Comprar'/>
          <Acceso icon={<MdGetApp className='w-full h-full text-green-600'/>} label='Depositar'/>
          <Acceso icon={<FaChartPie className='w-full h-full text-white'/> } label='Portafolio'/>
          <Acceso icon={<BsGraphUpArrow className='w-full h-full text-cyan-400'/>} label='Tendencias'/>
          <Acceso icon={<FaWallet className='w-full h-full text-amber-800'/>} label='Billetera'/>
          <Acceso icon={<FaUserAlt className='w-full h-full text-yellow-400'/>} label='Perfil'/>
          <Acceso icon={<FaCog className='w-full h-full text-gray-500'/>} label='Ajustes'/>
        </nav>
      </HomeSection>
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