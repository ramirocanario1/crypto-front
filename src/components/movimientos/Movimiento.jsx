import React, { useEffect, useLayoutEffect, useState } from 'react'

import { PiHandDepositBold } from "react-icons/pi";
import { PiHandWithdrawBold } from "react-icons/pi";
import { PiHandCoins } from "react-icons/pi";

export default function Movimiento({ movimiento }) {

  const [icon, setIcon] = useState("");
  const [monto, setMonto] = useState("");

  useEffect(() => {
    if (movimiento.tipo === "DEPOSITO") {
      setIcon(<PiHandDepositBold className='w-6 h-6' />);
    } else if (movimiento.tipo === "RETIRO") {
      setIcon(<PiHandWithdrawBold className='w-6 h-6' />);
    } else if (movimiento.tipo === "COMPRA" || movimiento.tipo === "VENTA") {
      setIcon(<PiHandCoins className='w-6 h-6' />);
    }
  }, [movimiento.tipo])

  useLayoutEffect(() => {
    const monto = movimiento.monto

    if (movimiento.tipo === 'RETIRO' || movimiento.tipo === 'COMPRA') {
      setMonto(`-${monto}`)
    } else {
      setMonto(`+${monto}`)
    }


  }, [movimiento.monto])

  return (
    <div className='flex items-center gap-3 border-b-[1px] border-t-[1px] border-gray-700 shadow-md p-2'>
      <div className={`grid place-content-center`}>
        <div className={`rounded-full p-2 ${['RETIRO', 'COMPRA'].includes(movimiento.tipo) ? 'bg-red-500' : 'bg-green-600'}`}>
          {icon}
        </div>
      </div>
      <div className='flex flex-col'>
        <span className='text-sm text-gray-400'>{movimiento.tipo}</span>
        <span className='text-xl'>{monto} USDT</span>
      </div>
      <div className='ml-auto'>
        <span className='text-gray-400'>
          {new Date(movimiento.fecha).toLocaleDateString("es-ES", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
          })} {" "}
          {new Date(movimiento.fecha).toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </span>
      </div>
    </div>
  )
}
