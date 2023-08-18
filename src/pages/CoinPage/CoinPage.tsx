import { MouseEventHandler, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import { useWalletContext } from "../../context/WalletContext/WalletContext"
import { simplifyNumber } from "../../helpers/simplifyNumber"
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory"
import Chart from "./components/Chart"
import styles from "./CoinPage.module.scss"

const CoinPage = () => {
  const { pathname } = useLocation()
  const coinId = pathname.slice(1)

  const { coinState } = useCoinContext()
  const coin = coinState.allCoins.find((coin) => coin.id === coinId)

  const { showAddCoinModal, hideAddCoinModal, hideWalletModal } =
    useWalletContext()
  const { history } = useFetchCoinHistory(coinId)

  const showAddCoinHandler =
    (
      id: string,
      name: string,
      price: string
    ): MouseEventHandler<HTMLButtonElement> =>
    () => {
      showAddCoinModal({ id, name, price })
    }

  useEffect(() => {
    hideAddCoinModal()
    hideWalletModal()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles["section__info"]}>
        <p>
          <b>Name:</b> {coin?.name}
        </p>
        <p>
          <b>Rank:</b> {coin?.rank}
        </p>
        <p>
          <b>Price:</b> ${simplifyNumber(coin?.priceUsd || "")}
        </p>
        <p>
          <b>Change:</b> {simplifyNumber(coin?.changePercent24Hr || "") + "%"}
        </p>
        <button
          onClick={showAddCoinHandler(coin?.id!, coin?.name!, coin?.priceUsd!)}
          className={styles["section__info--button"]}
        >
          Add
        </button>
      </div>
      <div className={styles["section__info--chart"]}>
        <Chart data={history} />
      </div>
    </section>
  )
}

export default CoinPage
