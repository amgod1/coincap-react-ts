import { truncatePercentage } from "./truncatePercentage"

export const countWalletDiff = (current: string, prev: string): string => {
  let diff = (Number(current) - Number(prev)).toFixed(2) + ""

  const percentage = (Number(diff) * 100) / Number(current)

  const result = `${Number(diff) < 0 ? diff : `+${diff}`} (${
    isFinite(percentage) ? truncatePercentage(percentage + "") : 0
  }%)`

  return result
}
