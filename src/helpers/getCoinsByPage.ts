import Coin from "../interfaces/Coin.interface"

export const getCoinsByPage = (coins: Coin[], page: number): Coin[] => {
  return coins.slice(page * 10, (page + 1) * 10)
}
