"use client"

import { createContext, ReactNode } from "react"

export const UserContext = createContext({
    name: "Test User"
})

export default function UserContextProvider({ children }: { children: ReactNode }) {
    return <UserContext.Provider value={{ name: "Test User" }}>{children}</UserContext.Provider>
}