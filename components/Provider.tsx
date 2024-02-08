"use client"

import { StoreProvider } from "@/context/store"
import React from "react"

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>
}
export default Provider
