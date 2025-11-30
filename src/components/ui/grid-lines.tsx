"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

/**
 * Z-INDEX HIERARCHY:
 * - Navbar dropdown: z-50, z-60, z-70 (highest)
 * - Plus icons: z-40 (below navbar, above content)
 * - Content: z-10 (above lines)
 * - Lines/borders: z-[5] (below content, above background)
 *
 * Plus icons use React Portal to escape overflow:hidden containers
 */

// ============================================
// GRID LINES SECTION - Main Wrapper
// ============================================

interface GridLinesSectionProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Line positions as percentages (0-100).
   * Examples:
   * - [0, 100] = 2 lines at edges
   * - [0, 50, 100] = 3 lines evenly distributed
   * - [0, 50, 75, 100] = lines at 0%, 50%, 75%, 100% (2/4, 1/4, 1/4 distribution)
   */
  linePositions?: number[];
  lineOpacity?: number;
  showTopIntersections?: boolean;
  showBottomIntersections?: boolean;
  plusSize?: number;
  /** If true, lines span full viewport width instead of max-w-7xl */
  fullWidth?: boolean;
}

// Helper To Get Line Position Style (Handles Edge Cases)
function getLinePositionStyle(position: number): React.CSSProperties {
  if (position === 0) {
    return { left: 0 };
  }
  if (position === 100) {
    return { right: 0 };
  }
  return { left: `${position}%` };
}

export function GridLinesSection({
  children,
  className,
  linePositions = [0, 100],
  lineOpacity = 0.1,
  showTopIntersections = true,
  showBottomIntersections = true,
  plusSize = 24,
  fullWidth = false,
}: GridLinesSectionProps) {
  const containerClass = fullWidth ? "" : "mx-auto max-w-7xl";

  return (
    <section className={cn("relative overflow-visible", className)}>
      {/* Horizontal Border Lines */}
      {showTopIntersections && (
        <div
          className="absolute left-0 right-0 top-0 z-[5] h-px bg-foreground"
          style={{ opacity: lineOpacity }}
        />
      )}
      {showBottomIntersections && (
        <div
          className="absolute bottom-0 left-0 right-0 z-[5] h-px bg-foreground"
          style={{ opacity: lineOpacity }}
        />
      )}

      {/* Vertical Lines */}
      <div className={cn("pointer-events-none absolute inset-0 z-[5]", containerClass)}>
        <div className="relative h-full w-full">
          {linePositions.map((position, index) => (
            <div
              key={index}
              className="absolute top-0 h-full w-px bg-foreground"
              style={{
                ...getLinePositionStyle(position),
                opacity: lineOpacity,
              }}
            />
          ))}
        </div>
      </div>

      {/* Top Intersections - Plus Icons Layer */}
      {showTopIntersections && (
        <div className={cn("absolute left-0 right-0 top-0 z-40", containerClass)}>
          <div className="relative h-0 w-full">
            {linePositions.map((position, index) => (
              <IntersectionPlus
                key={`top-${index}`}
                leftPercent={position}
                placement="top"
                size={plusSize}
              />
            ))}
          </div>
        </div>
      )}

      {/* Bottom Intersections - Plus Icons Layer */}
      {showBottomIntersections && (
        <div className={cn("absolute bottom-0 left-0 right-0 z-40", containerClass)}>
          <div className="relative h-0 w-full">
            {linePositions.map((position, index) => (
              <IntersectionPlus
                key={`bottom-${index}`}
                leftPercent={position}
                placement="bottom"
                size={plusSize}
              />
            ))}
          </div>
        </div>
      )}

      {/* Content - No z-index wrapper so children can layer properly with lines */}
      <div className="relative">{children}</div>
    </section>
  );
}

// Legacy export for backward compatibility
export { GridLinesSection as VerticalLinesSection };

interface IntersectionPlusProps {
  leftPercent: number;
  placement: "top" | "bottom";
  size: number;
}

