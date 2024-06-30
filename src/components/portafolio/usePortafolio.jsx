import { useEffect, useState } from "react"
import useGetCriptomonedas from "../home/criptomonedas/useGetCriptomonedas"
import useGetTenencias from "./useGetTenencias"


 
export default function usePortafolio() {
  const { tenencias, isTenenciasLoading, isTenenciasError } = useGetTenencias()
  const { data: criptos, isCriptosLoading, isCriptosError } = useGetCriptomonedas()

  const [portafolio, setPortafolio] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (tenencias && criptos) {
      const portfolio = tenencias.map(tenencia => {
        const cripto = criptos.find(cripto => {
          return cripto.id === parseInt(tenencia.cripto.simbolo)
        })
        return {
          // ...tenencia,
          saldo: tenencia.saldo.toFixed(8),
          total: parseFloat((tenencia.saldo * cripto?.quote.USD.price).toFixed(2)),
          cripto
        }
      })

      // Ordeno según cantidad en usd
      portfolio.sort((a, b) => b.total - a.total)

      console.log({portfolio})

      setPortafolio(portfolio)
      setIsLoading(false)
    }
  }, [tenencias, criptos])  

  return {portfolio: portafolio, isLoading}

}