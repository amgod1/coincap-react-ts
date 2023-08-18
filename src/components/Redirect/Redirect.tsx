import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AppRoutes } from "../../constants/routes"

const Redirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(AppRoutes.Home)
  }, [navigate])

  return null
}

export default Redirect
