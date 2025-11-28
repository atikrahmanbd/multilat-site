import { cn } from "@/lib/utils";

export interface BackgroundDotProps {
	className?: string;
	dotSize?: string;
	dotColor?: string;
	backgroundColor?: string;
	fadeDirection?: "top" | "bottom" | "center" | "none";
}

export function BackgroundDot({
	className,
	dotSize = "1px",
	dotColor,
	backgroundColor,
	fadeDirection = "center",
}: BackgroundDotProps) {
	const getFadeMask = () => {
		switch (fadeDirection) {
			case "top":
				return "bg-gradient-to-b from-background to-transparent";
			case "bottom":
				return "bg-gradient-to-t from-background to-transparent";
			case "center":
				return cn(
					backgroundColor || "bg-white dark:bg-black",
					"[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				);
			case "none":
				return "hidden";
			default:
				return "";
		}
	};

	return (
		<>
			<div
				className={cn(
					"absolute inset-0",
					"[background-size:20px_20px]",
					dotColor
						? ""
						: "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
					className
				)}
				style={
					dotColor
						? {
								backgroundImage: `radial-gradient(${dotColor} ${dotSize}, transparent ${dotSize})`,
						  }
						: undefined
				}
			/>
			{/* Radial Gradient For The Container To Give A Faded Look */}
			<div
				className={cn(
					"pointer-events-none absolute inset-0 flex items-center justify-center",
					getFadeMask()
				)}
			/>
		</>
	);
}
