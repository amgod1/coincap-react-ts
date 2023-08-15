import { useEffect, useState } from "react"
import History from "../interfaces/History.interface"

const useFetchCoinHistory = (id: string) => {
  const [history, setHistory] = useState<History[]>([])
  const [error, setError] = useState<Error | unknown | null>(null)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
        )
        if (!response.ok) {
          throw new Error("Failed to fetch coin history")
        }
        const data = await response.json()
        setHistory(data.data)
      } catch (error: Error | unknown) {
        setError(error)
      }
    }

    fetchCoins()
  }, [])

  return { history, error }
}

export default useFetchCoinHistory
