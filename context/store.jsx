import { createContext, useContext, useState } from "react"

const Store = createContext()

export function StoreProvider({ children }) {
  const [balance, setBalance] = useState()

  return (
    <Store.Provider value={{ balance, setBalance }}>{children}</Store.Provider>
  )
}

export default function useStore() {
  return useContext(Store)
}
