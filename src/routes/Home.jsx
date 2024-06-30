import React from 'react'
import Accesos from '../components/home/Accesos'
import DolarCripto from '../components/home/DolarCripto'
import Title from '../components/utils/Title'
import Criptomonedas from '../components/home/criptomonedas/Criptomonedas'
import Saldo from '../components/home/saldo/Saldo'
import Portafolio from '../components/home/Portafolio'

export default function Home() {

  const user = JSON.parse(localStorage.getItem('user')) // TODO: cambiar por funcion

  return (
    <main className='flex flex-col gap-5 pb-24 pt-4'>
      <Title className='pl-4'>👋 Bienvenido, {user.username}</Title>
      <Saldo />
      <DolarCripto />
      <Portafolio />
      <Criptomonedas />
    </main>
  ) 
}
