import AppContext from "./context/AppContext"
import Router from "./pages/Router/Router"
import Modal from "./components/Modal/Modal"

const App = () => {
  return (
    <AppContext>
      <Router />
      <Modal />
    </AppContext>
  )
}

export default App
