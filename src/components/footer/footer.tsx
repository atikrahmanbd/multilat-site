"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Linkedin as LinkedinIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
} from "lucide-react";
import { ThemeColorSwitch } from "@/components/theme-color-switch";
import { Spotlight } from "@/components/ui/spotlight";
import { PaymentMethods } from "@/components/footer/payment-methods";
import { cn } from "@/lib/utils";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  {
    href: "https://my.bst.com.bd/submitticket.php",
    label: "Report Abuse",
  },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/cookie-policy", label: "Cookie" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="border-t border-border bg-background">
      {/* Let's Talk Section */}
      <div className="relative border-b border-border/70 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="var(--primary)"
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Side - Contact Info */}
            <div className="text-center md:text-left">
              <p className="mb-2 text-sm sm:text-md font-semibold text-foreground">
                Looking To Collaborate or Need Expert Support?
              </p>
              <p className="mb-4 text-xs sm:text-sm text-muted-foreground">
                We are Here To Help! Reach Out Anytime, and Our Team Will Be
                Happy To Assist You.
              </p>
              <h2 className="mb-8 sm:mb-12 md:mb-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
                Let&apos;s Talk
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <p className="mb-1 text-xs sm:text-sm text-muted-foreground">
                    WhatApp Us:
                  </p>
                  <a
                    href="tel:+8801725414131"
                    className="text-lg sm:text-xl md:text-2xl font-semibold hover:text-primary transition-colors block"
                  >
                    +880-1725-414-131
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-xs sm:text-sm text-muted-foreground">
                    Go To Dashboard:
                  </p>
                  <a
                    href="https://my.bst.com.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl md:text-2xl font-semibold hover:text-primary transition-colors break-all block"
                  >
                    https://my.bst.com.bd
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Email And Social */}
            <div className="flex flex-col items-center justify-center lg:items-end lg:justify-end gap-12 sm:gap-16 md:gap-20 pt-8 sm:pt-10 md:pt-12">
              <a
                href="mailto:hello@bst.com.bd"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-regular hover:text-primary transition-colors break-all text-center lg:text-right"
              >
                hello@bst.com.bd
              </a>

              <div className="flex items-center gap-8 sm:gap-10 md:gap-12">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 hover:bg-secondary transition-all hover:scale-125 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 hover:bg-secondary transition-all hover:scale-125 hover:text-primary"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 hover:bg-secondary transition-all hover:scale-125 hover:text-primary"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Payment Methods And Color Switcher */}
          <div className="mt-12 sm:mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <PaymentMethods />
            <ThemeColorSwitch />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 sm:px-6 lg:px-8 opacity-90">
        <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            Copyrights © 2025,{" "}
            <span className="font-semibold text-foreground">Multilat</span> All
            Rights Reserved.
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "transition-colors",
                    pathname === link.href
                      ? "text-black dark:text-white font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="text-primary">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Multilat Attribution - Full Width */}
      <div className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-4 pt-4 pb-8 sm:py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <p className="text-[10px] sm:text-xs text-justify text-muted-foreground md:w-[60%]">
              <span className="font-semibold">
                Multilat - Your One-Stop Digital, Creative & Technology Solution
                Provider.
              </span>
            </p>

            <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 md:w-[40%] md:ml-auto">
              <span className="text-sm sm:text-md text-primary">By</span>
              <div className="w-0.5 h-5 sm:h-6 bg-muted-foreground" />
              <a
                href="https://multilat.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md py-1.5 transition-colors"
              >
                <Image
                  src="/logos/multilat-logo-for-light.svg"
                  alt="Multilat"
                  width={100}
                  height={30}
                  className="h-4 sm:h-5 w-auto dark:hidden"
                />
                <Image
                  src="/logos/multilat-logo-for-dark.svg"
                  alt="Multilat"
                  width={100}
                  height={30}
                  className="hidden h-4 sm:h-5 w-auto dark:block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
