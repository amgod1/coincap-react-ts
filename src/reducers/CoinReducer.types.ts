import Coin from "../interfaces/Coin.interface"

export type Action =
  | { type: "SET_ALL_COINS"; payload: Coin[] }
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "SET_USER_WALLET"; payload: Coin[] }
