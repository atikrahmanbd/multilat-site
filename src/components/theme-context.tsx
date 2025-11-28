"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type ThemeColor = "green" | "blue" | "red" | "orange" | "yellow" | "gray"

interface ThemeContextType {
	themeColor: ThemeColor
	setThemeColor: (color: ThemeColor) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeColorProvider({ children }: { children: React.ReactNode }) {
	const [themeColor, setThemeColor] = useState<ThemeColor>("green")

	useEffect(() => {
		// Update CSS Variables When Theme Color Changes
		const root = document.documentElement

		// Remove All Existing Color Classes
		root.classList.remove("theme-green", "theme-blue", "theme-red", "theme-orange", "theme-yellow", "theme-gray")

		// Add New Color Class
		root.classList.add(`theme-${themeColor}`)

		// Store In LocalStorage
		localStorage.setItem("color-theme", themeColor)
	}, [themeColor])

	useEffect(() => {
		// Load Theme Color From LocalStorage On Mount
		const savedColor = localStorage.getItem("color-theme") as ThemeColor
		if (savedColor && ["green", "blue", "red", "orange", "yellow", "gray"].includes(savedColor)) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setThemeColor(savedColor)
		}
	}, [])

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
