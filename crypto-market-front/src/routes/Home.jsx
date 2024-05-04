import React from 'react'
import Accesos from '../components/home/Accesos'
import DolarCripto from '../components/home/DolarCripto'
import Title from '../components/utils/Title'

export default function Home() {
  return (
    <main className='flex flex-col gap-5'>
      <Title>Bienvenido, Ramiro</Title>
      <Accesos />
      <DolarCripto />
    </main>
  ) 
}
