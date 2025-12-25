"use client";

import {
  ChevronDownIcon,
  GlobeIcon,
  ShieldIcon,
  RefreshCwIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import GradientText from "../ui/gradient-text";

export const items = [
  // -------------------------------------
  // 1. DOMAIN REGISTRATION
  // -------------------------------------
  {
    category: "Domain Registration",
    icon: GlobeIcon,
    faqs: [
      {
        title: "How Do I Register A Domain Name?",
        content:
          "Simply Search For Your Desired Domain Name, Check Availability, Add To Cart, and Complete The Payment. Your Domain Will Be Activated Instantly After Payment Confirmation.",
      },
      {
        title: "What Domain Extensions Do You Offer?",
        content:
          "We Offer 550+ Domain Extensions Including .com, .net, .org, .bd, .xyz, .tech, .app, .dev, .io, And Many More Country-Code and Special TLDs.",
      },
      {
        title: "Can I Register Multiple Domains At Once?",
        content:
          "Yes. You Can Search For Multiple Domain Names, Add Them To Your Cart, and Complete Registration In A Single Transaction With Bulk Discount Options.",
      },
      {
        title: "How Long Does Domain Activation Take?",
        content:
          "Most Domains Are Activated Within Minutes After Payment. Some Country-Code Domains Like .bd May Require Additional Verification and Take 1-3 Business Days.",
      },
      {
        title: "Can I Register A Domain Without Hosting?",
        content:
          "Yes. You Can Register A Domain Independently Without Purchasing Hosting. You Can Point It To Any Hosting Provider Or Use It For Email Forwarding.",
      },
    ],
  },

  // -------------------------------------
  // 2. DOMAIN TRANSFER
  // -------------------------------------
  {
    category: "Domain Transfer",
    icon: RefreshCwIcon,
    faqs: [
      {
        title: "How Do I Transfer My Domain To Multilat?",
        content:
          "First, Unlock Your Domain At Your Current Registrar, Obtain The EPP/Auth Code, Then Initiate The Transfer From Your Multilat Dashboard By Entering The Domain Name and Auth Code.",
      },
      {
        title: "How Long Does A Domain Transfer Take?",
        content:
          "Most Domain Transfers Complete Within 5-7 Days. The Duration Depends On Your Current Registrar's Approval Process and Domain Extension Policies.",
      },
      {
        title: "Will My Website Go Down During Transfer?",
        content:
          "No. Domain Transfers Do Not Affect Your Website Or Email Services. Your DNS Settings Remain Unchanged Unless You Modify Them After Transfer Completion.",
      },
      {
        title: "Do I Get An Additional Year When Transferring?",
        content:
          "Yes. Most Domain Transfers Include A Free 1-Year Extension Added To Your Current Expiration Date As Per ICANN Policy.",
      },
      {
        title: "What If My Transfer Fails?",
        content:
          "If A Transfer Fails, The Full Amount Is Refunded To Your Account. Common Reasons Include Invalid Auth Code, Domain Lock, or Missing Transfer Approval From Current Registrar.",
      },
    ],
  },

  // -------------------------------------
  // 3. DOMAIN MANAGEMENT
  // -------------------------------------
  {
    category: "Domain Management",
    icon: SettingsIcon,
    faqs: [
      {
        title: "How Do I Manage DNS Records?",
        content:
          "Log In To Your Client Dashboard, Select Your Domain, Navigate To DNS Management, and Add Or Edit A, AAAA, CNAME, MX, TXT, SRV, and Other Records With Real-Time Updates.",
      },
      {
        title: "Can I Change Name Servers?",
        content:
          "Yes. You Can Update Name Servers From Your Domain Management Panel. Changes Typically Propagate Within 24-48 Hours Globally.",
      },
      {
        title: "How Do I Enable Domain Forwarding?",
        content:
          "From Your Domain Dashboard, Navigate To Forwarding Settings, Enter The Destination URL, and Choose Between 301 (Permanent) or 302 (Temporary) Redirect Options.",
      },
      {
        title: "Can I Set Up Email Forwarding?",
        content:
          "Yes. You Can Create Email Aliases That Forward To Any Email Address. For Example, Forward info@yourdomain.com To Your Gmail Account.",
      },
      {
        title: "How Do I Renew My Domain?",
        content:
          "Domain Renewals Are Manual. You Will Receive Email and Dashboard Reminders Before Expiry. Complete The Renewal Payment From Your Client Area To Avoid Expiration.",
      },
    ],
  },

  // -------------------------------------
  // 4. DOMAIN SECURITY & PRIVACY
  // -------------------------------------
  {
    category: "Domain Security & Privacy",
    icon: ShieldIcon,
    faqs: [
      {
        title: "What Is WHOIS Privacy Protection?",
        content:
          "WHOIS Privacy Replaces Your Personal Contact Information In The Public WHOIS Database With Protected Details To Prevent Spam, Identity Theft, and Unwanted Solicitation.",
      },
      {
        title: "Is WHOIS Privacy Free?",
        content:
          "Yes. We Offer Free WHOIS Privacy Protection For Eligible Domain Extensions. You Can Enable Or Disable It Anytime From Your Domain Dashboard.",
      },
      {
        title: "How Do I Enable Domain Lock?",
        content:
          "Domain Lock Prevents Unauthorized Transfers. You Can Enable Or Disable It From Your Domain Management Panel Under Security Settings With One Click.",
      },
      {
        title: "What Happens If My Domain Is Stolen?",
        content:
          "With Domain Lock Enabled, Unauthorized Transfers Are Prevented. If Theft Occurs, Contact Our Support Team Immediately For Account Recovery and Transfer Cancellation Procedures.",
      },
      {
        title: "Can I Use Two-Factor Authentication For Domain Management?",
        content:
          "Yes. You Can Enable 2FA From Your Account Security Settings To Add An Extra Layer of Protection When Accessing Your Domain Management Panel.",
      },
    ],
  },
];

export function DomainFaqSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>Domain FAQs</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Everything You Need To Know About Domain Registration, Transfer, And
            Management
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md border overflow-hidden"
            defaultValue="item-1"
          >
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="has-focus-visible:border-ring has-focus-visible:ring-ring/50 outline-none first:rounded-t-md last:rounded-b-md has-focus-visible:z-10 has-focus-visible:ring-[3px]"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-3 sm:gap-4 rounded-md px-3 sm:px-4 md:px-5 py-4 sm:py-5 text-left text-base sm:text-lg font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
                    )}
                  >
                    <span className="flex items-center gap-2 sm:gap-3 md:gap-4">
                      <item.icon className="size-4 sm:size-6 shrink-0" />
                      <span>{item.category}</span>
                    </span>
                    <PlusIcon className="text-muted-foreground pointer-events-none size-5 sm:size-6 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="pb-0 pt-0">
                  <Accordion type="single" collapsible defaultValue={`faq-0`}>
                    {item.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="bg-accent dark:bg-accent/50 px-3 sm:px-4 md:px-5 border-b last:border-b-0"
                      >
                        <AccordionPrimitive.Header className="flex data-[state=open]:border-b border-primary/50">
                          <AccordionPrimitive.Trigger className="group text-left focus-visible:ring-ring/50 flex w-full items-center gap-2 sm:gap-3 md:gap-4 rounded-sm py-3 sm:py-4 text-sm font-medium outline-none focus-visible:z-10 focus-visible:ring-[3px] hover:no-underline">
                            <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            {faq.title}
                          </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-3 sm:pb-4 pt-2">
                          {faq.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
