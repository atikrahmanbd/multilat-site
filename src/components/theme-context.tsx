"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "next-themes"

type ThemeColor = "green" | "blue" | "red" | "orange" | "yellow" | "gray"

interface ThemeContextType {
	themeColor: ThemeColor
	setThemeColor: (color: ThemeColor) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeColorProvider({ children }: { children: React.ReactNode }) {
	const [themeColor, setThemeColor] = useState<ThemeColor>("green")
	const { resolvedTheme } = useTheme()

	// Switch Theme Color Based On Light/Dark Theme
	useEffect(() => {
		if (resolvedTheme === "light") {
			setThemeColor("blue")
		} else if (resolvedTheme === "dark") {
			setThemeColor("green")
		}
	}, [resolvedTheme])

	useEffect(() => {
		// Update CSS Variables When Theme Color Changes
		const root = document.documentElement

		// Remove All Existing Color Classes
		root.classList.remove("theme-green", "theme-blue", "theme-red", "theme-orange", "theme-yellow", "theme-gray")

		// Add New Color Class
		root.classList.add(`theme-${themeColor}`)
	}, [themeColor])

	return (
		<ThemeContext.Provider value={{ themeColor, setThemeColor }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useThemeColor() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error("useThemeColor Must Be Used Within A ThemeColorProvider")
	}
	return context
}
