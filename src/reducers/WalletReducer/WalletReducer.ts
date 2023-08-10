import WalletReducer from "./WalletReducer.interface"
import { WalletAction } from "./WalletReducer.types"

export const WalletReducerInitialState = {
  coinInfo: { id: "", name: "", price: "" },
  coinValue: "0",
  walletCoins: [],
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
        coinInfo: action.payload,
        showAddCoinModal: true,
      }
    }
    case "HIDE_ADD_COIN_MODAL": {
      return {
        ...state,
        coinInfo: { id: "", name: "", price: "" },
        coinValue: "0",
        showAddCoinModal: false,
      }
    }
    case "SET_COIN_VALUE": {
      const newCoinValue = action.payload.trim()

      if (Number(newCoinValue) > 1000) {
        return {
          ...state,
          coinValue: "1000",
        }
      }

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
    case "ADD_COIN_TO_WALLET": {
      const addedCoin = {
        coinInfo: state.coinInfo,
        coinValue: state.coinValue,
      }

      const walletCoins = [...state.walletCoins, addedCoin]

      return {
        ...state,
        coinInfo: { id: "", name: "", price: "" },
        coinValue: "0",
        walletCoins,
        showAddCoinModal: false,
      }
    }

    default:
      return state
  }
}
