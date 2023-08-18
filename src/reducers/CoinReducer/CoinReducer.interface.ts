import Coin from "../../interfaces/Coin.interface"

export default interface CoinReducer {
  loaded: number
  currentPage: number
  lastPage: number
  allCoins: Coin[]
  showCoins: Coin[]
}
