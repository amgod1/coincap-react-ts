import AddCoinModal from "./components/AddCoinModal/AddCoinModal"
import AppRouter from "./components/AppRouter/AppRouter"
import AppContext from "./context/AppContext"

const App = () => {
  return (
    <AppContext>
      <AppRouter />
      <AddCoinModal />
    </AppContext>
  )
}

export default App
