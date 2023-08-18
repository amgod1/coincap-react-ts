import { FC, PropsWithChildren } from "react"
import { PagesContextProvider } from "./PagesContext/PagesContext"
import { CoinContextProvider } from "./CoinContext/CoinContext"
import { WalletContextProvider } from "./WalletContext/WalletContext"

const AppContext: FC<PropsWithChildren> = ({ children }) => {
  return (
    <PagesContextProvider>
      <CoinContextProvider>
        <WalletContextProvider>{children}</WalletContextProvider>
      </CoinContextProvider>
    </PagesContextProvider>
  )
}

export default AppContext
