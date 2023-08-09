import CoinReducer from "./CoinReducer.interface"
import { Action } from "./CoinReducer.types"

export const initialState = {
  currentPage: 1,
  allCoins: [],
  showCoins: [],
  userWallet: [],
}

export const CoinReducer = (
  state: CoinReducer,
  action: Action
): CoinReducer => {
  switch (action.type) {
    case "SET_ALL_COINS":
      return {
        ...state,
        allCoins: action.payload,
        showCoins: action.payload.slice(0, 10),
      }
    // case "SET_CURRENT_PAGE":
    //   return {
    //     ...state,
    //     currentPage: action.payload,
    //   }
    // case "SET_USER_WALLET":
    //   return {
    //     ...state,
    //     userWallet: action.payload,
    //   }
    default:
      return state
  }
}
