import { countWalletPrice } from "../../helpers/countWalletPrice"
import WalletReducer from "./WalletReducer.interface"
import { WalletAction } from "./WalletReducer.types"

export const WalletReducerInitialState = {
  coinInfo: { id: "", name: "", price: "" },
  coinValue: "0",
  walletCoins: [],
  currentWalletPrice: "0",
  showWalletModal: false,
  showAddCoinModal: false,
}

export const WalletReducer = (
  state: WalletReducer,
  action: WalletAction
): WalletReducer => {
  switch (action.type) {
    case "SHOW_WALLET_MODAL": {
      console.log("show wallet")
      return {
        ...state,
        showWalletModal: true,
        showAddCoinModal: false,
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
        coinValue:
          state.walletCoins.find(
            (coin) => coin.coinInfo.id === action.payload.id
          )?.coinValue || "0",
        showWalletModal: false,
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
      const { coinInfo, coinValue } = state

      const existingCoinIndex = state.walletCoins.findIndex(
        (coin) => coin.coinInfo.id === coinInfo.id
      )

      const walletCoins =
        existingCoinIndex !== -1
          ? [
              ...state.walletCoins.slice(0, existingCoinIndex),
              { coinInfo, coinValue },
              ...state.walletCoins.slice(existingCoinIndex + 1),
            ]
          : [...state.walletCoins, { coinInfo, coinValue }]

      return {
        ...state,
        coinInfo: { id: "", name: "", price: "" },
        coinValue: "0",
        walletCoins,
        currentWalletPrice: countWalletPrice(walletCoins),
        showAddCoinModal: false,
      }
    }
    case "REMOVE_COIN_FROM_WALLET": {
      const updatedWalletCoins = state.walletCoins.filter(
        (coin) => coin.coinInfo.id !== action.payload
      )

      return {
        ...state,
        walletCoins: updatedWalletCoins,
        currentWalletPrice: countWalletPrice(updatedWalletCoins),
      }
    }

    default:
      return state
  }
}
