import { getCoinsByPage } from "../helpers/getCoinsByPage"
import CoinReducer from "./CoinReducer.interface"
import { Action } from "./CoinReducer.types"

export const initialState = {
  currentPage: 0,
  lastPage: 0,
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
        lastPage: Math.floor(action.payload.length / 10) - 1,
        showCoins: getCoinsByPage(action.payload, state.currentPage),
      }
    case "SET_LAST_CURRENT_PAGE":
      return {
        ...state,
        currentPage: state.lastPage,
        showCoins: getCoinsByPage(state.allCoins, state.lastPage),
      }
    case "SET_FIRST_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: 0,
        showCoins: getCoinsByPage(state.allCoins, 0),
      }
    }
    case "SET_PREV_CURRENT_PAGE": {
      const prevPage = state.currentPage--

      return {
        ...state,
        currentPage: prevPage,
        showCoins: getCoinsByPage(state.allCoins, prevPage),
      }
    }
    case "SET_NEXT_CURRENT_PAGE": {
      const nextPage = state.currentPage++

      return {
        ...state,
        currentPage: nextPage,
        showCoins: getCoinsByPage(state.allCoins, nextPage),
      }
    }
    // case "SET_USER_WALLET":
    //   return {
    //     ...state,
    //     userWallet: action.payload,
    //   }
    default:
      return state
  }
}
