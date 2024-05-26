import React from 'react'
import Subtitle from '../utils/Subtitle'
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";

export default function Sentimientos({cripto}) {
  return (
    <section className='flex flex-col gap-2'>
      <Subtitle>Sentimientos</Subtitle>
      <div className='bg-gray-700 shadow-md rounded p-4 flex justify-evenly'>

        <div className='flex flex-col items-center'>
          <div className='flex text-3xl items-center text-green-500'>
            <IoMdArrowRoundUp className='text-green-500 text-3xl' />
            <span>{cripto.sentiment_up.toFixed(0)}%</span>
          </div>
          <span className='text-gray-300'>Subirá</span>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex text-3xl items-center text-red-500'>
            <IoMdArrowRoundDown className='text-red-500 text-3xl' />
            <span>{cripto.sentiment_down.toFixed(0)}%</span>
          </div>
          <span className='text-gray-300'>Bajará</span>
        </div>

      </div>
    </section>
  )
}
