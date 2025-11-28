"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
	gradientBackgroundStart = "rgb(19, 23, 50)",
	gradientBackgroundEnd = "rgb(10, 13, 31)",
	firstColor = "51, 78, 252",
	secondColor = "100, 159, 254",
	thirdColor = "0, 239, 174",
	fourthColor = "51, 78, 252",
	fifthColor = "100, 159, 254",
	pointerColor = "51, 78, 252",
	size = "80%",
	blendingValue = "hard-light",
	children,
	className,
	interactive = false,
	containerClassName,
}: {
	gradientBackgroundStart?: string;
	gradientBackgroundEnd?: string;
	firstColor?: string;
	secondColor?: string;
	thirdColor?: string;
	fourthColor?: string;
	fifthColor?: string;
	pointerColor?: string;
	size?: string;
	blendingValue?: string;
	children?: React.ReactNode;
	className?: string;
	interactive?: boolean;
	containerClassName?: string;
}) => {
	const interactiveRef = useRef<HTMLDivElement>(null);

	const [, setCurX] = useState(0);
	const [, setCurY] = useState(0);
	const [tgX, setTgX] = useState(0);
	const [tgY, setTgY] = useState(0);
	useEffect(() => {
		document.body.style.setProperty(
			"--gradient-background-start",
			gradientBackgroundStart
		);
		document.body.style.setProperty(
			"--gradient-background-end",
			gradientBackgroundEnd
		);
		document.body.style.setProperty("--first-color", firstColor);
		document.body.style.setProperty("--second-color", secondColor);
		document.body.style.setProperty("--third-color", thirdColor);
		document.body.style.setProperty("--fourth-color", fourthColor);
		document.body.style.setProperty("--fifth-color", fifthColor);
		document.body.style.setProperty("--pointer-color", pointerColor);
		document.body.style.setProperty("--size", size);
		document.body.style.setProperty("--blending-value", blendingValue);
	}, [
		gradientBackgroundStart,
		gradientBackgroundEnd,
		firstColor,
		secondColor,
		thirdColor,
		fourthColor,
		fifthColor,
		pointerColor,
		size,
		blendingValue,
	]);

	useEffect(() => {
		let animationFrameId: number;

		function animate() {
			if (!interactiveRef.current) {
				return;
			}

			setCurX((prevCurX) => {
				const newCurX = prevCurX + (tgX - prevCurX) / 20;
				setCurY((prevCurY) => {
					const newCurY = prevCurY + (tgY - prevCurY) / 20;
					if (interactiveRef.current) {
						interactiveRef.current.style.transform = `translate(${Math.round(
							newCurX
						)}px, ${Math.round(newCurY)}px)`;
					}
					return newCurY;
				});
				return newCurX;
			});

			animationFrameId = requestAnimationFrame(animate);
		}

		if (interactive) {
			animationFrameId = requestAnimationFrame(animate);
		}

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, [tgX, tgY, interactive]);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (interactiveRef.current) {
			const rect = interactiveRef.current.getBoundingClientRect();
			setTgX(event.clientX - rect.left);
			setTgY(event.clientY - rect.top);
		}
	};

	const isSafari = useMemo(() => {
		return (
			typeof navigator !== "undefined" &&
			/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
		);
	}, []);

	return (
		<div
			className={cn(
				"relative h-full w-full overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
				containerClassName
			)}
		>
			<svg className="hidden">
				<defs>
					<filter id="blurMe">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
			<div className={cn("", className)}>{children}</div>
			<div
				className={cn(
					"gradients-container h-full w-full",
					isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
				)}
			>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:center_center]`,
						`animate-first`,
						`opacity-100`
					)}
				></div>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:calc(50%-400px)]`,
						`animate-second`,
						`opacity-100`
					)}
				></div>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:calc(50%+400px)]`,
						`animate-third`,
						`opacity-100`
					)}
				></div>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:calc(50%-200px)]`,
						`animate-fourth`,
						`opacity-70`
					)}
				></div>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
						`[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
						`[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
						`animate-fifth`,
						`opacity-100`
					)}
				></div>

				{interactive && (
					<div
						ref={interactiveRef}
						onMouseMove={handleMouseMove}
						className={cn(
							`absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
							`[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
							`opacity-70`
						)}
					></div>
				)}
			</div>
		</div>
	);
};
