import React, { useState } from "react";
import Section from "./Section";
import Title from "../utils/Title";
import Description from "../utils/Description";
import { MdOutlineArrowDownward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function InfoDeposito({ datosDeposito }) {

  // Hook para redirigir
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    // Simular demora de 2 segundos
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  }


  return (
    <>
      <Section>
        <Title>Información de depósito</Title>
        <Description>
          Para agregar dinero a la cuenta, se debe realizar una transferencia a
          la cuenta bancaria de Crypto Market
        </Description>
        <DatosBancarios />
      </Section>
      <Section>
        <DatosDeposito datosDeposito={datosDeposito} />
      </Section>
      <Description>
        Una vez realizada la transferencia, puedes confirmar el deposito para
        que los fondos se vean reflejados en tu cuenta.
      </Description>
      <button className="bg-green-500 text-white py-2 px-4 rounded-md mt-3 text-center" onClick={handleClick}>
        {isLoading ? "Comprobando transferencia..." : "Confirmar depósito"}
      </button>
    </>
  );
}

function DatosDeposito({ datosDeposito }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-200">Dinero a transferir</p>
      <p className="text-3xl font-semibold">${datosDeposito.pesos}</p>
      <MdOutlineArrowDownward className="my-2 w-8 h-8" />
      <p className=" text-gray-200">Vas a recibir</p>
      <p className="text-3xl font-semibold">{datosDeposito.usdt} USDT</p>
    </div>
  );
}

function DatosBancarios() {
  return (
    <div className="p-3 border-dashed border-4 rounded-md border-gray-600 mt-3">
      <h3 className="font-bold">🏦 Datos bancarios</h3>
      <p>
        <span className="text-gray-300">Alias: </span>crypto.market
      </p>
      <p>
        <span className="text-gray-300">CBU: </span>1234567891234567891234
      </p>
      <p>
        <span className="text-gray-300">CUIT: </span>30-12345678-0
      </p>
    </div>
  );
}
