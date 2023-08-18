import { getCoinsByPage } from "../../helpers/getCoinsByPage"
import CoinReducer from "./CoinReducer.interface"
import { CoinAction } from "./CoinReducer.types"

export const CoinReducerInitialState: CoinReducer = {
  loaded: (0 + 1) * 10,
  currentPage: 0,
  lastPage: 0,
  allCoins: [],
  showCoins: [],
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
        lastPage: 9,
        showCoins: getCoinsByPage(action.payload, state.currentPage),
      }
    case "SET_LAST_CURRENT_PAGE":
      return {
        ...state,
        loaded: 100,
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
      const prevPage = state.currentPage - 1

      return {
        ...state,
        currentPage: prevPage,
        showCoins: getCoinsByPage(state.allCoins, prevPage),
      }
    }
    case "SET_NEXT_CURRENT_PAGE": {
      const nextPage = state.currentPage + 1

      const itemsToLoad =
        nextPage * 10 === state.loaded
          ? state.loaded < 100
            ? state.loaded + 10
            : 100
          : state.loaded

      return {
        ...state,
        loaded: itemsToLoad,
        currentPage: nextPage,
        showCoins: getCoinsByPage(state.allCoins, nextPage),
      }
    }
    default:
      return state
  }
}
