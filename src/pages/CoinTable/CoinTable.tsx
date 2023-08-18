import { useEffect } from "react"
import Table from "../../components/Table/Table"
import Pagination from "../../components/Pagination/Pagination"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import useFetchAllCoins from "../../hooks/useFetchAllCoins"
import Loader from "../../components/Loader/Loader"

const CoinTable = () => {
  const { coinState, setAllCoins } = useCoinContext()

  const { coins, loading, error } = useFetchAllCoins(
    coinState?.loaded,
    coinState?.allCoins?.length
  )
  // const { updateWalletPrice, hideAddCoinModal, hideWalletModal } =
  //   useWalletContext()

  useEffect(() => {
    // hideAddCoinModal()
    // hideWalletModal()

    if (coins.length) {
      setAllCoins(coins)
      // updateWalletPrice(coins)
    }

    if (error) {
      console.error(error)
    }
  }, [coins])

  return (
    <>
      {loading ? <Loader /> : <Table />}
      <Pagination />
    </>
  )
}

export default CoinTable
