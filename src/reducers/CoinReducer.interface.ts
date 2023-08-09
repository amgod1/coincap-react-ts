import Coin from "../interfaces/Coin.interface"

export default interface CoinReducer {
  currentPage: number
  allCoins: Coin[]
  showCoins: Coin[]
  userWallet: Coin[]
}
