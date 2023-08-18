import Coin from "../../interfaces/Coin.interface"

export default interface PagesContextInterface {
  pages: string[]
  setPages: (newValue: Coin[]) => void
}
