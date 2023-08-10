import { CoinInfo } from "./WalletReducer.types"

export default interface WalletReducer {
  coinInfo: CoinInfo
  coinValue: string
  walletCoins: WalletCoins[]
  currentWalletPrice: string
  showWalletModal: boolean
  showAddCoinModal: boolean
}

export interface WalletCoins {
  coinInfo: CoinInfo
  coinValue: string
}
