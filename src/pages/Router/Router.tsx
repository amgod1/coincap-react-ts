import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "../../constants/routes"
import Layout from "../../components/Layout/Layout"
import CoinTable from "../CoinTable/CoinTable"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import CoinPage from "../CoinPage/CoinPage"

const Router = () => {
  const { coinState } = useCoinContext()

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
