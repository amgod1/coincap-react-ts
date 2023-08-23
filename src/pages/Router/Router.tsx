import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "../../constants/routes"
import Layout from "../../components/Layout/Layout"
import CoinTable from "../CoinTable/CoinTable"
import CoinPage from "../CoinPage/CoinPage"
import useFetchAllCoins from "../../hooks/useFetchAllCoins"
import Loader from "../../components/Loader/Loader"

const Router = () => {
  const { coins, loading } = useFetchAllCoins(100)

  return (
    <BrowserRouter>
      <Routes>
        {loading ? (
          <Route path="*" element={<Loader />} />
        ) : (
          <Route path={AppRoutes.Home} element={<Layout />}>
            <Route index element={<CoinTable />} />
            {coins.map((coin) => (
              <Route
                key={coin.id}
                path={`/${coin.id}`}
                element={<CoinPage />}
              />
            ))}
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}
export default Router
