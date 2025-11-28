"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
	text: string;
	revealText: string;
	className?: string;
	textClassName?: string;
	revealTextClassName?: string;
}

export const TextReveal = ({
	text,
	revealText,
	className,
	textClassName,
	revealTextClassName,
}: TextRevealProps) => {
	const [widthPercentage, setWidthPercentage] = useState(0);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [left, setLeft] = useState(0);
	const [localWidth, setLocalWidth] = useState(0);
	const [isMouseOver, setIsMouseOver] = useState(false);

	useEffect(() => {
		if (containerRef.current) {
			const { left, width: localWidth } =
				containerRef.current.getBoundingClientRect();
			setLeft(left);
			setLocalWidth(localWidth);
		}
	}, []);

	function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
		event.preventDefault();

		const { clientX } = event;
		if (containerRef.current) {
			const relativeX = clientX - left;
			setWidthPercentage((relativeX / localWidth) * 100);
		}
	}

	function mouseLeaveHandler() {
		setIsMouseOver(false);
		setWidthPercentage(0);
	}

	function mouseEnterHandler() {
		setIsMouseOver(true);
	}

	function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
		event.preventDefault();
		const clientX = event.touches[0]!.clientX;
		if (containerRef.current) {
			const relativeX = clientX - left;
			setWidthPercentage((relativeX / localWidth) * 100);
		}
	}

	const rotateDeg = (widthPercentage - 50) * 0.1;

	return (
		<div
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			onMouseMove={mouseMoveHandler}
			onTouchStart={mouseEnterHandler}
			onTouchEnd={mouseLeaveHandler}
			onTouchMove={touchMoveHandler}
			ref={containerRef}
			className={cn("relative flex items-center justify-center overflow-hidden", className)}
		>
			{/* Revealed Text */}
			<motion.div
				style={{
					width: "100%",
				}}
				animate={
					isMouseOver
						? {
								opacity: widthPercentage > 0 ? 1 : 0,
								clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
						  }
						: {
								clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
						  }
				}
				transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
				className="absolute inset-0 z-20 flex items-center justify-center will-change-transform"
			>
				<p
					style={{
						textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
					}}
					className={cn(
						"font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70",
						revealTextClassName
					)}
				>
					{revealText}
				</p>
			</motion.div>

			{/* Divider Line */}
			<motion.div
				animate={{
					left: `${widthPercentage}%`,
					rotate: `${rotateDeg}deg`,
					opacity: widthPercentage > 0 ? 1 : 0,
				}}
				transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
				className="absolute z-50 h-full w-[8px] bg-gradient-to-b from-transparent via-primary to-transparent will-change-transform"
			/>

			{/* Base Text */}
			<div className="relative flex items-center justify-center w-full">
				<p
					className={cn(
						"font-bold bg-clip-text text-transparent bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/10",
						textClassName
					)}
				>
					{text}
				</p>
			</div>
		</div>
	);
};
