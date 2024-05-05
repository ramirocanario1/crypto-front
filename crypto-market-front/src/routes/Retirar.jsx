import React, { useEffect, useState } from 'react'
import InfoRetiro from '../components/retiro/InfoRetiro';
import TipoDeCambio from '../components/deposito/TipoDeCambio';
import FormRetiro from '../components/retiro/FormRetiro';
import Title from '../components/utils/Title';

export default function Retirar() {
    const [tipoDeCambio] = useState(1100);
    const [datosRetiro, setDatosRetiro] = useState({
      pesos: 0,
      usdt: 0,
    });
    const [showInfoRetiro, setShowInfoRetiro] = useState(false);
  
    useEffect(() => {
      if (datosRetiro.pesos > 0) {
        setShowInfoRetiro(true);
      }
    }, [datosRetiro]);
  
    return (
      <main className="p-2 flex flex-col gap-3">
        <Title>💵 Retirar</Title>
        {showInfoRetiro ? (
            <InfoRetiro datosRetiro={datosRetiro}/>
        ) : (
          <>
            <TipoDeCambio tipoDeCambio={tipoDeCambio} />
            <FormRetiro
              tipoDeCambio={tipoDeCambio}
              setDatosRetiro={setDatosRetiro}
            />
          </>
        )}
      </main>
    );
}
