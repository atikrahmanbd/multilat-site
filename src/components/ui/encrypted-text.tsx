"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
	text: string;
	className?: string;
	/**
	 * Time In Milliseconds Between Revealing Each Subsequent Real Character.
	 * Lower Is Faster. Defaults To 50ms Per Character.
	 */
	revealDelayMs?: number;
	/** Optional Custom Character Set To Use For The Gibberish Effect. */
	charset?: string;
	/**
	 * Time In Milliseconds Between Gibberish Flips For Unrevealed Characters.
	 * Lower Is More Jittery. Defaults To 50ms.
	 */
	flipDelayMs?: number;
	/** CSS Class For Styling The Encrypted/Scrambled Characters */
	encryptedClassName?: string;
	/** CSS Class For Styling The Revealed Characters */
	revealedClassName?: string;
};

const DEFAULT_CHARSET =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
	const index = Math.floor(Math.random() * charset.length);
	return charset.charAt(index);
}

function generateGibberishPreservingSpaces(
	original: string,
	charset: string,
): string {
	if (!original) return "";
	let result = "";
	for (let i = 0; i < original.length; i += 1) {
		const ch = original[i];
		result += ch === " " ? " " : generateRandomCharacter(charset);
	}
	return result;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
	text,
	className,
	revealDelayMs = 50,
	charset = DEFAULT_CHARSET,
	flipDelayMs = 50,
	encryptedClassName,
	revealedClassName,
}) => {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	const initialScramble = useMemo(
		() =>
			text ? generateGibberishPreservingSpaces(text, charset).split("") : [],
		[text, charset]
	);

	const [revealCount, setRevealCount] = useState<number>(0);
	const [scrambleChars, setScrambleChars] = useState<string[]>(initialScramble);
	const scrambleCharsRef = useRef<string[]>(initialScramble);
	const animationFrameRef = useRef<number | null>(null);
	const startTimeRef = useRef<number>(0);
	const lastFlipTimeRef = useRef<number>(0);
	const forceUpdateCounterRef = useRef<number>(0);

	useEffect(() => {
		if (!isInView) return;

		// Reset State For A Fresh Animation Whenever Dependencies Change
		scrambleCharsRef.current = initialScramble;
		startTimeRef.current = performance.now();
		lastFlipTimeRef.current = startTimeRef.current;

		let isCancelled = false;
		let currentReveal = 0;

		const update = (now: number) => {
			if (isCancelled) return;

			const elapsedMs = now - startTimeRef.current;
			const totalLength = text.length;
			const newRevealCount = Math.min(
				totalLength,
				Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
			);

			if (newRevealCount !== currentReveal) {
				currentReveal = newRevealCount;
				setRevealCount(newRevealCount);
			}

			if (newRevealCount >= totalLength) {
				return;
			}

			// Re-Randomize Unrevealed Scramble Characters On An Interval
			const timeSinceLastFlip = now - lastFlipTimeRef.current;
			if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
				for (let index = 0; index < totalLength; index += 1) {
					if (index >= newRevealCount) {
						if (text[index] !== " ") {
							scrambleCharsRef.current[index] =
								generateRandomCharacter(charset);
						} else {
							scrambleCharsRef.current[index] = " ";
						}
					}
				}
				// Update State Only Every Few Frames For Performance
				forceUpdateCounterRef.current += 1;
				if (forceUpdateCounterRef.current % 2 === 0) {
					setScrambleChars([...scrambleCharsRef.current]);
				}
				lastFlipTimeRef.current = now;
			}

			animationFrameRef.current = requestAnimationFrame(update);
		};

		animationFrameRef.current = requestAnimationFrame(update);

		return () => {
			isCancelled = true;
			if (animationFrameRef.current !== null) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [isInView, text, revealDelayMs, charset, flipDelayMs, initialScramble]);

	if (!text) return null;

	return (
		<motion.span
			ref={ref}
			className={cn(className)}
			aria-label={text}
			role="text"
			suppressHydrationWarning
		>
			{text.split("").map((char, index) => {
				const isRevealed = index < revealCount;
				const displayChar = isRevealed
					? char
					: char === " "
					? " "
					: (scrambleChars[index] ?? generateRandomCharacter(charset));

				return (
					<span
						key={index}
						className={cn(isRevealed ? revealedClassName : encryptedClassName)}
						suppressHydrationWarning
					>
						{displayChar}
					</span>
				);
			})}
		</motion.span>
	);
};
