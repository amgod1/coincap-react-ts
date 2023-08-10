import { WalletCoins } from "../reducers/WalletReducer/WalletReducer.interface"

export const countWalletPrice = (wallet: WalletCoins[]): string =>
  wallet
    .reduce(
      (price, coin) =>
        (price += Number(coin.coinValue) * Number(coin.coinInfo.price)),
      0
    )
    .toString()
