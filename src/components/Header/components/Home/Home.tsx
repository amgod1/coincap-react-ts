import styles from "./Home.module.scss"
import home from "../../../../images/home.svg"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <button className={styles.button} onClick={() => navigate("/")}>
      <img alt="home" src={home} className={styles.image} />
    </button>
  )
}

export default Home
