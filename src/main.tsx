import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./normalize.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
