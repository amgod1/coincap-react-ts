import { FC, PropsWithChildren } from "react"
import { CoinContextProvider } from "./CoinContext/CoinContext"
import { WalletContextProvider } from "./WalletContext/WalletContext"

const AppContext: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CoinContextProvider>
      <WalletContextProvider>{children}</WalletContextProvider>
    </CoinContextProvider>
  )
}

export default AppContext
