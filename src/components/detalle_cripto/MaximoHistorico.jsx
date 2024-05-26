import React from 'react'
import Subtitle from '../utils/Subtitle'
import Description from '../utils/Description'

export default function MaximoHistorico({cripto}) {
  return (
    <section className='flex flex-col gap-2'>
      <Subtitle>
        Máximo histórico
      </Subtitle>
      <Description>
        El precio máximo de {cripto.nombre} fue de <span className='bg-gray-700 px-1 text-white'>${cripto.maximo_historico}</span> el día {cripto.maximo_historico_fecha}. Actualmente se encuentra a <span className='bg-gray-700 px-1 text-white'>{(cripto.maximo_historico_cambio * -1).toFixed(0)}%</span> de su máximo histórico.
      </Description>
    </section>
  )
}
