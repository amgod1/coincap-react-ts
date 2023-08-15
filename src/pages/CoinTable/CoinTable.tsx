import { useEffect } from "react"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import Table from "../../components/Table/Table"
import Pagination from "../../components/Pagination/Pagination"
import { useWalletContext } from "../../context/WalletContext/WalletContext"
import useFetchCoins from "../../hooks/useFetchCoins"

const CoinTable = () => {
  const { coins, error } = useFetchCoins()
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
  }, [coins, error])

  return (
    <>
      <Table />
      <Pagination />
    </>
  )
}

export default CoinTable
