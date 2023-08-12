export const truncatePercentage = (inputStr: string) => {
  const dotIndex = inputStr.indexOf(".")

  if (dotIndex !== -1) {
    for (let i = dotIndex + 1; i < inputStr.length; i++) {
      if (inputStr[i] !== "0") {
        return inputStr.substring(0, i + 1)
      }
    }
  }

  return inputStr
}
