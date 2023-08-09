import WalletReducer from "./WalletReducer.interface"
import { WalletAction } from "./WalletReducer.types"

export const WalletReducerInitialState = {
  coinId: "",
  coinValue: "0",
  walletCoins: {},
  showWalletModal: false,
  showAddCoinModal: false,
}

export const WalletReducer = (
  state: WalletReducer,
  action: WalletAction
): WalletReducer => {
  switch (action.type) {
    case "SHOW_WALLET_MODAL": {
      return {
        ...state,
        showWalletModal: true,
      }
    }
    case "HIDE_WALLET_MODAL": {
      return {
        ...state,
        showWalletModal: false,
      }
    }
    case "SHOW_ADD_COIN_MODAL": {
      console.log("opening modal, ", action.payload)
      return {
        ...state,
        showAddCoinModal: true,
        coinId: action.payload,
      }
    }
    case "HIDE_ADD_COIN_MODAL": {
      return {
        ...state,
        showAddCoinModal: false,
      }
    }
    case "SET_COIN_VALUE": {
      const newCoinValue = action.payload.trim()

      if (newCoinValue === "") {
        return {
          ...state,
          coinValue: "0",
        }
      }

      if (newCoinValue.length > 1 && newCoinValue.startsWith("0")) {
        return {
          ...state,
          coinValue: newCoinValue.slice(1),
        }
      }

      return {
        ...state,
        coinValue: newCoinValue,
      }
    }

    default:
      return state
  }
}
