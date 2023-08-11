import AddCoinModal from "./components/AddCoinModal/AddCoinModal"
import AppRouter from "./components/AppRouter/AppRouter"
import WalletModal from "./components/WalletModal/WalletModal"
import AppContext from "./context/AppContext"

const App = () => {
  return (
    <AppContext>
      <AppRouter />
      <AddCoinModal />
      <WalletModal />
    </AppContext>
  )
}

export default App
