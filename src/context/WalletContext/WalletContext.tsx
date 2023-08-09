import {
  FC,
  useReducer,
  useContext,
  createContext,
  PropsWithChildren,
} from "react"
import {
  WalletReducer,
  WalletReducerInitialState,
} from "../../reducers/WalletReducer/WalletReducer"
import WalletContextInterface from "./WalletContext.interface"

const WalletContext = createContext<WalletContextInterface>({
  walletState: WalletReducerInitialState,
  setShowAddCoinModal: () => {},
  setCoinValue: () => {},
})

export const WalletContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [walletState, dispatch] = useReducer(
    WalletReducer,
    WalletReducerInitialState
  )

  const setShowAddCoinModal = (id: string) => {
    dispatch({ type: "SHOW_ADD_COIN_MODAL", payload: id })
  }

  const setCoinValue = (value: string) => {
    dispatch({ type: "SET_COIN_VALUE", payload: value })
  }

  return (
    <WalletContext.Provider
      value={{ walletState, setShowAddCoinModal, setCoinValue }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWalletContext = () => useContext(WalletContext)
