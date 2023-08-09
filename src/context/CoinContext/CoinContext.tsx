import {
  FC,
  useReducer,
  useContext,
  createContext,
  PropsWithChildren,
} from "react"
import CoinContextInterface from "./CoinContext.interface"
import { CoinReducer, initialState } from "../../reducers/CoinReducer"
import Coin from "../../interfaces/Coin.interface"

const CoinContext = createContext<CoinContextInterface>({
  state: initialState,
  setAllCoins: () => {},
  setLastCurrentPage: () => {},
  setFirstCurrentPage: () => {},
  setPrevCurrentPage: () => {},
  setNextCurrentPage: () => {},
})

export const CoinContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(CoinReducer, initialState)

  const setAllCoins = (coins: Coin[]) =>
    dispatch({ type: "SET_ALL_COINS", payload: coins })

  const setLastCurrentPage = () => dispatch({ type: "SET_LAST_CURRENT_PAGE" })
  const setFirstCurrentPage = () => dispatch({ type: "SET_FIRST_CURRENT_PAGE" })
  const setPrevCurrentPage = () => dispatch({ type: "SET_PREV_CURRENT_PAGE" })
  const setNextCurrentPage = () => dispatch({ type: "SET_NEXT_CURRENT_PAGE" })

  return (
    <CoinContext.Provider
      value={{
        state,
        setAllCoins,
        setLastCurrentPage,
        setFirstCurrentPage,
        setPrevCurrentPage,
        setNextCurrentPage,
      }}
    >
      {children}
    </CoinContext.Provider>
  )
}

export const useCoinContext = () => useContext(CoinContext)
