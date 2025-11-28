"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const themes = [
	{
		key: "light",
		icon: Sun,
		label: "Light Theme",
	},
	{
		key: "dark",
		icon: Moon,
		label: "Dark Theme",
	},
	{
		key: "system",
		icon: Monitor,
		label: "System Theme",
	},
];

export function ThemeSwitch() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	// Prevent Hydration Mismatch By Only Rendering After Mount
	React.useEffect(() => {
		setMounted(true);
	}, []);

	const handleThemeClick = React.useCallback(
		(themeKey: string) => {
			setTheme(themeKey);
		},
		[setTheme]
	);

	// Render Placeholder During SSR To Prevent Hydration Mismatch
	if (!mounted) {
		return (
			<div className="relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border">
				<div className="h-6 w-6 rounded-full" />
				<div className="h-6 w-6 rounded-full" />
				<div className="h-6 w-6 rounded-full" />
			</div>
		);
	}

	return (
		<div className="relative isolate flex h-8 gap-1 rounded-full bg-background p-1 ring-1 ring-border">
			{themes.map(({ key, icon: Icon, label }) => {
				const isActive = theme === key;
				return (
					<button
						aria-label={label}
						className="relative h-6 w-6 rounded-full"
						key={key}
						onClick={() => handleThemeClick(key)}
						type="button"
					>
						{isActive && (
							<motion.div
								className="absolute inset-0 rounded-full bg-secondary"
								layoutId="activeTheme"
								transition={{ type: "spring", duration: 0.5 }}
							/>
						)}
						<Icon
							className={cn(
								"relative z-10 m-auto h-4 w-4",
								isActive ? "text-foreground" : "text-muted-foreground"
							)}
						/>
					</button>
				);
			})}
		</div>
	);
}
