export type WalletAction =
  | { type: "SHOW_WALLET_MODAL" }
  | { type: "HIDE_WALLET_MODAL" }
  | { type: "SHOW_ADD_COIN_MODAL"; payload: string }
  | { type: "HIDE_ADD_COIN_MODAL" }
  | {
      type: "SET_COIN_VALUE"
      payload: number
    }
