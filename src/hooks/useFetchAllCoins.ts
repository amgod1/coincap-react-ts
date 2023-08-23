import { useEffect, useState } from "react"
import Coin from "../interfaces/Coin.interface"

const useFetchAllCoins = (count: number = 100, offset: number = 0) => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown | null>(null)

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://api.coincap.io/v2/assets?limit=${count}&offset=${offset}`
        )

        if (!response.ok) {
          throw new Error("Failed to fetch coins data")
        }

        const data = await response.json()
        setCoins(data.data)
        setLoading(false)
      } catch (error: Error | unknown) {
        setError(error)
      }
    }

    fetchCoins()
  }, [count, offset])

  return { coins, loading, error }
}

export default useFetchAllCoins
