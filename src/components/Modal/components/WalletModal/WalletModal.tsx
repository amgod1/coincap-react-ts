import { useWalletContext } from "../../../../context/WalletContext/WalletContext"
import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import styles from "./WalletModal.module.scss"

const WalletModal = () => {
  const { walletState, hideWalletModal, removeCoinFromWallet } =
    useWalletContext()

  const removeCoinHandler = (id: string) => () => {
    removeCoinFromWallet(id)
  }

  return (
    walletState.showWalletModal && (
      <section className={styles.modal}>
        <div className={styles["modal__headline"]}>
          <h2>Wallet info:</h2>
          <button
            onClick={hideWalletModal}
            className={styles["modal__headline--button"]}
          >
            x
          </button>
        </div>
        <div>
          {walletState.walletCoins.length ? (
            walletState.walletCoins.map((coin) => (
              <div
                key={coin.coinInfo.id}
                className={styles["modal__content--item"]}
              >
                <p>
                  {coin.coinInfo.name}{" "}
                  <b>
                    $
                    {simplifyNumber(
                      Number(coin.coinInfo.price) * Number(coin.coinValue) + ""
                    )}
                  </b>
                </p>
                <button onClick={removeCoinHandler(coin.coinInfo.id)}>
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>Your wallet is empty.</p>
          )}
        </div>
      </section>
    )
  )
}

export default WalletModal
