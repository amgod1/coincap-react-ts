import { CoinInfo } from "./../../reducers/WalletReducer/WalletReducer.types"
import WalletReducer from "../../reducers/WalletReducer/WalletReducer.interface"
import Coin from "../../interfaces/Coin.interface"

export default interface WalletContext {
  walletState: WalletReducer
  showWalletModal: () => void
  hideWalletModal: () => void
  showAddCoinModal: (info: CoinInfo) => void
  hideAddCoinModal: () => void
  setCoinValue: (value: string) => void
  addCoinToWallet: () => void
  removeCoinFromWallet: (id: string) => void
  updateWalletPrice: (coins: Coin[]) => void
}
