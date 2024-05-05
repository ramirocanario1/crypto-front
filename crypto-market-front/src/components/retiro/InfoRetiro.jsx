import React, { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Section from "../deposito/Section";
import Title from "../utils/Title";
import Description from "../utils/Description";
import { MdOutlineArrowDownward } from "react-icons/md";

export default function InfoRetiro({ datosRetiro }) {
  // Hook para redirigir
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [aliasValido, setAliasValido] = useState(false);

  const handleClick = () => {
    // Simular demora de 2 segundos
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Section className="flex flex-col gap-2 p-4">
        <Description>
          Los retiros son realizados mediante transferencia bancaria. A continuacion introduce tu alias para que realicemos la transferencia.
        </Description>
        <FormAlias setAliasValido={setAliasValido}/>
      </Section>
      <Section>
        <DatosRetiro datosRetiro={datosRetiro} />
      </Section>
      <Description>
        Una vez realizado el retiro, los USDT seran descontados de tu cuenta y los pesos seran transferidos a tu cuenta bancaria.
      </Description>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md mt-3 text-center disabled:bg-gray-700"
        onClick={handleClick}
        disabled={!aliasValido || isLoading}
      >
        {isLoading ? "Realizando transferencia..." : "Retirar"}
      </button>
    </>
  );
}

function FormAlias({setAliasValido}) {

  const [alias, setAlias] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setAliasValido(isSuccess)
  }, [isSuccess])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular retraso de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  }

  const handleChange = (e) => {
    setAlias(e.target.value);
    setIsSuccess(false);  
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex flex-col">
        <label>Alias de tu cuenta bancaria</label>
        <input
          type="text"
          className="rounded shadow-md py-2 px-1 text-black"
          value={alias}
          onChange={handleChange}
        />
      </fieldset>

      <button
        className="bg-green-500 w-full p-2 rounded-md mt-5 disabled:bg-gray-600"
        disabled={isLoading || isSuccess || alias.length === 0}
      >
        {isLoading ? "Validando alias..." : "Validar"}
      </button>
        {isSuccess && <p className="text-green-500 text-center mt-1">Alias validado correctamente</p>}
    </form>
  )
}

function DatosRetiro({ datosRetiro }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-200">Vas a retirar</p>
      <p className="text-3xl font-semibold">{datosRetiro.usdt} USDT</p>
      <MdOutlineArrowDownward className="my-2 w-8 h-8" />
      <p className=" text-gray-200">Vas a recibir</p>
      <p className="text-3xl font-semibold">${datosRetiro.pesos}</p>
    </div>
  );
}
