import { useWalletContext } from "../../../../context/WalletContext/WalletContext"
import { countWalletDiff } from "../../../../helpers/countWalletDiff"
import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import styles from "./Wallet.module.scss"

const Wallet = () => {
  const { walletState, showWalletModal } = useWalletContext()

  const walletDiff = countWalletDiff(
    walletState.prevWalletPrice,
    walletState.currentWalletPrice
  )

  return (
    <button onClick={showWalletModal} className={styles["walletInfo"]}>
      ${simplifyNumber(walletState.currentWalletPrice)} {walletDiff}
    </button>
  )
}

export default Wallet
