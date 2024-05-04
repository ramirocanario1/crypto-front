import usdt from '../../assets/usdt.svg'
import Section from './Section'

export default function TipoDeCambio({tipoDeCambio=0}) {
  return (
    <Section className='flex items-center justify-center gap-5'>
      <div className="flex flex-col items-center text-white gap-1">
        <img src={usdt} alt="USDT" className="w-8" />
        <span>USDT</span>
      </div>
      <span className="text-4xl">=</span>
      <span className="text-4xl">${tipoDeCambio}</span>
    </Section>
  );
}
