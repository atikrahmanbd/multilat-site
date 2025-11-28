"use client";

import { useState } from "react";
import {
  PaymentMethodIcon,
  IconStyle,
} from "@/components/ui/payment-method-icon";

export default function ShowcasePaymentIcons() {
  const [selectedStyle, setSelectedStyle] = useState<IconStyle>("flat");
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

  // Bangladesh Payment Methods
  const bangladeshMethods = [
    { icon: "bd/bkash", alt: "bKash" },
    { icon: "bd/nagad", alt: "Nagad" },
    { icon: "bd/rocket", alt: "Rocket" },
    { icon: "bd/upay", alt: "Upay" },
    { icon: "bd/bank-transfer", alt: "Bank Transfer" },
  ];

  // Major Credit & Debit Cards
  const creditDebitCards = [
    { icon: "visa", alt: "Visa" },
    { icon: "mastercard", alt: "Mastercard" },
    { icon: "american-express", alt: "American Express" },
    { icon: "discover", alt: "Discover" },
    { icon: "dinersclub", alt: "Diners Club" },
    { icon: "jcb", alt: "JCB" },
    { icon: "unionpay", alt: "UnionPay" },
    { icon: "maestro", alt: "Maestro" },
    { icon: "elo", alt: "Elo" },
    { icon: "cartes-bancaires", alt: "Cartes Bancaires" },
    { icon: "interac", alt: "Interac" },
  ];

  // Digital Wallets
  const digitalWallets = [
    { icon: "paypal", alt: "PayPal" },
    { icon: "apple-pay", alt: "Apple Pay" },
    { icon: "google-pay", alt: "Google Pay" },
    { icon: "samsung-pay", alt: "Samsung Pay" },
    { icon: "amazon-pay", alt: "Amazon Pay" },
    { icon: "facebook-pay", alt: "Facebook Pay" },
    { icon: "venmo", alt: "Venmo" },
    { icon: "alipay", alt: "Alipay" },
    { icon: "wechat-pay", alt: "WeChat Pay" },
    { icon: "kakaopay", alt: "KakaoPay" },
    { icon: "paypay", alt: "PayPay" },
    { icon: "line-pay", alt: "LINE Pay" },
    { icon: "jko-pay", alt: "JKO Pay" },
  ];

  // Payment Gateways & Processors
  const paymentGateways = [
    { icon: "stripe", alt: "Stripe" },
    { icon: "square", alt: "Square" },
    { icon: "authorize.net", alt: "Authorize.net" },
    { icon: "payoneer", alt: "Payoneer" },
    { icon: "skrill", alt: "Skrill" },
    { icon: "worldpay", alt: "Worldpay" },
    { icon: "wepay", alt: "WePay" },
    { icon: "paysafe", alt: "Paysafe" },
    { icon: "bitpay", alt: "BitPay" },
    { icon: "Verifone", alt: "Verifone" },
    { icon: "payline", alt: "Payline" },
  ];

  // Buy Now Pay Later & Financing
  const bnplServices = [
    { icon: "klarna", alt: "Klarna" },
    { icon: "affirm", alt: "Affirm" },
    { icon: "shop-pay", alt: "Shop Pay" },
  ];

  // Bank Transfer & Local Methods
  const bankTransferMethods = [
    { icon: "sepa", alt: "SEPA" },
    { icon: "ideal", alt: "iDEAL" },
    { icon: "sofort", alt: "Sofort" },
    { icon: "giropay", alt: "Giropay" },
    { icon: "bancontact", alt: "Bancontact" },
    { icon: "poli", alt: "POLi" },
    { icon: "qiwi", alt: "QIWI" },
    { icon: "webmoney", alt: "WebMoney" },
    { icon: "zelle", alt: "Zelle" },
    { icon: "citadele", alt: "Citadele" },
    { icon: "forbrugsforeningen", alt: "Forbrugsforeningen" },
    { icon: "tappay", alt: "TapPay" },
  ];

  // Cryptocurrencies
  const cryptocurrencies = [
    { icon: "bitcoin", alt: "Bitcoin" },
    { icon: "ethereum", alt: "Ethereum" },
    { icon: "bitcoin-cash", alt: "Bitcoin Cash" },
    { icon: "light-coin", alt: "Litecoin" },
  ];

  const styles: IconStyle[] = ["flat", "rounded", "logo", "outline"];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Payment Method Icons
          </h1>
          <p className="mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Complete Collection Of Payment Method Icons With Customizable Styles
          </p>
        </div>

        {/* Controls */}
        <section className="bg-card p-6 rounded-lg border sticky top-4 z-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Style Selector */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                Icon Style
              </h2>
              <div className="flex gap-2 flex-wrap">
                {styles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`px-4 py-2 rounded-lg border transition-colors text-sm ${
                      selectedStyle === style
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-card text-foreground border-border hover:bg-accent"
                    }`}
                  >
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Selector */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                Theme
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedTheme("light")}
                  className={`px-4 py-2 rounded-lg border transition-colors text-sm ${
                    selectedTheme === "light"
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-card text-foreground border-border hover:bg-accent"
                  }`}
                >
                  Light
                </button>
                <button
                  onClick={() => setSelectedTheme("dark")}
                  className={`px-4 py-2 rounded-lg border transition-colors text-sm ${
                    selectedTheme === "dark"
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-card text-foreground border-border hover:bg-accent"
                  }`}
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bangladesh Payment Methods */}
        <section className="space-y-4 bg-card p-6 rounded-lg border">
          <div>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              Bangladesh Payment Methods
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {bangladeshMethods.length} Methods Available
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {bangladeshMethods.map((method) => (
              <div
                key={method.icon}
                className="flex flex-col items-center space-y-2 p-3"
              >
                <PaymentMethodIcon
                  icon={method.icon}
                  alt={method.alt}
                  style={selectedStyle}
                  theme={selectedTheme}
                  width={72}
                  height={48}
                />
                <p className="text-xs font-medium text-center text-muted-foreground">
                  {method.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Credit & Debit Cards */}
        <section className="space-y-4 bg-card p-6 rounded-lg border">
          <div>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              Credit & Debit Cards
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {creditDebitCards.length} Card Networks
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {creditDebitCards.map((card) => (
              <div
                key={card.icon}
                className="flex flex-col items-center space-y-2 p-3"
              >
                <PaymentMethodIcon
                  icon={card.icon}
                  alt={card.alt}
                  style={selectedStyle}
                  theme={selectedTheme}
                  width={72}
                  height={48}
                />
                <p className="text-xs font-medium text-center text-muted-foreground">
                  {card.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Digital Wallets */}
        <section className="space-y-4 bg-card p-6 rounded-lg border">
          <div>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              Digital Wallets
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {digitalWallets.length} Digital Wallet Services
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {digitalWallets.map((wallet) => (
              <div
                key={wallet.icon}
                className="flex flex-col items-center space-y-2 p-3"
              >
                <PaymentMethodIcon
                  icon={wallet.icon}
                  alt={wallet.alt}
                  style={selectedStyle}
                  theme={selectedTheme}
                  width={72}
                  height={48}
                />
                <p className="text-xs font-medium text-center text-muted-foreground">
                  {wallet.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Gateways */}
        <section className="space-y-4 bg-card p-6 rounded-lg border">
          <div>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              Payment Gateways & Processors
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {paymentGateways.length} Gateway Services
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {paymentGateways.map((gateway) => (
              <div
                key={gateway.icon}
                className="flex flex-col items-center space-y-2 p-3"
              >
                <PaymentMethodIcon
                  icon={gateway.icon}
                  alt={gateway.alt}
                  style={selectedStyle}
                  theme={selectedTheme}
                  width={72}
                  height={48}
                />
                <p className="text-xs font-medium text-center text-muted-foreground">
                  {gateway.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BNPL Services */}
        <section className="space-y-4 bg-card p-6 rounded-lg border">
          <div>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              Buy Now Pay Later
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {bnplServices.length} BNPL Services
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {bnplServices.map((service) => (
              <div
                key={service.icon}
                className="flex flex-col items-center space-y-2 p-3"
              >
                <PaymentMethodIcon
                  icon={service.icon}
                  alt={service.alt}
                  style={selectedStyle}
                  theme={selectedTheme}
                  width={72}
                  height={48}
                />
                <p className="text-xs font-medium text-center text-muted-foreground">
                  {service.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bank Transfer & Local Methods */}
        <section className="space-y-4 bg-card p-6 rounded-lg border">
          <div>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              Bank Transfer & Local Payment Methods
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {bankTransferMethods.length} Local Payment Methods
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {bankTransferMethods.map((method) => (
              <div
                key={method.icon}
                className="flex flex-col items-center space-y-2 p-3"
              >
                <PaymentMethodIcon
                  icon={method.icon}
                  alt={method.alt}
                  style={selectedStyle}
                  theme={selectedTheme}
                  width={72}
                  height={48}
                />
                <p className="text-xs font-medium text-center text-muted-foreground">
                  {method.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cryptocurrencies */}
        <section className="space-y-4 bg-card p-6 rounded-lg border">
          <div>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              Cryptocurrencies
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {cryptocurrencies.length} Cryptocurrency Options
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cryptocurrencies.map((crypto) => (
              <div
                key={crypto.icon}
                className="flex flex-col items-center space-y-2 p-3"
              >
                <PaymentMethodIcon
                  icon={crypto.icon}
                  alt={crypto.alt}
                  style={selectedStyle}
                  theme={selectedTheme}
                  width={72}
                  height={48}
                />
                <p className="text-xs font-medium text-center text-muted-foreground">
                  {crypto.alt}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Example */}
        <section className="space-y-4 bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
            Usage Example
          </h2>
          <div className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-green-400">
              {`import { PaymentMethodIcon } from '@/components/ui/payment-method-icon';
              <PaymentMethodIcon
                icon="bd/bkash"
                alt="bKash"
                style="${selectedStyle}"
                theme="${selectedTheme}"
                width={72}
                height={48}
              />`}
            </code>
          </div>
        </section>

        {/* Footer Stats */}
        <div className="text-center text-muted-foreground text-sm pb-8">
          <p className="font-semibold">
            Total:{" "}
            {bangladeshMethods.length +
              creditDebitCards.length +
              digitalWallets.length +
              paymentGateways.length +
              bnplServices.length +
              bankTransferMethods.length +
              cryptocurrencies.length}{" "}
            Payment Methods Available
          </p>
        </div>
      </div>
    </div>
  );
}
