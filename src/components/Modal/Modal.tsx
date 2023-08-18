import { FC } from "react"
import WalletModal from "./components/WalletModal/WalletModal"
import AddCoinModal from "./components/AddCoinModal/AddCoinModal"

const Modal: FC = () => {
  return (
    <>
      <AddCoinModal />
      <WalletModal />
    </>
  )
}

export default Modal
