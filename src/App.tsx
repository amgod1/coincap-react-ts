import AppRouter from "./components/AppRouter/AppRouter"
import { CoinContextProvider } from "./context/CoinContext/CoinContext"

const App = () => {
  return (
    <CoinContextProvider>
      <AppRouter />
    </CoinContextProvider>
  )
}

export default App
