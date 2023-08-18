import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import useFetchAllCoins from "../../../../hooks/useFetchAllCoins"
import styles from "./TopCoins.module.scss"

const TopCoins = () => {
  const { coins } = useFetchAllCoins(3)

  return (
    <section className={styles.section}>
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
