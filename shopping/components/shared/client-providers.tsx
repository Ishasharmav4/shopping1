'use client'
import React, { useState, useEffect } from 'react'
import CartSidebar from './cart-sidebar'
import { ThemeProvider } from './theme-provider'
import AppInitializer from './app-initializer'
import { ClientSetting } from '@/types'


// Mock implementation of useCartSidebar hook
const useCartSidebar = () => {
  // Simple state hook for managing cart sidebar visibility
  const [isOpen, setIsOpen] = useState(false)

  // You could add additional logic here, such as event listeners, etc.
  useEffect(() => {
    // Example logic: toggle sidebar on key press (for demo)
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'c') {
        setIsOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return isOpen
}

// Mock implementation of Sonner component (for notifications)
const Sonner = () => {
  return <div className="notification">Cart Updated!</div>
}

export default function ClientProviders({
  children,
  setting,
  
}: {
  children: React.ReactNode
  setting:ClientSetting
}) {
  
  const visible = useCartSidebar()
  return (
    
    <AppInitializer setting={setting}>
      <ThemeProvider
        attribute='class'
        defaultTheme={setting.common.defaultTheme.toLocaleLowerCase()}
      >
        {visible ? (
        <div className="flex min-h-screen">
          <div className="flex-1 overflow-hidden">{children}</div>
          <CartSidebar />
        </div>
      ) : (
        <div>{children}</div>
      )}
      <Sonner />
      </ThemeProvider>
      </AppInitializer>
  )
}