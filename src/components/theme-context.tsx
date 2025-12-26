"use client"

import React, { createContext, useContext, useEffect, useState, useMemo } from "react"
import { useTheme } from "next-themes"

type ThemeColor = "green" | "blue" | "red" | "orange" | "yellow" | "gray"

interface ThemeContextType {
	themeColor: ThemeColor
	setThemeColor: (color: ThemeColor) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Get Default Color Based On Light/Dark Theme
function getDefaultColor(resolvedTheme: string | undefined): ThemeColor {
	return resolvedTheme === "light" ? "blue" : "green"
}

export function ThemeColorProvider({ children }: { children: React.ReactNode }) {
	const { resolvedTheme } = useTheme()
	// Track User's Manual Color Preference (null = Follow System Theme)
	const [userColorPreference, setUserColorPreference] = useState<ThemeColor | null>(null)

	// Derive Theme Color: Use User Preference If Set, Otherwise Follow System Theme
	const themeColor = useMemo<ThemeColor>(() => {
		return userColorPreference ?? getDefaultColor(resolvedTheme)
	}, [userColorPreference, resolvedTheme])

	// Wrapper To Set User Preference
	const setThemeColor = (color: ThemeColor) => {
		setUserColorPreference(color)
	}

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
