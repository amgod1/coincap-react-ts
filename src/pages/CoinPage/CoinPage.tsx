import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useCoinContext } from "../../context/CoinContext/CoinContext"
import { useWalletContext } from "../../context/WalletContext/WalletContext"
import { simplifyNumber } from "../../helpers/simplifyNumber"
import useFetchCoinHistory from "../../hooks/useFetchCoinHistory"
import Chart from "./components/Chart"
import styles from "./CoinPage.module.scss"
import useFetchCoinsById from "../../hooks/useFetchCoinsById"

const CoinPage = () => {
  const { showAddCoinModal, hideAddCoinModal, hideWalletModal } =
    useWalletContext()
  const { pathname } = useLocation()
  const coinId = pathname.slice(1)

  const { coinState } = useCoinContext()
  const checkStateForCoin = coinState.allCoins.find(
    (coin) => coin.id === coinId
  )

  const { coins } = useFetchCoinsById(coinId, checkStateForCoin)
  const { history } = useFetchCoinHistory(coinId)

  const coin = coins[0] || {}

  const showAddCoinHandler =
    (id: string, name: string, price: string) => () => {
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
          <b>Name:</b> {coin.name}
        </p>
        <p>
          <b>Rank:</b> {coin.rank}
        </p>
        <p>
          <b>Price:</b> ${coin.priceUsd && simplifyNumber(coin.priceUsd)}
        </p>
        <p>
          <b>Change:</b>{" "}
          {coin.changePercent24Hr &&
            simplifyNumber(coin.changePercent24Hr || "") + "%"}
        </p>
        <button
          onClick={showAddCoinHandler(coin.id, coin.name, coin.priceUsd)}
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
