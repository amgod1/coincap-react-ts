import WalletReducer from "../../reducers/WalletReducer/WalletReducer.interface"

export default interface WalletContext {
  walletState: WalletReducer
  setShowAddCoinModal: (id: string) => void
  setCoinValue: (value: string) => void
}
