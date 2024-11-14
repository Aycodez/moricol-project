'use client'

import { SnackbarProvider } from 'notistack'
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SnackbarProvider autoHideDuration={3000} maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}   >
      {children}
      </SnackbarProvider>
    </SessionProvider>
  )
}