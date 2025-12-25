"use client";

import {
  ChevronDownIcon,
  ServerIcon,
  GripIcon,
  PlusIcon,
  CreditCardIcon,
  GlobeIcon,
} from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
export const items = [
  // -------------------------------------
  // 1. WEB HOSTING SOLUTIONS
  // -------------------------------------
  {
    category: "Web Hosting",
    icon: ServerIcon,
    faqs: [
      {
        title: "Do You Provide cPanel Hosting?",
        content:
          "Yes. We Provide Fully Featured cPanel Hosting With Email Accounts, File Manager, PHP Selector, One-Click Installer, and Easy DNS Controls Suitable For All Types of Users.",
      },
      {
        title: "Is Free SSL Included With All Hosting Plans?",
        content:
          "Yes. All Hosting Plans Include Free SSL Certificates That Are Automatically Installed and Renewed For Secure HTTPS Access.",
      },
      {
        title: "Do You Provide Website Migration Support?",
        content:
          "Yes. We Provide Free Website Migration From Your Existing Hosting Provider. Our Team Handles The Transfer Securely With Minimal Downtime.",
      },
      {
        title: "What Kind of Backups Do You Offer?",
        content:
          "We Offer Automated Backups Based On Your Hosting Package. You Can Restore Files, Databases, or Entire Accounts Directly From cPanel.",
      },
      {
        title: "Can I Host Frameworks Like Next.js or React?",
        content:
          "Yes. We Support Static and SSR Deployments For Modern Frameworks Including Next.js, React, Vue, and Svelte With Optimized Build and Deployment Environments.",
      },
    ],
  },

  // -------------------------------------
  // 2. DOMAINS & DNS
  // -------------------------------------
  {
    category: "Domains & DNS",
    icon: GlobeIcon,
    faqs: [
      {
        title: "Do You Offer Domain Registration and Renewal?",
        content:
          "Yes. We Provide 550+ Domain Extensions With Instant Registration, Easy Renewal, Domain Locking, and Optional ID Protection.",
      },
      {
        title: "Can I Transfer My Domain To Multilat?",
        content:
          "Yes. You Can Transfer Any Supported Domain To Multilat Simply Unlock The Domain, Obtain The EPP Code, and Start The Transfer From Your Dashboard.",
      },
      {
        title: "Do You Provide DNS Management Tools?",
        content:
          "Yes. You Can Manage A, CNAME, MX, TXT, SRV, and Other DNS Records Directly From Your Client Dashboard With Fast Propagation.",
      },
    ],
  },

  // -------------------------------------
  // 3. ADDITIONAL SERVICES (PRACTICAL Q&A)
  // -------------------------------------
  {
    category: "Additional Services",
    icon: GripIcon,
    faqs: [
      {
        title: "How Long Does A Web Design Project Take?",
        content:
          "Most Standard Websites Take 3–10 Working Days Depending On Requirements. Larger Or More Complex Projects May Require Additional Time.",
      },
      {
        title: "What Do I Receive After The Website Is Completed?",
        content:
          "You Receive Full Ownership of the Website Including Admin Access, Source Files, Login Credentials, and Documentation If Requested.",
      },
      {
        title: "What Technologies Do You Use For App and Software Development?",
        content:
          "We Use Modern Technologies Such As Next.js, React, Vue, Flutter, Laravel, and Node.js Depending On Your Business Needs.",
      },
      {
        title: "Do You Provide Support After Project Delivery?",
        content:
          "Yes. We Provide Assistance For Bug Fixes, Minor Adjustments, and Technical Guidance. Extended Maintenance Plans Are Also Available.",
      },
      {
        title: "How Do I Start A New Project or Request A Quote?",
        content:
          "Simply Contact Us With Your Requirements. We Will Provide A Clear Breakdown of Cost, Timeline, and Deliverables Before Beginning The Project.",
      },
    ],
  },

  // -------------------------------------
  // 4. BILLING & PAYMENTS (BANGLADESH ACCURATE)
  // -------------------------------------
  {
    category: "Billing & Payments",
    icon: CreditCardIcon,
    faqs: [
      {
        title: "What Payment Methods Do You Accept?",
        content:
          "We Accept Visa, Mastercard, AMEX, Nexus, BKash, Nagad, Rocket, and Other Mobile Banking Options. All Payments Are Processed Securely.",
      },
      {
        title: "How Do I Renew My Services?",
        content:
          "Renewals Are Manual. You Will Receive Email and Dashboard Reminders Before Expiry. Simply Complete The Payment From Your Client Area To Avoid Interruption.",
      },
      {
        title: "Can I Upgrade or Downgrade My Hosting Plan?",
        content:
          "Yes. You Can Upgrade or Downgrade Anytime From Your Dashboard. Upgrades Apply Instantly And Billing Adjusts Pro-Rata.",
      },
      {
        title: "Do You Offer Refunds?",
        content:
          "Yes. Hosting Plans Include A Limited Refund Period Depending On The Package. Domain Registrations Are Non-Refundable As Per Global Registry Policies.",
      },
    ],
  },
];

export function HomeFaqSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Frequently Asked Questions
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Find Answers To Common Questions About Our Hosting, Domains, and
            Digital Services
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
                      <item.icon className="size-5 sm:size-6 shrink-0" />
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
