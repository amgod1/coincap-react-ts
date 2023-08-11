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
  showWalletModal: () => {},
  hideWalletModal: () => {},
  showAddCoinModal: () => {},
  hideAddCoinModal: () => {},
  setCoinValue: () => {},
  addCoinToWallet: () => {},
  removeCoinFromWallet: () => {},
})

export const WalletContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [walletState, dispatch] = useReducer(
    WalletReducer,
    WalletReducerInitialState
  )

  const showWalletModal = () => {
    dispatch({ type: "SHOW_WALLET_MODAL" })
  }

  const hideWalletModal = () => {
    dispatch({ type: "HIDE_WALLET_MODAL" })
  }

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

  const removeCoinFromWallet = (id: string) => {
    dispatch({ type: "REMOVE_COIN_FROM_WALLET", payload: id })
  }

  return (
    <WalletContext.Provider
      value={{
        showWalletModal,
        hideWalletModal,
        walletState,
        showAddCoinModal,
        hideAddCoinModal,
        setCoinValue,
        addCoinToWallet,
        removeCoinFromWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWalletContext = () => useContext(WalletContext)
