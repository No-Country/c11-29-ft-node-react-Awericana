import { createContext, useState } from 'react'

export const SessionContext = createContext([])

export function SessionProvider ({ children }) {
  return (
    <SessionContext.Provider value={useState(null)}>
      {children}
    </SessionContext.Provider>
  )
}
