import { cn } from "@/lib/utils";

export const BackgroundGridPerspective = ({
	className,
}: {
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden",
				className
			)}
		>
			<div className="absolute inset-0 [transform:rotateX(35deg)] [perspective:1000px]">
				<div className="absolute inset-0 [transform:translateZ(0)]">
					<div
						className="h-[200%] w-full"
						style={{
							backgroundImage: `
								linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
								linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
							`,
							backgroundSize: "60px 60px",
							backgroundPosition: "center top",
						}}
					/>
				</div>
			</div>
			{/* Fade overlay */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
		</div>
	);
};
