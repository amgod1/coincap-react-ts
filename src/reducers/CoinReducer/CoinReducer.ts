import CoinReducer from "./CoinReducer.interface"
import { CoinAction } from "./CoinReducer.types"

export const CoinReducerInitialState: CoinReducer = {
  currentPage: 0,
  lastPage: 9,
  allCoins: [],
}

export const CoinReducer = (
  state: CoinReducer,
  action: CoinAction
): CoinReducer => {
  switch (action.type) {
    case "SET_ALL_COINS":
      return {
        ...state,
        allCoins: action.payload,
      }
    case "SET_LAST_CURRENT_PAGE":
      return {
        ...state,
        currentPage: state.lastPage,
      }
    case "SET_FIRST_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: 0,
      }
    }
    case "SET_PREV_CURRENT_PAGE": {
      const prevPage = state.currentPage - 1

      return {
        ...state,
        currentPage: prevPage,
      }
    }
    case "SET_NEXT_CURRENT_PAGE": {
      const nextPage = state.currentPage + 1

      return {
        ...state,
        currentPage: nextPage,
      }
    }
    default:
      return state
  }
}
