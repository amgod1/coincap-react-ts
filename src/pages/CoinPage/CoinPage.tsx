import { MouseEventHandler } from "react"
import { useLocation } from "react-router-dom"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import { simplifyNumber } from "../../helpers/simplifyNumber"
import styles from "./CoinPage.module.scss"
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory"
import { useWalletContext } from "../../context/WalletContext/WalletContext"
import Chart from "./components/Chart"

const CoinPage = () => {
  const { pathname } = useLocation()
  const coinId = pathname.slice(1)

  const { coinState } = useCoinContext()
  const coin = coinState.allCoins.find((coin) => coin.id === coinId)

  const { showAddCoinModal } = useWalletContext()
  const { history, error } = useFetchCoinHistory(coinId)

  console.log(history)

  const showAddCoinHandler =
    (
      id: string,
      name: string,
      price: string
    ): MouseEventHandler<HTMLButtonElement> =>
    () => {
      showAddCoinModal({ id, name, price })
    }

  return (
    <section className={styles.section}>
      <h2>Page: {coin?.name}</h2>
      <div className={styles["section__info"]}>
        <div>
          <p>
            <b>Rank:</b> {coin?.rank}
          </p>
          <p>
            <b>Price:</b> {simplifyNumber(coin?.priceUsd || "")}
          </p>
          <p>
            <b>Change:</b> {simplifyNumber(coin?.changePercent24Hr || "")}
          </p>
          <button
            onClick={showAddCoinHandler(
              coin?.id!,
              coin?.name!,
              coin?.priceUsd!
            )}
            className={styles["section__info--button"]}
          >
            Add
          </button>
        </div>
        <div className={styles["section__info--chart"]}>
          <Chart data={history} />
        </div>
      </div>
    </section>
  )
}

export default CoinPage
