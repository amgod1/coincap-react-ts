import { useEffect, useState } from "react"
import Coin from "../interfaces/Coin.interface"

const useFetchCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [error, setError] = useState<Error | unknown | null>(null)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets")
        if (!response.ok) {
          throw new Error("Failed to fetch coins data")
        }
        const data = await response.json()
        setCoins(data.data)
      } catch (error: Error | unknown) {
        setError(error)
      }
    }

    fetchCoins()
  }, [])

  return { coins, error }
}

export default useFetchCoins
