import { useEffect } from "react"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import { useWalletContext } from "../../context/WalletContext/WalletContext"
import Table from "../../components/Table/Table"
import Pagination from "../../components/Pagination/Pagination"
import useFetchAllCoins from "../../hooks/useFetchAllCoins"
import Loader from "../../components/Loader/Loader"
import { usePagesContext } from "../../context/PagesContext/PagesContext"

const CoinTable = () => {
  const { setPages } = usePagesContext()
  const { coinState, setAllCoins } = useCoinContext()
  const { hideAddCoinModal, hideWalletModal } = useWalletContext()

  const { coins, loading, error } = useFetchAllCoins(
    coinState?.loaded,
    coinState?.allCoins?.length
  )

  useEffect(() => {
    if (coins.length) {
      setAllCoins(coins)
      setPages(coins)
    }

    if (error) {
      console.error(error)
    }
  }, [coins])

  useEffect(() => {
    hideAddCoinModal()
    hideWalletModal()
  }, [coinState])

  return (
    <>
      {loading ? <Loader /> : <Table />}
      <Pagination />
    </>
  )
}

export default CoinTable
