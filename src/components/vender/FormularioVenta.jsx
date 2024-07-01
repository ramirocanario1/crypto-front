import { useAutoAnimate } from '@formkit/auto-animate/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Section from '../deposito/Section'
import { MdOutlineArrowDownward } from 'react-icons/md'
import FieldSuccess from '../utils/FieldSuccess'
import FieldError from '../utils/FieldError'

export default function FormularioVenta({cripto, precio, saldo, vender}) {

  const [cantidadParaVender, setCantidadParaVender] = useState("")
  const [cantidadUsdt, setCantidadUsdt] = useState("")
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const navigate = useNavigate();
  const [animateRef] = useAutoAnimate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const success = await vender(cantidadParaVender)

    if (success) {
      setIsSuccess(true) 
      await new Promise((resolve) => setTimeout(resolve, 3000));
      navigate("/");
    } else {
      setIsError(true)
    }
  }

  const handleChange = (e) => {

    const cantidadCripto = parseFloat(e.target.value);
    const cantidadARecibir = (cantidadCripto * precio).toFixed(8)

    setCantidadParaVender(cantidadCripto || 0)
    setCantidadUsdt(cantidadCripto ? cantidadARecibir : 0)

    if (cantidadCripto < 0) {
      setSubmitDisabled(true)
      setCantidadUsdt(0)
      return
    }

    if (cantidadCripto <= saldo) {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true)
    }
  }


  return (
    <Section>
      <form onSubmit={handleSubmit} ref={animateRef}>
        <fieldset className="flex flex-col">
          <label>Cantidad de {cripto.info.name} que quiero vender</label>
          <input
            type="number"
            className="rounded shadow-md py-2 px-1 text-black"
            value={cantidadParaVender}
            onChange={handleChange}
            // min={0}
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
            value={`${cantidadUsdt ? cantidadUsdt : 0} USDT`}
          />
        </fieldset>

        <button
          className="bg-green-500 w-full p-2 rounded-md mt-5 disabled:bg-gray-600"
          disabled={submitDisabled}
        >
          {submitDisabled ? 'Saldo insuficiente' : 'Vender'}
        </button>
        {isSuccess && (
          <FieldSuccess>
            Venta realizada con éxito. Puedes ver los fondos en tu cuenta.
          </FieldSuccess>
        )}
        {isError && (
          <FieldError>
            Ocurrió un error al intentar vender. Por favor, intenta en otro momento.
          </FieldError>
        )}
      </form>
    </Section>
  )
}

