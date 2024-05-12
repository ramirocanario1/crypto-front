import React, { useState } from "react";
import Section from "./Section";
import Title from "../utils/Title";
import Description from "../utils/Description";
import { MdOutlineArrowDownward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useDeposito from "./useDeposito";
import getCurrentUser from "../utils/getCurrentUser";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import FieldError from "../utils/FieldError";
import FieldSuccess from "../utils/FieldSuccess";

export default function InfoDeposito({ datosDeposito }) {

  // Animar
  const [animateRef ] = useAutoAnimate()

  const navigate = useNavigate();
  const { depositar, isError, isLoading, isSuccess } = useDeposito();

  // Se ejecuta para efectuar el deposito
  const handleClick = async () => {    
    const userId = getCurrentUser().id;
    const success = depositar(userId, datosDeposito.usdt); 
    
    if (success) {
      // Demorar 4 segundos
      await new Promise((resolve) => setTimeout(resolve, 6000));
      navigate("/");
    }
  }


  return (
    <div ref={animateRef} className="flex flex-col gap-3">
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
      {isError && (
        <FieldError>
          Hubo un error al procesar la transferencia. Por favor, intenta de nuevo.
        </FieldError>
      )}
      {isSuccess && (
        <FieldSuccess>
          La transferencia fue realizada con éxito. Puedes ver los fondos en tu cuenta.
        </FieldSuccess>
      )}
      <button className="bg-green-500 text-white py-2 px-4 rounded-md mt-3 text-center w-full" onClick={handleClick}>
        {isLoading ? "Comprobando transferencia..." : "Confirmar depósito"}
      </button>
    </div>
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
