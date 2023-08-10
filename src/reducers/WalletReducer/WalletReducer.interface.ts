import { CoinInfo } from "./WalletReducer.types"

export default interface WalletReducer {
  walletCoins: WalletCoins[]
  coinInfo: CoinInfo
  coinValue: string
  showWalletModal: boolean
  showAddCoinModal: boolean
}

export interface WalletCoins {
  coinInfo: CoinInfo
  coinValue: string
}
