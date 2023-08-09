import Coin from "../../interfaces/Coin.interface"
import CoinReducer from "../../reducers/CoinReducer/CoinReducer.interface"

export default interface CoinContext {
  coinState: CoinReducer
  setAllCoins: (coins: Coin[]) => void
  setFirstCurrentPage: () => void
  setLastCurrentPage: () => void
  setNextCurrentPage: () => void
  setPrevCurrentPage: () => void
}
