import { useEffect, useMemo } from "react"
import { useWalletContext } from "../../../../context/WalletContext/WalletContext"
import { countWalletDiff } from "../../../../helpers/countWalletDiff"
import { simplifyNumber } from "../../../../helpers/simplifyNumber"
import styles from "./Wallet.module.scss"
import useFetchCoinsById from "../../../../hooks/useFetchCoinsById"

const Wallet = () => {
  const { walletState, showWalletModal, updateWalletPrice } = useWalletContext()

  const ids = useMemo(
    () =>
      walletState.walletCoins
        .reduce((ids, coin) => (ids += `,${coin.coinInfo.id}`), "")
        .slice(1),
    [walletState.walletCoins]
  )

  const walletDiff = useMemo(
    () =>
      countWalletDiff(
        walletState.prevWalletPrice,
        walletState.currentWalletPrice
      ),
    [walletState.prevWalletPrice, walletState.currentWalletPrice]
  )

  const { coins, error } = useFetchCoinsById(ids)

  useEffect(() => {
    if (coins.length) {
      updateWalletPrice(coins)
    }

    if (error) {
      console.error(error)
    }
  }, [coins])

  return (
    <button onClick={showWalletModal} className={styles["walletInfo"]}>
      ${simplifyNumber(walletState.currentWalletPrice)} {walletDiff}
    </button>
  )
}

export default Wallet
