import { useLocation } from "react-router-dom"
import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import useFetchAllCoins from "../../../../hooks/useFetchAllCoins"
import Home from "../Home/Home"
import styles from "./TopCoins.module.scss"

const TopCoins = () => {
  const { pathname } = useLocation()
  const { coins } = useFetchAllCoins(3)

  return (
    <section className={styles.section}>
      {pathname.length > 1 && <Home />}
      {coins.map((coin) => (
        <div key={coin.id} className={styles["section__item"]}>
          <b>{coin.name}</b>
          <span>${simplifyNumber(coin.priceUsd)}</span>
        </div>
      ))}
    </section>
  )
}

export default TopCoins
