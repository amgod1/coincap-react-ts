import { useEffect } from "react"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import Table from "../../components/Table/Table"
import Pagination from "../../components/Pagination/Pagination"
import { useWalletContext } from "../../context/WalletContext/WalletContext"
import useFetchAllCoins from "../../hooks/useFetchAllCoins"

const CoinTable = () => {
  const { coins, error } = useFetchAllCoins()
  const { setAllCoins } = useCoinContext()
  const { updateWalletPrice } = useWalletContext()

  useEffect(() => {
    if (coins.length) {
      setAllCoins(coins)
      updateWalletPrice(coins)
    }

    if (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <Table />
      <Pagination />
    </>
  )
}

export default CoinTable
