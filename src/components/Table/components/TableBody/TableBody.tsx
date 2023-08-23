import { MouseEventHandler } from "react"
import { useNavigate } from "react-router-dom"
import { useCoinContext } from "../../../../context/CoinContext/CoinContext"
import { useWalletContext } from "../../../../context/WalletContext/WalletContext"
import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import styles from "../../Table.module.scss"

const TableBody = () => {
  const { coinState } = useCoinContext()
  const { showAddCoinModal } = useWalletContext()
  const navigate = useNavigate()

  const showAddCoinHandler =
    (
      id: string,
      name: string,
      price: string
    ): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.stopPropagation()
      showAddCoinModal({ id, name, price })
    }

  return (
    <tbody className={styles["table__body"]}>
      {coinState.allCoins.map((coin) => (
        <tr key={coin.id} onClick={() => navigate(`/${coin.id}`)}>
          <td>{coin.rank}</td>
          <td>{coin.name}</td>
          <td>${simplifyNumber(coin.priceUsd)}</td>
          <td>{simplifyNumber(coin.changePercent24Hr)}%</td>
          <td>
            <button
              onClick={showAddCoinHandler(coin.id, coin.name, coin.priceUsd)}
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
