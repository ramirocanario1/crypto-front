import React, { useLayoutEffect, useState } from 'react'
import Section from '../deposito/Section'
import { MdOutlineArrowDownward } from 'react-icons/md'

export default function FormRetiro({tipoDeCambio, setDatosRetiro}) {
    const [pesos, setPesos] = useState(null)
    const [dolares, setDolares] = useState(null)
    const [submitDisabled, setSubmitDisabled] = useState(true)
  
    useLayoutEffect(() => {
      if (dolares > 0) {
        setSubmitDisabled(false)
      } else {
        setSubmitDisabled(true)
      }
    }, [dolares])
  
    const handleChange = (e) => {
      setDolares(e.target.value)
      const pesos = e.target.value * tipoDeCambio
      setPesos(pesos)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setDatosRetiro({
        pesos: pesos,
        usdt: dolares
      })
    }
  
    return (
      <Section>
        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col">
            <label>Cantidad de USDT a retirar</label>
            <input
              type="number"
              className="rounded shadow-md py-2 px-1 text-black"
              value={dolares}
              onChange={handleChange}
            />
          </fieldset>
  
          <div className="flex justify-center py-2">
            <MdOutlineArrowDownward className="w-8 h-8" />
          </div>
  
          <fieldset className="flex flex-col">
            <label>Vas a recibir</label>
            <input
              type="text"
              disabled
              className="rounded shadow-md py-2 px-1 text-black"
              value={pesos}
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
