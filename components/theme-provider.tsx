'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class" // Applies theme as class on <html>
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  )
}