function IntersectionPlus({
  leftPercent,
  placement,
  size,
}: IntersectionPlusProps) {
  // Handle Edge Cases For 0% And 100%
  const getHorizontalPosition = (): React.CSSProperties => {
    if (leftPercent === 0) {
      return { left: 0, transform: `translateX(calc(-50% + 0.5px))` };
    }
    if (leftPercent === 100) {
      return { right: 0, transform: `translateX(calc(50% - 0.5px))` };
    }
    return { left: `${leftPercent}%`, transform: `translateX(calc(-50% + 0.5px))` };
  };

  const horizontalPos = getHorizontalPosition();

  return (
    <div
      className="group/plus pointer-events-auto absolute z-40 flex cursor-pointer items-center justify-center"
      style={{
        ...horizontalPos,
        top: placement === "top" ? 0 : "auto",
        bottom: placement === "bottom" ? 0 : "auto",
        transform: `${horizontalPos.transform} translateY(${
          placement === "top" ? "calc(-50% + 0.5px)" : "calc(50% - 0.5px)"
        })`,
        width: size,
        height: size,
      }}
    >
      {/* Ripple Effect - Single Ping On Hover */}
      <span className="ping-on-hover absolute inset-0 rounded-full bg-primary" />

      {/* Plus Icon */}
      <Plus
        size={size}
        strokeWidth={1.5}
        className="relative z-10 text-primary transition-all duration-300 ease-out group-hover/plus:scale-110"
      />
    </div>
  );
}

// ============================================
// STATIC PLUS ICON - For Line Intersections
// ============================================

interface StaticPlusIconProps {
  size: number;
  style?: React.CSSProperties;
  className?: string;
}

export function StaticPlusIcon({ size, style, className }: StaticPlusIconProps) {
  return (
    <div
      className={cn(
        "group/plus pointer-events-auto absolute z-40 flex cursor-pointer items-center justify-center",
        className
      )}
      style={{
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        ...style,
      }}
    >
      {/* Ripple Effect */}
      <span className="ping-on-hover absolute inset-0 rounded-full bg-primary" />

      {/* Plus Icon */}
      <Plus
        size={size}
        strokeWidth={1.5}
        className="relative z-10 text-primary transition-all duration-300 ease-out group-hover/plus:scale-110"
      />
    </div>
  );
}

// ============================================
// SINGLE VERTICAL LINE - For Subsections
// ============================================

interface SingleVerticalLineProps {
  className?: string;
  /** Position as percentage (0-100) from left */
  position?: number;
  lineOpacity?: number;
  showTopPlus?: boolean;
  showBottomPlus?: boolean;
  plusSize?: number;
}

export function SingleVerticalLine({
  className,
  position = 50,
  lineOpacity = 0.1,
  showTopPlus = false,
  showBottomPlus = false,
  plusSize = 24,
}: SingleVerticalLineProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 z-[5]", className)}>
      {/* Vertical Line */}
      <div
        className="absolute top-0 h-full w-px bg-foreground"
        style={{
          left: `${position}%`,
          opacity: lineOpacity,
        }}
      />

      {/* Top Plus */}
      {showTopPlus && (
        <StaticPlusIcon
          size={plusSize}
          style={{
            left: `${position}%`,
            top: 0,
          }}
        />
      )}

      {/* Bottom Plus */}
      {showBottomPlus && (
        <StaticPlusIcon
          size={plusSize}
          style={{
            left: `${position}%`,
            top: "100%",
          }}
        />
      )}
    </div>
  );
}

// ============================================
// SINGLE HORIZONTAL LINE - For Subsections
// ============================================

interface SingleHorizontalLineProps {
  className?: string;
  /** Position as percentage (0-100) from top */
  position?: number;
  lineOpacity?: number;
  showLeftPlus?: boolean;
  showRightPlus?: boolean;
  plusSize?: number;
}

export function SingleHorizontalLine({
  className,
  position = 50,
  lineOpacity = 0.1,
  showLeftPlus = false,
  showRightPlus = false,
  plusSize = 24,
}: SingleHorizontalLineProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 z-[5]", className)}>
      {/* Horizontal Line */}
      <div
        className="absolute left-0 right-0 h-px bg-foreground"
        style={{
          top: `${position}%`,
          opacity: lineOpacity,
        }}
      />

      {/* Left Plus */}
      {showLeftPlus && (
        <StaticPlusIcon
          size={plusSize}
          style={{
            left: 0,
            top: `${position}%`,
          }}
        />
      )}

      {/* Right Plus */}
      {showRightPlus && (
        <StaticPlusIcon
          size={plusSize}
          style={{
            left: "100%",
            top: `${position}%`,
          }}
        />
      )}
    </div>
  );
}

