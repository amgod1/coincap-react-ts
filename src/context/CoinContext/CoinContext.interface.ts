import Coin from "../../interfaces/Coin.interface"
import CoinReducer from "../../reducers/CoinReducer.interface"

export default interface CoinContext {
  state: CoinReducer
  setAllCoins: (coins: Coin[]) => void
  setFirstCurrentPage: () => void
  setLastCurrentPage: () => void
  setNextCurrentPage: () => void
  setPrevCurrentPage: () => void
}