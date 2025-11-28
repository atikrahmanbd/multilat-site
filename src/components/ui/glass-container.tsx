import { cn } from "@/lib/utils";

interface GlassContainerProps {
	children: React.ReactNode;
	className?: string;
	innerClassName?: string;
	outerBorderRadius?: string;
	innerBorderRadius?: string;
	outerPadding?: string;
	innerPadding?: string;
}

export function GlassContainer({
	children,
	className,
	innerClassName,
	outerBorderRadius = "rounded-xl",
	innerBorderRadius = "rounded-md",
	outerPadding = "p-2.5",
	innerPadding = "p-4"
}: GlassContainerProps) {
	return (
		<div
			className={cn(
				outerBorderRadius,
				"border border-border/70 bg-white/20 shadow-2xl backdrop-blur-lg",
				outerPadding,
				"dark:bg-black/30",
				"h-full",
				className
			)}
		>
			<div className={cn(
				innerBorderRadius,
				"border border-border/80 bg-white/60 backdrop-blur-sm dark:bg-black/60",
				innerPadding,
				"h-full",
				innerClassName
			)}>
				{children}
			</div>
		</div>
	);
}
