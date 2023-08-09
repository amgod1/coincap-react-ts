import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../Layout/Layout"
import CoinTable from "../../pages/CoinTable/CoinTable"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoinTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
