"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {/* Sun icon for light mode */}
      <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === "light" ? 'block' : 'hidden'}`} />
      {/* Moon icon for dark mode */}
      <Moon className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? 'block' : 'hidden'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}