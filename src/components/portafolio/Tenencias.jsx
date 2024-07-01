import React from 'react'
import usePortafolio from './usePortafolio'
import { Link } from 'react-router-dom';
import Variacion from '../utils/Variacion';
import Title from '../utils/Title';
import Description from '../utils/Description';
import Skeleton from 'react-loading-skeleton';

export default function Tenencias() {

  const { portfolio, isLoading } = usePortafolio()

  return (
    <section className='p-3 flex flex-col gap-3'>
        <header>
          <Title>Portafolio</Title>
          <Description>
            A continuación tenés el listado de todas tus criptomonedas y su valor actualizado.
          </Description>
          <Description>
            Acá podés ver la variación de cada cripto en las últimas 24hs, el total en USD y el saldo actual de cada una.
          </Description>
        </header>
      <ListaTenencias portfolio={portfolio} isLoading={isLoading} />
    </section>
  )
}

function ListaTenencias({ portfolio, isLoading }) {

  if (!isLoading && portfolio.length === 0) {
    return (
      <div className='flex flex-col items-center gap-3 mt-5'>
        <p className='text-gray-400'>¡Aún no tenés ninguna cripto en tu portafolio!</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-2'>
      {portfolio.map((tenencia, index) => (
        <Tenencia key={index} tenencia={tenencia} />
      ))}
    </div>
  );
}

function Tenencia({ tenencia }) {

  const { cripto, saldo, total } = tenencia

  return (
    <>
      {!cripto ? <Skeleton height={70} /> :
        <Link to={`/cripto/${cripto?.id}`} state={{ precios: cripto }} className='bg-gray-700 flex items-center shadow-md rounded hover:bg-gray-900 transition-colors pr-3'>
          <picture>
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${cripto?.id}.png`} alt={cripto?.name} className='w-20 p-3' />
          </picture>
          <div className='grid grid-cols-4 w-full'>
            <div className='flex flex-col items-start'>
              <h3 className='text-white font-normal'>{cripto?.name}</h3>
              <span className='text-gray-400'>{cripto?.symbol}</span>
            </div>
            <div className='grid place-content-center'>
              <Variacion variacion={cripto?.quote?.USD?.percent_change_24h} />
            </div>
            <div className='grid place-content-center'>
              <h3 className='text-lg'>${total}</h3>
            </div>
            <div className='grid place-content-center'>
              <h3 className='text-lg'>{saldo}</h3>
            </div>
          </div>
        </Link>
      }
    </>
  );
}
