import Coin from "../../interfaces/Coin.interface"

export type WalletAction =
  | { type: "SHOW_WALLET_MODAL" }
  | { type: "HIDE_WALLET_MODAL" }
  | { type: "SHOW_ADD_COIN_MODAL"; payload: CoinInfo }
  | { type: "HIDE_ADD_COIN_MODAL" }
  | { type: "SET_COIN_VALUE"; payload: string }
  | { type: "ADD_COIN_TO_WALLET" }
  | { type: "REMOVE_COIN_FROM_WALLET"; payload: string }
  | { type: "UPDATE_WALLET_PRICE"; payload: Coin[] }

export interface CoinInfo {
  id: string
  name: string
  price: string
}
