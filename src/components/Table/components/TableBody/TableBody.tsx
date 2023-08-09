import { useCoinContext } from "../../../../context/CoinContext/CoinContext"
import { useWalletContext } from "../../../../context/WalletContext/WalletContext"
import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import styles from "../../Table.module.scss"

const TableBody = () => {
  const { coinState } = useCoinContext()
  const { setShowAddCoinModal } = useWalletContext()

  const showAddCoinHandler = (id: string) => () => {
    setShowAddCoinModal(id)
  }

  return (
    <tbody className={styles["table__body"]}>
      {coinState.showCoins.map((coin) => (
        <tr key={coin.id}>
          <td>{coin.rank}</td>
          <td>{coin.name}</td>
          <td>${simplifyNumber(coin.priceUsd)}</td>
          <td>{simplifyNumber(coin.changePercent24Hr)}%</td>
          <td>
            <button
              onClick={showAddCoinHandler(coin.id)}
              className={styles["table__body--button"]}
            >
              +
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
