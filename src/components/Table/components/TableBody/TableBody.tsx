import { useCoinContext } from "../../../../context/CoinContext/CoinContext"
import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import styles from "../../Table.module.scss"

const TableBody = () => {
  const { state } = useCoinContext()

  return (
    <tbody className={styles["table__body"]}>
      {state.showCoins.map((coin) => (
        <tr key={coin.id}>
          <td>{coin.rank}</td>
          <td>{coin.name}</td>
          <td>${simplifyNumber(coin.priceUsd)}</td>
          <td>{simplifyNumber(coin.changePercent24Hr)}%</td>
          <td>button</td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
