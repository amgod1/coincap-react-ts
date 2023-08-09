import Coin from "../../interfaces/Coin.interface"

export type CoinAction =
  | { type: "SET_ALL_COINS"; payload: Coin[] }
  | { type: "SET_LAST_CURRENT_PAGE" }
  | { type: "SET_FIRST_CURRENT_PAGE" }
  | { type: "SET_PREV_CURRENT_PAGE" }
  | { type: "SET_NEXT_CURRENT_PAGE" }
  | { type: "SET_USER_WALLET"; payload: Coin[] }
