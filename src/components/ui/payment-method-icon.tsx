import Image from "next/image";
import { CSSProperties } from "react";

export type IconStyle = "flat" | "rounded" | "logo" | "outline";
export type IconTheme = "light" | "dark";

export interface PaymentMethodIconProps {
  /**
   * Name Of The SVG File (Without Extension)
   * Example: "bkash", "nagad", "visa"
   */
  icon: string;

  /**
   * Alternative Text For The Image
   */
  alt: string;

  /**
   * Style Variant Of The Icon
   * - flat: White Background With Gray Border And Small Rounded Corners
   * - rounded: White Background With Gray Border And Large Rounded Corners
   * - logo: Plain SVG Without Any Wrapper (Transparent Background)
   * - outline: White Background With Colored Border
   */
  style?: IconStyle;

  /**
   * Theme For The Icon (Affects Border And Background Colors)
   */
  theme?: IconTheme;

  /**
   * Width Of The Icon In Pixels
   */
  width?: number;

  /**
   * Height Of The Icon In Pixels
   */
  height?: number;

  /**
   * Border Radius (Used For Custom Styling)
   */
  borderRadius?: string | number;

  /**
   * Border Width In Pixels
   */
  borderWidth?: number;

  /**
   * Border Color (Hex, RGB, Or CSS Color Name)
   */
  borderColor?: string;

  /**
   * Background Color (Hex, RGB, Or CSS Color Name)
   */
  backgroundColor?: string;

  /**
   * Additional CSS Classes
   */
  className?: string;

  /**
   * Custom Inline Styles
   */
  customStyles?: CSSProperties;
}

export interface PaymentMethodIconGroupProps {
  /**
   * Array Of Icon Configuration Objects
   */
  icons: Array<{
    icon: string;
    alt: string;
    style?: IconStyle;
  }>;

  /**
   * Gap Between Icons In Pixels Or CSS Value
   */
  gap?: string | number;

  /**
   * Theme For All Icons
   */
  theme?: IconTheme;

  /**
   * Style Applied To All Icons
   */
  style?: IconStyle;

  /**
   * Width For All Icons
   */
  width?: number;

  /**
   * Height For All Icons
   */
  height?: number;

  /**
   * Border Radius For All Icons
   */
  borderRadius?: string | number;

  /**
   * Border Width For All Icons
   */
  borderWidth?: number;

  /**
   * Border Color For All Icons
   */
  borderColor?: string;

  /**
   * Background Color For All Icons
   */
  backgroundColor?: string;

  /**
   * Additional CSS Classes For Container
   */
  className?: string;
}

const DEFAULT_THEME_COLORS = {
  light: {
    border: "#DDDDDD",
    background: "#FFFFFF",
  },
  dark: {
    border: "#444444",
    background: "#1F1F1F",
  },
};

/**
 * PaymentMethodIcon Component
 *
 * Single Component To Display Payment Method Icons With Various Styles
 *
 * Usage:
 * ```tsx
 * <PaymentMethodIcon
 *   icon="bkash"
 *   alt="bKash"
 *   style="flat"
 *   width={72}
 *   height={48}
 * />
 * ```
 */
export const PaymentMethodIcon = ({
  icon,
  alt,
  style = "flat",
  theme = "light",
  width = 72,
  height = 48,
  borderRadius,
  borderWidth,
  borderColor,
  backgroundColor,
  className = "",
  customStyles = {},
}: PaymentMethodIconProps) => {
  const svgPath = `/payment-logos/${icon}.svg`;
  const themeColors = DEFAULT_THEME_COLORS[theme];

  // Logo Style - No Wrapper
  if (style === "logo") {
    return (
      <Image
        src={svgPath}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={customStyles}
      />
    );
  }

  // Determine Border Radius Based On Style
  const getBorderRadius = () => {
    if (borderRadius !== undefined) return borderRadius;
    if (style === "rounded") return "8px";
    return "3.5px";
  };

  // Determine Border Width
  const getBorderWidth = () => {
    if (borderWidth !== undefined) return `${borderWidth}px`;
    if (style === "outline") return "2px";
    return "1px";
  };

  // Determine Border Color
  const getBorderColor = () => {
    if (borderColor) return borderColor;
    return themeColors.border;
  };

  // Determine Background Color
  const getBackgroundColor = () => {
    if (backgroundColor) return backgroundColor;
    return themeColors.background;
  };

  const containerStyle: CSSProperties = {
    display: "inline-block",
    width,
    height,
    borderRadius: getBorderRadius(),
    border: `${getBorderWidth()} solid ${getBorderColor()}`,
    backgroundColor: getBackgroundColor(),
    ...customStyles,
  };

  return (
    <div className={className} style={containerStyle}>
      <Image
        src={svgPath}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

/**
 * PaymentMethodIconGroup Component
 *
 * Display Multiple Payment Method Icons In A Group With Consistent Styling
 *
 * Usage:
 * ```tsx
 * <PaymentMethodIconGroup
 *   icons={[
 *     { icon: "bkash", alt: "bKash" },
 *     { icon: "nagad", alt: "Nagad" },
 *     { icon: "rocket", alt: "Rocket" },
 *   ]}
 *   gap={16}
 *   style="flat"
 *   width={60}
 *   height={40}
 * />
 * ```
 */
export const PaymentMethodIconGroup = ({
  icons,
  gap = 16,
  theme = "light",
  style = "flat",
  width = 72,
  height = 48,
  borderRadius,
  borderWidth,
  borderColor,
  backgroundColor,
  className = "",
}: PaymentMethodIconGroupProps) => {
  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: typeof gap === "number" ? `${gap}px` : gap,
  };

  return (
    <div className={className} style={containerStyle}>
      {icons.map((iconConfig, index) => (
        <PaymentMethodIcon
          key={`${iconConfig.icon}-${index}`}
          icon={iconConfig.icon}
          alt={iconConfig.alt}
          style={iconConfig.style || style}
          theme={theme}
          width={width}
          height={height}
          borderRadius={borderRadius}
          borderWidth={borderWidth}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
};

export default PaymentMethodIcon;
