"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffectBrand = ({
  duration,
}: {
  text?: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [pathLengths, setPathLengths] = useState<number[]>([]);

  useEffect(() => {
    const lengths = pathRefs.current.map((path) => path?.getTotalLength() || 0);
    setPathLengths(lengths);
  }, []);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  const pathsData = [
    "M58.34,287.34H2V2.1h87.95l52.61,224.28L194.78,2.1h86.97v285.24h-56.34V94.4c0-5.55.06-13.32.2-23.32.13-10,.2-17.71.2-23.12l-54.77,239.38h-58.7L57.95,47.96c0,5.42.06,13.13.2,23.12.13,10,.2,17.77.2,23.32v192.93Z",
    "M507.65,173.02V2.1h59.85v170.92c0,29.56-4.65,52.57-13.96,69.05-17.34,30.18-50.42,45.28-99.25,45.28s-81.98-15.09-99.44-45.28c-9.31-16.47-13.96-39.49-13.96-69.05V2.1h59.86v170.92c0,19.12,2.29,33.08,6.88,41.88,7.14,15.6,22.69,23.39,46.66,23.39s39.33-7.8,46.47-23.39c4.59-8.8,6.88-22.76,6.88-41.88Z",
    "M628.23,2.1h60.46v233.96h143.31v51.28h-203.77V2.1Z",
    "M1054.42,2.1v50.51h-86.57v234.73h-60.86V52.61h-86.97V2.1h234.39Z",
    "M1085.05,2.1h60.07v285.24h-60.07V2.1Z",
    "M1201.46,2.1h60.46v233.96h143.31v51.28h-203.77V2.1Z",
    "M1616.47,228.7h-106.6l-20.02,58.63h-63.21L1529.89,2.1h68.32l102.47,285.24h-65.57l-18.65-58.63ZM1599.58,179.55l-36.12-112.24-37.3,112.24h73.42Z",
    "M1918,2.1v50.51h-86.57v234.73h-60.86V52.61h-86.97V2.1h234.4Z",
  ];

  return (
    <svg
      ref={svgRef}
      width="100%"
      viewBox="0 -8 1920 290"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none w-full"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient
          id="textGradient"
          x1="0"
          y1="0"
          x2="1920"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          {/* Multilat Brand Colors: Primary (Vivid Blue) → Secondary (Light Blue) → Accent (Aqua Green) */}
          <stop offset="0%" stopColor="#334EFC" />
          <stop offset="50%" stopColor="#649FFE" />
          <stop offset="100%" stopColor="#00EFAE" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}

          // example for a smoother animation below

          //   transition={{
          //     type: "spring",
          //     stiffness: 300,
          //     damping: 50,
          //   }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      {pathsData.map((path, index) => (
        <path
          key={`bg-${index}`}
          d={path}
          fill="none"
          strokeWidth="2"
          className="stroke-neutral-200 dark:stroke-neutral-800"
          style={{ opacity: hovered ? 0.7 : 0 }}
        />
      ))}

      {pathsData.map((path, index) => {
        const length = pathLengths[index] || 2000;
        return (
          <motion.path
            key={`main-${index}`}
            ref={(el) => {
              pathRefs.current[index] = el;
            }}
            d={path}
            fill="none"
            strokeWidth="2"
            className="stroke-neutral-200 dark:stroke-neutral-800"
            initial={{ strokeDashoffset: length, strokeDasharray: length }}
            animate={{
              strokeDashoffset: 0,
              strokeDasharray: length,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {hovered && (
        <g mask="url(#textMask)">
          {pathsData.map((path, index) => (
            <path
              key={`hover-${index}`}
              d={path}
              fill="none"
              strokeWidth="1.5"
              stroke="url(#textGradient)"
            />
          ))}
        </g>
      )}
    </svg>
  );
};
