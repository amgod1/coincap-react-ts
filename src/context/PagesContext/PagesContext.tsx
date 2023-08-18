import {
  FC,
  useState,
  useContext,
  createContext,
  PropsWithChildren,
} from "react"
import PagesContextInterface from "./PagesContext.interface"
import Coin from "../../interfaces/Coin.interface"

const PagesContext = createContext<PagesContextInterface>({
  pages: [],
  setPages: () => {},
})

export const PagesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const storedValue = localStorage.getItem("pages") || "[]"

  const [pages, setValue] = useState<string[]>(JSON.parse(storedValue))

  const setPages = (newValue: Coin[]) => {
    if (newValue.length > pages.length) {
      const newPages = newValue.map((coin) => coin.id)

      localStorage.setItem("pages", JSON.stringify(newPages))

      setValue(newPages)
    }
  }

  return (
    <PagesContext.Provider
      value={{
        pages,
        setPages,
      }}
    >
      {children}
    </PagesContext.Provider>
  )
}

export const usePagesContext = () => useContext(PagesContext)
