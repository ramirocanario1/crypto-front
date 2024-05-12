import React from 'react'
import Accesos from '../components/home/Accesos'
import DolarCripto from '../components/home/DolarCripto'
import Title from '../components/utils/Title'

export default function Home() {

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <main className='flex flex-col gap-5'>
      <Title>Bienvenido, {user.username}</Title>
      <Accesos />
      <DolarCripto />
    </main>
  ) 
}
