import Coin from "../interfaces/Coin.interface"

export const getCoinsByPage = (coins: Coin[], page: number): Coin[] => {
  const result = coins.slice(page * 10, (page + 1) * 10)

  return result
}
