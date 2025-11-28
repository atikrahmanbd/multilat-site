"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface CyclingTypewriterProps {
	sentences: {
		words: {
			text: string;
			className?: string;
		}[];
	}[];
	className?: string;
	cursorClassName?: string;
	typingSpeed?: number;
	deletingSpeed?: number;
	pauseDuration?: number;
}

export function CyclingTypewriter({
	sentences,
	className,
	cursorClassName,
	typingSpeed = 80,
	deletingSpeed = 40,
	pauseDuration = 2000,
}: CyclingTypewriterProps) {
	const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);

	useEffect(() => {
		const currentSentence = sentences[currentSentenceIndex];
		const fullText = currentSentence.words.map((w) => w.text).join(" ");

		let timeout: NodeJS.Timeout;

		if (isWaiting) {
			timeout = setTimeout(() => {
				setIsWaiting(false);
				setIsDeleting(true);
			}, pauseDuration);
		} else if (!isDeleting && displayText === fullText) {
			timeout = setTimeout(() => {
				setIsWaiting(true);
			}, 0);
		} else if (isDeleting && displayText === "") {
			timeout = setTimeout(() => {
				setIsDeleting(false);
				setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
			}, 0);
		} else {
			timeout = setTimeout(
				() => {
					if (isDeleting) {
						setDisplayText(fullText.substring(0, displayText.length - 1));
					} else {
						setDisplayText(fullText.substring(0, displayText.length + 1));
					}
				},
				isDeleting ? deletingSpeed : typingSpeed
			);
		}

		return () => clearTimeout(timeout);
	}, [
		displayText,
		isDeleting,
		isWaiting,
		currentSentenceIndex,
		sentences,
		typingSpeed,
		deletingSpeed,
		pauseDuration,
	]);

	// Render Text With Proper Styling And Smooth Character Transitions
	const renderStyledText = () => {
		const currentSentence = sentences[currentSentenceIndex];

		let charCount = 0;
		return (
			<div
				key={currentSentenceIndex}
				className="inline-flex items-baseline whitespace-nowrap"
			>
				{currentSentence.words.map((word, idx) => {
					const wordStart = charCount;
					const wordEnd = charCount + word.text.length;
					charCount = wordEnd + 1; // +1 For Space

					// Calculate How Much Of This Word Should Be Visible
					const visibleLength = Math.max(
						0,
						Math.min(word.text.length, displayText.length - wordStart)
					);

					if (visibleLength === 0) return null;

					return (
						<span
							key={`${currentSentenceIndex}-${idx}`}
							className={cn(
								"inline-flex",
								word.className || "text-slate-700 dark:text-slate-300"
							)}
						>
							{word.text.split("").map((char, charIdx) => {
								const shouldShow = charIdx < visibleLength;
								return (
									<motion.span
										key={`${currentSentenceIndex}-${idx}-${charIdx}`}
										initial={{ opacity: 0 }}
										animate={{
											opacity: shouldShow ? 1 : 0,
										}}
										transition={{
											duration: 0.1,
											ease: "easeOut",
										}}
										className="inline-block"
									>
										{char}
									</motion.span>
								);
							})}
							{visibleLength === word.text.length &&
								idx < currentSentence.words.length - 1 && (
									<span className="inline-block">&nbsp;</span>
								)}
						</span>
					);
				})}
			</div>
		);
	};

	return (
		<div className={cn("flex justify-center items-center min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]", className)}>
			<div className="text-2xl md:text-4xl lg:text-6xl font-bold">
				<div className="inline-flex items-center">
					<AnimatePresence mode="wait">{renderStyledText()}</AnimatePresence>
					<motion.span
						animate={{ opacity: [1, 0, 1] }}
						transition={{
							duration: 0.8,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className={cn(
							"inline-block ml-1 w-[3px] h-8 md:h-12 lg:h-16 bg-primary",
							cursorClassName
						)}
					/>
				</div>
			</div>
		</div>
	);
}
