import { useCoinContext } from "../../../../context/CoinContext/CoinContext"
import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import styles from "./TopCoins.module.scss"

const TopCoins = () => {
  const { coinState } = useCoinContext()

  return (
    <section className={styles.section}>
      {coinState.allCoins.slice(0, 3).map((coin) => (
        <div className={styles["section__item"]}>
          <b>{coin.name}</b>
          <span>${simplifyNumber(coin.priceUsd)}</span>
        </div>
      ))}
    </section>
  )
}

export default TopCoins
