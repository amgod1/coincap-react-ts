import { useEffect } from "react"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import Table from "../../components/Table/Table"
import Pagination from "../../components/Pagination/Pagination"

const CoinTable = () => {
  const { setAllCoins } = useCoinContext()

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch("https://api.coincap.io/v2/assets")
      const data = await response.json()
      setAllCoins(data.data)
    }

    fetchCoins()
  }, [])

  return (
    <>
      <Table />
      <Pagination />
    </>
  )
}

export default CoinTable
