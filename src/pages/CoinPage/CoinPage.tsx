import { useLocation } from "react-router-dom"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import { simplifyNumber } from "../../helpers/simplifyNumber"
import styles from "./CoinPage.module.scss"
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory"

const CoinPage = () => {
  const { pathname } = useLocation()
  const coinId = pathname.slice(1)

  const { coinState } = useCoinContext()
  const { history, error } = useFetchCoinHistory(coinId)

  const coin = coinState.allCoins.find((coin) => coin.id === coinId)

  console.log(history, error)

  return (
    <section className={styles.section}>
      <h2>Page: {coin?.name}</h2>
      <p>Rank: {coin?.rank}</p>
      <p>Price: {simplifyNumber(coin?.priceUsd || "")}</p>
      <p>Change: {simplifyNumber(coin?.changePercent24Hr || "")}</p>
    </section>
  )
}

export default CoinPage
