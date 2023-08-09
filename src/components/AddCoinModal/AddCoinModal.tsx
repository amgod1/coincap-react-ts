import { useWalletContext } from "../../context/WalletContext/WalletContext"
import styles from "./AddCoinModa.module.scss"

const AddCoinModal = () => {
  const { walletState, setCoinValue } = useWalletContext()

  const setCoinValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoinValue(event.target.value)
  }

  return (
    walletState.showAddCoinModal && (
      <section className={styles.modal}>
        <div>
          <h2>Add coin to your wallet:</h2>
          <button>x</button>
        </div>
        <p>{walletState.coinId}</p>
        <input
          type="number"
          min={0}
          value={walletState.coinValue}
          onChange={setCoinValueHandler}
          pattern="^\+?(?!0\d+)\d*(\.\d*)?$"
        />
      </section>
    )
  )
}

export default AddCoinModal
