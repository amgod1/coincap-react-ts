import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "../../constants/routes"
import Layout from "../../components/Layout/Layout"
import CoinTable from "../CoinTable/CoinTable"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import { useWalletContext } from "../../context/WalletContext/WalletContext"
import CoinPage from "../CoinPage/CoinPage"
import { useEffect } from "react"
import useFetchAllCoins from "../../hooks/useFetchAllCoins"

const Router = () => {
  const { coins, error } = useFetchAllCoins()
  const { coinState, setAllCoins } = useCoinContext()
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
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Layout />}>
          <Route index element={<CoinTable />} />
          {coinState.allCoins.map((coin) => (
            <Route key={coin.id} path={`/${coin.id}`} element={<CoinPage />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
