import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "../../constants/routes"
import Layout from "../../components/Layout/Layout"
import CoinTable from "../CoinTable/CoinTable"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Layout />}>
          <Route index element={<CoinTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
