"use client";

import {
  ChevronDownIcon,
  ServerIcon,
  ShieldIcon,
  SettingsIcon,
  PlusIcon,
  HelpCircleIcon,
} from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const items = [
  {
    category: "Getting Started",
    icon: ServerIcon,
    faqs: [
      {
        title: "What Is Web Hosting?",
        content:
          "Web Hosting Is A Service That Allows You To Store Your Website Files On A Server, Making Your Website Accessible On The Internet 24/7.",
      },
      {
        title: "Do I Need A Domain Name To Get Hosting?",
        content:
          "Yes, You Need A Domain Name To Point To Your Hosting Account. You Can Register A New Domain Or Transfer An Existing One.",
      },
      {
        title: "How Long Does It Take To Set Up Hosting?",
        content:
          "Hosting Accounts Are Activated Instantly After Payment. You'll Receive Login Details Within Minutes To Start Building Your Website.",
      },
      {
        title: "Can I Upgrade My Plan Later?",
        content:
          "Yes, You Can Upgrade To A Higher Plan Anytime From Your Client Dashboard. Upgrades Are Applied Instantly With Pro-Rata Billing.",
      },
    ],
  },
  {
    category: "Technical Features",
    icon: SettingsIcon,
    faqs: [
      {
        title: "What Control Panel Do You Provide?",
        content:
          "We Provide cPanel, The Industry-Standard Control Panel With File Manager, Email Management, Database Tools, And One-Click App Installer.",
      },
      {
        title: "Do You Support PHP And MySQL?",
        content:
          "Yes, We Support Multiple PHP Versions (7.4, 8.0, 8.1, 8.2) With Easy Switcher And Unlimited MySQL Databases For All Plans.",
      },
      {
        title: "Can I Install WordPress Or Other CMS?",
        content:
          "Yes, You Can Install WordPress, Joomla, Drupal, And 400+ Applications With One Click Through Softaculous Installer In cPanel.",
      },
      {
        title: "Do You Provide SSH Access?",
        content:
          "SSH Access Is Available On Business And Professional Plans For Advanced Users And Developers.",
      },
    ],
  },
  {
    category: "Security & Backups",
    icon: ShieldIcon,
    faqs: [
      {
        title: "Do You Provide Free SSL Certificates?",
        content:
          "Yes, All Hosting Plans Include Free SSL Certificates That Are Automatically Installed And Renewed For Secure HTTPS Access.",
      },
      {
        title: "How Often Are Backups Taken?",
        content:
          "We Perform Automated Daily Backups Of Your Website, Databases, And Email Accounts. You Can Restore Anytime From cPanel.",
      },
      {
        title: "What Security Measures Are In Place?",
        content:
          "We Provide Firewall Protection, DDoS Mitigation, Malware Scanning, And Regular Security Updates To Keep Your Website Safe.",
      },
      {
        title: "Can I Restore A Previous Backup?",
        content:
          "Yes, You Can Restore Files, Databases, Or Full Accounts From Previous Backups Directly Through cPanel Backup Manager.",
      },
    ],
  },
  {
    category: "Support & Billing",
    icon: HelpCircleIcon,
    faqs: [
      {
        title: "What Support Channels Are Available?",
        content:
          "We Offer 24/7 Support Via Email, Live Chat, And Phone. Priority Support Is Available For Business And Professional Plans.",
      },
      {
        title: "How Do I Renew My Hosting?",
        content:
          "Hosting Renewals Are Manual. You'll Receive Email Reminders Before Expiry. Complete Renewal From Your Client Area To Avoid Service Interruption.",
      },
      {
        title: "What Payment Methods Do You Accept?",
        content:
          "We Accept Visa, Mastercard, AMEX, Nexus, BKash, Nagad, Rocket, And Other Mobile Banking Options. All Payments Are Secure.",
      },
      {
        title: "Do You Offer Refunds?",
        content:
          "Yes, We Offer A Limited Refund Period Depending On The Package. Please Review Our Refund Policy Or Contact Support For Details.",
      },
    ],
  },
];

export function HostingFaqSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Hosting FAQs
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Find Answers To Common Questions About Our Web Hosting Services
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
                      "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-3 sm:gap-4 rounded-md px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-6 text-left text-base sm:text-lg font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
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
