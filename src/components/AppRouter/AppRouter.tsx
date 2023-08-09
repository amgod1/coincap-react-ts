import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../Layout/Layout"
import CoinTable from "../../pages/CoinTable/CoinTable"
import { AppRoutes } from "../../constants/routes"

const AppRouter = () => {
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

export default AppRouter
