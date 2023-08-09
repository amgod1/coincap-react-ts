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
})

export const CoinContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(CoinReducer, initialState)

  const setAllCoins = (coins: Coin[]) =>
    dispatch({ type: "SET_ALL_COINS", payload: coins })

  return (
    <CoinContext.Provider value={{ state, setAllCoins }}>
      {children}
    </CoinContext.Provider>
  )
}

export const useCoinContext = () => useContext(CoinContext)
