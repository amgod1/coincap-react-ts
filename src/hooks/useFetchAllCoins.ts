import { useEffect, useState } from "react"
import Coin from "../interfaces/Coin.interface"

const useFetchAllCoins = (count: number, currentLength: number = 10) => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | unknown | null>(null)

  useEffect(() => {
    if (!count || count === currentLength) return

    const fetchCoins = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://api.coincap.io/v2/assets?limit=${count}`
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
  }, [count])

  return { coins, loading, error }
}

export default useFetchAllCoins
