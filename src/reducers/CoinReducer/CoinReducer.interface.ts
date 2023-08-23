import Coin from "../../interfaces/Coin.interface"

export default interface CoinReducer {
  currentPage: number
  lastPage: number
  allCoins: Coin[]
  showCoins: Coin[]
}
