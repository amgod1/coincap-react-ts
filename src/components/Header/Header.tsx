import TopCoins from "./components/TopCoins/TopCoins"
import Wallet from "./components/Wallet/Wallet"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <TopCoins />
      <Wallet />
    </header>
  )
}

export default Header