// ============================================
// MULTIPLE VERTICAL LINES - For Multiple Dividers
// ============================================

interface VerticalLineConfig {
  position: number;
  showTopPlus?: boolean;
  showBottomPlus?: boolean;
}

interface MultipleVerticalLinesProps {
  className?: string;
  /** Array of positions (0-100) - uses shared plus settings */
  positions?: number[];
  /** Array of line configs - allows per-line plus settings */
  lines?: VerticalLineConfig[];
  lineOpacity?: number;
  /** Shared setting for all lines (used with positions array) */
  showTopPlus?: boolean;
  /** Shared setting for all lines (used with positions array) */
  showBottomPlus?: boolean;
  plusSize?: number;
}

export function MultipleVerticalLines({
  className,
  positions,
  lines,
  lineOpacity = 0.1,
  showTopPlus = false,
  showBottomPlus = false,
  plusSize = 24,
}: MultipleVerticalLinesProps) {
  // Convert positions array to lines config if provided
  const lineConfigs: VerticalLineConfig[] =
    lines ||
    positions?.map((position) => ({
      position,
      showTopPlus,
      showBottomPlus,
    })) ||
    [];

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-[5]", className)}>
      {lineConfigs.map((line, index) => (
        <div key={index}>
          {/* Vertical Line */}
          <div
            className="absolute top-0 h-full w-px bg-foreground"
            style={{
              left: `${line.position}%`,
              opacity: lineOpacity,
            }}
          />

          {/* Top Plus */}
          {line.showTopPlus && (
            <StaticPlusIcon
              size={plusSize}
              style={{
                left: `${line.position}%`,
                top: 0,
              }}
            />
          )}

          {/* Bottom Plus */}
          {line.showBottomPlus && (
            <StaticPlusIcon
              size={plusSize}
              style={{
                left: `${line.position}%`,
                top: "100%",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================
// MULTIPLE HORIZONTAL LINES - For Multiple Dividers
// ============================================

interface HorizontalLineConfig {
  position: number;
  showLeftPlus?: boolean;
  showRightPlus?: boolean;
}

interface MultipleHorizontalLinesProps {
  className?: string;
  /** Array of positions (0-100) - uses shared plus settings */
  positions?: number[];
  /** Array of line configs - allows per-line plus settings */
  lines?: HorizontalLineConfig[];
  lineOpacity?: number;
  /** Shared setting for all lines (used with positions array) */
  showLeftPlus?: boolean;
  /** Shared setting for all lines (used with positions array) */
  showRightPlus?: boolean;
  plusSize?: number;
}

export function MultipleHorizontalLines({
  className,
  positions,
  lines,
  lineOpacity = 0.1,
  showLeftPlus = false,
  showRightPlus = false,
  plusSize = 24,
}: MultipleHorizontalLinesProps) {
  // Convert positions array to lines config if provided
  const lineConfigs: HorizontalLineConfig[] =
    lines ||
    positions?.map((position) => ({
      position,
      showLeftPlus,
      showRightPlus,
    })) ||
    [];

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-[5]", className)}>
      {lineConfigs.map((line, index) => (
        <div key={index}>
          {/* Horizontal Line */}
          <div
            className="absolute left-0 right-0 h-px bg-foreground"
            style={{
              top: `${line.position}%`,
              opacity: lineOpacity,
            }}
          />

          {/* Left Plus */}
          {line.showLeftPlus && (
            <StaticPlusIcon
              size={plusSize}
              style={{
                left: 0,
                top: `${line.position}%`,
              }}
            />
          )}

          {/* Right Plus */}
          {line.showRightPlus && (
            <StaticPlusIcon
              size={plusSize}
              style={{
                left: "100%",
                top: `${line.position}%`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
