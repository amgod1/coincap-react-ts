import { CoinInfo } from "./../../reducers/WalletReducer/WalletReducer.types"
import WalletReducer from "../../reducers/WalletReducer/WalletReducer.interface"

export default interface WalletContext {
  walletState: WalletReducer
  showAddCoinModal: (info: CoinInfo) => void
  hideAddCoinModal: () => void
  setCoinValue: (value: string) => void
  addCoinToWallet: () => void
}
