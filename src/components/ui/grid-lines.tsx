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

// Helper To Get Line Position Style And Classes (Handles Edge Cases With Mobile Offset)
function getLinePositionConfig(position: number): {
  style: React.CSSProperties;
  className: string;
} {
  if (position === 0) {
    // Left edge: 16px offset on mobile/landscape, 0 on desktop (lg: 1024px+)
    return {
      style: {},
      className: "left-4 lg:left-0",
    };
  }
  if (position === 100) {
    // Right edge: 16px offset on mobile/landscape, 0 on desktop (lg: 1024px+)
    return {
      style: {},
      className: "right-4 lg:right-0",
    };
  }
  // Middle positions: use percentage
  return {
    style: { left: `${position}%` },
    className: "",
  };
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
          {linePositions.map((position, index) => {
            const posConfig = getLinePositionConfig(position);
            return (
              <div
                key={index}
                className={cn(
                  "absolute top-0 h-full w-px bg-foreground",
                  posConfig.className
                )}
                style={{
                  ...posConfig.style,
                  opacity: lineOpacity,
                }}
              />
            );
          })}
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

      {/* Content - Padding On Mobile/Landscape To Keep Content Inside Vertical Lines */}
      <div className="relative px-4 lg:px-0">{children}</div>
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
  // Get Position Config - Mobile/Landscape: Offset 4px So Center Aligns With 16px Line, Desktop (lg: 1024px+): Centered On Line
  const getPositionConfig = (): { className: string; style: React.CSSProperties } => {
    const yTransform = placement === "top" ? "-50%" : "50%";

    if (leftPercent === 0) {
      // Left edge: 4px offset on mobile/landscape (center at 16px), centered on line on desktop
      return {
        className: "left-1 lg:left-0 lg:-translate-x-1/2",
        style: {
          top: placement === "top" ? 0 : "auto",
          bottom: placement === "bottom" ? 0 : "auto",
          transform: `translateY(${yTransform})`,
        },
      };
    }
    if (leftPercent === 100) {
      // Right edge: 4px offset on mobile/landscape (center at 16px from right), centered on line on desktop
      return {
        className: "right-1 lg:right-auto lg:left-full lg:-translate-x-1/2",
        style: {
          top: placement === "top" ? 0 : "auto",
          bottom: placement === "bottom" ? 0 : "auto",
          transform: `translateY(${yTransform})`,
        },
      };
    }
    // Middle positions: always centered
    return {
      className: "",
      style: {
        left: `${leftPercent}%`,
        top: placement === "top" ? 0 : "auto",
        bottom: placement === "bottom" ? 0 : "auto",
        transform: `translateX(-50%) translateY(${yTransform})`,
      },
    };
  };

  const posConfig = getPositionConfig();

  return (
    <div
      className={cn(
        "group/plus pointer-events-auto absolute z-40 flex cursor-pointer items-center justify-center",
        posConfig.className
      )}
      style={{
        ...posConfig.style,
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
      {/* Vertical Line - No Mobile Offset (Used Inside Containers) */}
      <div
        className="absolute top-0 h-full w-px bg-foreground"
        style={{
          left: `${position}%`,
          opacity: lineOpacity,
        }}
      />

      {/* Top Plus - Centered On Line */}
      {showTopPlus && (
        <StaticPlusIcon
          size={plusSize}
          style={{
            left: `${position}%`,
            top: 0,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Bottom Plus - Centered On Line */}
      {showBottomPlus && (
        <StaticPlusIcon
          size={plusSize}
          style={{
            left: `${position}%`,
            top: "100%",
            transform: "translate(-50%, -50%)",
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
      {/* Horizontal Line - No Mobile Offset (Used Inside Containers) */}
      <div
        className="absolute left-0 right-0 h-px bg-foreground"
        style={{
          top: `${position}%`,
          opacity: lineOpacity,
        }}
      />

      {/* Left Plus - Centered On Line */}
      {showLeftPlus && (
        <StaticPlusIcon
          size={plusSize}
          style={{
            left: 0,
            top: `${position}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Right Plus - Centered On Line */}
      {showRightPlus && (
        <StaticPlusIcon
          size={plusSize}
          style={{
            left: "100%",
            top: `${position}%`,
            transform: "translate(-50%, -50%)",
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
          {/* Vertical Line - No Mobile Offset (Used Inside Containers) */}
          <div
            className="absolute top-0 h-full w-px bg-foreground"
            style={{
              left: `${line.position}%`,
              opacity: lineOpacity,
            }}
          />

          {/* Top Plus - Centered On Line */}
          {line.showTopPlus && (
            <StaticPlusIcon
              size={plusSize}
              style={{
                left: `${line.position}%`,
                top: 0,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}

          {/* Bottom Plus - Centered On Line */}
          {line.showBottomPlus && (
            <StaticPlusIcon
              size={plusSize}
              style={{
                left: `${line.position}%`,
                top: "100%",
                transform: "translate(-50%, -50%)",
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
          {/* Horizontal Line - No Mobile Offset (Used Inside Containers) */}
          <div
            className="absolute left-0 right-0 h-px bg-foreground"
            style={{
              top: `${line.position}%`,
              opacity: lineOpacity,
            }}
          />

          {/* Left Plus - Centered On Line */}
          {line.showLeftPlus && (
            <StaticPlusIcon
              size={plusSize}
              style={{
                left: 0,
                top: `${line.position}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}

          {/* Right Plus - Centered On Line */}
          {line.showRightPlus && (
            <StaticPlusIcon
              size={plusSize}
              style={{
                left: "100%",
                top: `${line.position}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
