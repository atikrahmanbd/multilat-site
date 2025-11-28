"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: NodeJS.Timeout;

type Card = {
  id: number;
  name?: string;
  designation?: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const totalOffset = (cards.length - 1) * CARD_OFFSET;
  const cardHeight = 180;

  return (
    <div className="w-full pb-4">
      <div
        className="relative w-full"
        style={{
          height: `${totalOffset + cardHeight}px`,
        }}
      >
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black bg-white w-full rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] overflow-hidden"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: totalOffset - index * CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              }}
            >
              {card.content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
