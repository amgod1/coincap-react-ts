import { useWalletContext } from "../../context/WalletContext/WalletContext"
import styles from "./AddCoinModa.module.scss"

const AddCoinModal = () => {
  const { walletState, hideAddCoinModal, setCoinValue, addCoinToWallet } =
    useWalletContext()

  const setCoinValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoinValue(event.target.value)
  }

  const walletValue =
    Number(walletState.coinInfo.price) * Number(walletState.coinValue)

  return (
    walletState.showAddCoinModal && (
      <section className={styles.modal}>
        <div className={styles["modal__headline"]}>
          <h2>Add coin to your wallet:</h2>
          <button
            onClick={hideAddCoinModal}
            className={styles["modal__headline--button"]}
          >
            x
          </button>
        </div>
        <div className={styles["modal__content"]}>
          <p>
            Coin name: <b>{walletState.coinInfo.name}</b>
          </p>
          <input
            type="number"
            min={0}
            max={1000}
            value={walletState.coinValue}
            onChange={setCoinValueHandler}
            pattern="^\+?(?!0\d+)\d*(\.\d*)?$"
            className={styles["modal__content--input"]}
          />

          <p>
            Current price: <b>{walletValue}$</b>
          </p>
        </div>
        <div className={styles["modal__buttons"]}>
          <button
            onClick={addCoinToWallet}
            className={styles["modal__buttons--submit"]}
          >
            Submit
          </button>
          <button
            onClick={hideAddCoinModal}
            className={styles["modal__buttons--cancel"]}
          >
            Cancel
          </button>
        </div>
      </section>
    )
  )
}

export default AddCoinModal
