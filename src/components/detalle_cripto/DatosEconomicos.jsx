import React from 'react'
import Subtitle from '../utils/Subtitle'
import agregarPuntos from '../utils/agregarPuntos'
import Skeleton from 'react-loading-skeleton'

export default function DatosEconomicos({ cripto }) {

  const marketCapDominanceContent = cripto?.quote.USD.market_cap_dominance
    ? `${cripto.quote.USD.market_cap_dominance.toFixed(1)}%`
    : <Skeleton width={50} />;

  const capitalizacion = cripto?.quote.USD.market_cap ? '$' + agregarPuntos(cripto?.quote.USD.market_cap) : <Skeleton width={50} />;

  const volumen = cripto?.quote.USD.volume_24h ? '$' + agregarPuntos(cripto?.quote.USD.volume_24h) : <Skeleton width={50} />;

  let maxSupply;

  if (cripto) {
    maxSupply = cripto.max_supply ? agregarPuntos(cripto.max_supply) : 'Sin límite';
  } else {
    maxSupply = <Skeleton width={50} />
  }

  return (
    <section className='flex flex-col gap-2'>

      {cripto ? <Subtitle>Datos económicos</Subtitle> : <Skeleton width={200} />}


      <div className='flex flex-col gap-2'>

        <Container>
          <h3 className='text-white text-center'>{ cripto ? "Puesto" : <Skeleton width={80} />}</h3>
          <span>{cripto?.cmc_rank || <Skeleton width={20} />}</span>
        </Container>

        <Container>
          <h3 className='text-white text-center'>{ cripto ? "Dominancia" : <Skeleton width={90} />}</h3>
          <span>{marketCapDominanceContent}</span>
        </Container>

        <Container>
          <h3 className='text-white'>{ cripto ? "Capitalización" : <Skeleton width={100} />}</h3>
          <span>{capitalizacion}</span>
        </Container>

        <Container>
          <h3 className='text-white'>{ cripto ? "Volumen (24 hs)" : <Skeleton width={110} />}</h3>
          <span>{volumen}</span>
        </Container>

        <Container>
          <h3 className='text-white text-center'>{ cripto ? "Unidades máximas" : <Skeleton width={130} />}</h3>
          <span>{maxSupply}</span>
        </Container>

        <Container>
          <h3 className='text-white text-center'>{ cripto ? "Unidades en circulación" : <Skeleton width={150} />}</h3>
          <span>{cripto ? agregarPuntos(cripto.circulating_supply) : <Skeleton width={50} />}</span>
        </Container>
      </div>
    </section>
  )
}

function Container({ children }) {
  return (
    <div className='bg-gray-700 p-3 rounded shadow-md flex items-center justify-between'>
      {children}
    </div>
  )
}