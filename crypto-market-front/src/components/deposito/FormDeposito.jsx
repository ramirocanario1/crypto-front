import React, { useLayoutEffect, useState } from "react";
import Section from "./Section";

import { MdOutlineArrowDownward } from "react-icons/md";

export default function FormDeposito({tipoDeCambio, setDatosDeposito}) {

  const [pesos, setPesos] = useState(null)
  const [dolares, setDolares] = useState(null)
  const [submitDisabled, setSubmitDisabled] = useState(true)

  useLayoutEffect(() => {
    if (pesos > 0) {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true)
    }
  }, [pesos])

  const handleChange = (e) => {
    setPesos(e.target.value)
    const usdt = e.target.value / tipoDeCambio
    setDolares(usdt.toFixed(2))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Deposito confirmado")
    setDatosDeposito({
      pesos: pesos,
      usdt: dolares
    })
  }

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col">
          <label>Cantidad de pesos a depositar</label>
          <input
            type="number"
            className="rounded shadow-md py-2 px-1 text-black"
            value={pesos}
            onChange={handleChange}
          />
        </fieldset>

        <div className="flex justify-center py-2">
          <MdOutlineArrowDownward className="w-8 h-8" />
        </div>

        <fieldset className="flex flex-col">
          <label>Vas a recibir</label>
          <input
            type="number"
            disabled
            className="rounded shadow-md py-2 px-1 text-black"
            value={dolares}
          />
        </fieldset>

        <button
          className="bg-green-500 w-full p-2 rounded-md mt-5 disabled:bg-gray-600"
          disabled={submitDisabled}
        >
          Siguiente
        </button>
      </form>
    </Section>
  );
}
