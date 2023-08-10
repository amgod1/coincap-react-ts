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
import { CoinInfo } from "../../reducers/WalletReducer/WalletReducer.types"

const WalletContext = createContext<WalletContextInterface>({
  walletState: WalletReducerInitialState,
  showAddCoinModal: () => {},
  hideAddCoinModal: () => {},
  setCoinValue: () => {},
  addCoinToWallet: () => {},
})

export const WalletContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [walletState, dispatch] = useReducer(
    WalletReducer,
    WalletReducerInitialState
  )

  const showAddCoinModal = (info: CoinInfo) => {
    dispatch({ type: "SHOW_ADD_COIN_MODAL", payload: info })
  }

  const hideAddCoinModal = () => {
    dispatch({ type: "HIDE_ADD_COIN_MODAL" })
  }

  const setCoinValue = (value: string) => {
    dispatch({ type: "SET_COIN_VALUE", payload: value })
  }

  const addCoinToWallet = () => {
    dispatch({ type: "ADD_COIN_TO_WALLET" })
  }

  return (
    <WalletContext.Provider
      value={{
        walletState,
        showAddCoinModal,
        hideAddCoinModal,
        setCoinValue,
        addCoinToWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWalletContext = () => useContext(WalletContext)
