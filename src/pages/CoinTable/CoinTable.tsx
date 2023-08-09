import { useEffect } from "react"
import Table from "../../components/Table/Table"
import { useCoinContext } from "../../context/CoinContext/CoinContext"

const CoinTable = () => {
  const { state, setAllCoins } = useCoinContext()

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch("https://api.coincap.io/v2/assets")
      const data = await response.json()
      console.log(data.data)
      setAllCoins(data.data)
    }

    fetchCoins()
    console.log(state)
  }, [])

  return <Table />
}

export default CoinTable
