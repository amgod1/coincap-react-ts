import { useWalletContext } from "../../../../context/WalletContext/WalletContext"
import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import styles from "./Wallet.module.scss"

const Wallet = () => {
  const { walletState, showWalletModal } = useWalletContext()

  return (
    <button onClick={showWalletModal} className={styles["walletInfo"]}>
      ${simplifyNumber(walletState.currentWalletPrice)}
    </button>
  )
}

export default Wallet
