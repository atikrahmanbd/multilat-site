import { type IconStyle } from "@/components/ui/payment-method-icon";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PaymentMethodsProps {
  iconStyle?: IconStyle;
  iconWidth?: number;
  iconHeight?: number;
  borderColor?: string;
  borderWidth?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

const PAYMENT_ICONS = [
  // Bangladesh Payment Methods
  { icon: "bd/bkash", alt: "bKash" },
  { icon: "bd/nagad", alt: "Nagad" },
  { icon: "bd/rocket", alt: "Rocket" },
  { icon: "bd/upay", alt: "Upay" },
  // Major Cards
  { icon: "visa", alt: "Visa" },
  { icon: "mastercard", alt: "Mastercard" },
  { icon: "discover", alt: "Discover" },
  { icon: "unionpay", alt: "UnionPay" },
  { icon: "american-express", alt: "American Express" },
  // Digital Wallets
  { icon: "paypal", alt: "PayPal" },
  { icon: "google-pay", alt: "Google Pay" },
  // Bank Transfer
  { icon: "bd/bank-transfer", alt: "Bank Transfer" },
] as const;

export function PaymentMethods({
  iconStyle = "outline",
  iconWidth = 57,
  iconHeight = 38,
  borderColor = "border-border dark:border-black/50",
  borderWidth = "border-2 sm:border-2 sm:dark:border-3",
  backgroundColor = "bg-white dark:bg-white/90",
  borderRadius = "rounded-sm",
}: PaymentMethodsProps) {
  // Logo Style - No Wrapper
  if (iconStyle === "logo") {
    return (
      <div className="w-full grid grid-cols-6 sm:flex sm:flex-wrap items-center gap-0.5 sm:gap-2">
        {PAYMENT_ICONS.map(({ icon, alt }) => (
          <div key={icon} className="hover-shake w-full sm:w-auto flex justify-center">
            <Image
              src={`/payment-logos/${icon}.svg`}
              alt={alt}
              width={iconWidth}
              height={iconHeight}
              className="w-full max-w-[50px] h-auto sm:w-auto sm:h-[38px] sm:max-w-none"
            />
          </div>
        ))}
      </div>
    );
  }

  // Flat, Rounded, And Outline Styles With Tailwind Classes
  return (
    <div className="w-full grid grid-cols-6 sm:flex sm:flex-wrap items-center gap-y-3 sm:gap-2">
      {PAYMENT_ICONS.map(({ icon, alt }) => (
        <div key={icon} className="hover-shake w-full sm:w-auto flex justify-center">
          <div
            className={cn(
              "inline-block overflow-hidden w-full max-w-[50px] h-auto aspect-[57/38] sm:w-[57px] sm:h-[38px] sm:max-w-none sm:aspect-auto",
              borderWidth,
              borderColor,
              backgroundColor,
              borderRadius
            )}
          >
            <Image
              src={`/payment-logos/${icon}.svg`}
              alt={alt}
              width={iconWidth}
              height={iconHeight}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
