import React, { useEffect, useState } from "react";
import Title from "../components/utils/Title";
import TipoDeCambio from "../components/deposito/TipoDeCambio";
import FormDeposito from "../components/deposito/FormDeposito";
import InfoDeposito from "../components/deposito/InfoDeposito";

export default function Depositar() {
  const [tipoDeCambio] = useState(1100);
  const [datosDeposito, setDatosDeposito] = useState({
    pesos: 0,
    usdt: 0,
  });
  const [showInfoDeposito, setShowInfoDeposito] = useState(false);

  useEffect(() => {
    if (datosDeposito.pesos > 0) {
      setShowInfoDeposito(true);
    }
  }, [datosDeposito]);

  return (
    <main className="p-2 flex flex-col gap-3">
      <Title>💵 Depositar</Title>
      {showInfoDeposito ? (
        <InfoDeposito datosDeposito={datosDeposito}/>
      ) : (
        <>
          <TipoDeCambio tipoDeCambio={tipoDeCambio} />
          <FormDeposito
            tipoDeCambio={tipoDeCambio}
            setDatosDeposito={setDatosDeposito}
          />
        </>
      )}
    </main>
  );
}
