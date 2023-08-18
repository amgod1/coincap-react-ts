import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "../../constants/routes"
import Layout from "../../components/Layout/Layout"
import CoinTable from "../CoinTable/CoinTable"
import CoinPage from "../CoinPage/CoinPage"
import Redirect from "../../components/Redirect/Redirect"
import { usePagesContext } from "../../context/PagesContext/PagesContext"

const Router = () => {
  const { pages } = usePagesContext()

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Layout />}>
          <Route index element={<CoinTable />} />
          {pages.map((coinId) => (
            <Route key={coinId} path={`/${coinId}`} element={<CoinPage />} />
          ))}
        </Route>
        <Route path="*" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
