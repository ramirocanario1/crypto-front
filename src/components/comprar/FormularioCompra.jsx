import React, { useState } from 'react'
import Section from '../deposito/Section'
import { MdOutlineArrowDownward } from 'react-icons/md'

export default function FormularioCompra({cripto, precio, saldo, comprar}) {

  const [usdt, setUsdt] = useState("")
  const [cantidadCompra, setCantidadCompra] = useState("")
  const [submitDisabled, setSubmitDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    const success = comprar(cantidadCompra)

    if (success) {
      console.log("Compra realizada con éxito")
    } else {
      console.log("Error al realizar la compra")
    }
  }

  const handleChange = (e) => {
    const usdt = parseFloat(e.target.value);
    const cantidadCompra = (usdt / precio).toFixed(8)

    setUsdt(usdt || "")
    setCantidadCompra(usdt ? cantidadCompra : 0)

    if (usdt > 0 && usdt <= saldo) {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true)
    }
  }


  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col">
          <label>Cantidad de USDT que quiero gastar en {cripto?.info.name}</label>
          <input
            type="number"
            className="rounded shadow-md py-2 px-1 text-black"
            value={usdt}
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
            value={`${cantidadCompra ? cantidadCompra : 0} ${cripto?.info.symbol}`}
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
  )
}
