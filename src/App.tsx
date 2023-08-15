import AppContext from "./context/AppContext"
import AddCoinModal from "./components/AddCoinModal/AddCoinModal"
import WalletModal from "./components/WalletModal/WalletModal"
import Router from "./pages/Router/Router"

const App = () => {
  return (
    <AppContext>
      <Router />
      <AddCoinModal />
      <WalletModal />
    </AppContext>
  )
}

export default App
