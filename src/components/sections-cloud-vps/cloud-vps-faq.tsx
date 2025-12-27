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
        title: "What Is Cloud VPS?",
        content:
          "Cloud VPS (Virtual Private Server) Is A Virtualized Server That Provides Dedicated Resources Like CPU, RAM, And Storage. Unlike Shared Hosting, Your Resources Are Guaranteed And Not Affected By Other Users.",
      },
      {
        title: "How Long Does It Take To Deploy A VPS?",
        content:
          "Your VPS Is Deployed Instantly After Payment Confirmation. You'll Receive Root Access Credentials Within Minutes To Start Using Your Server.",
      },
      {
        title: "Can I Choose My Operating System?",
        content:
          "Yes, You Can Choose From Popular Linux Distributions Including Ubuntu, Debian, CentOS, Rocky Linux, AlmaLinux, And More During Setup.",
      },
      {
        title: "What's The Difference Between Shared And Dedicated Resources?",
        content:
          "Shared Resources VPS Has Excellent Price-To-Performance But CPU May Vary Under Load. Dedicated Resources VPS Guarantees Consistent CPU Performance At All Times.",
      },
    ],
  },
  {
    category: "Technical Features",
    icon: SettingsIcon,
    faqs: [
      {
        title: "Do I Get Root Access?",
        content:
          "Yes, All VPS Plans Come With Full Root/Administrator Access Via SSH, Giving You Complete Control Over Your Server Configuration.",
      },
      {
        title: "What Control Panel Options Are Available?",
        content:
          "You Can Install Popular Control Panels Like cPanel/WHM, Plesk, CyberPanel, Or Webmin. These Are Available As One-Click Applications.",
      },
      {
        title: "Can I Host Multiple Websites?",
        content:
          "Yes, You Can Host Unlimited Websites On Your VPS. The Number Of Sites Depends On Your Server Resources And Traffic Requirements.",
      },
      {
        title: "Is IPv6 Supported?",
        content:
          "Yes, All VPS Plans Include Both IPv4 And IPv6 Addresses At No Additional Cost.",
      },
    ],
  },
  {
    category: "Security & Backups",
    icon: ShieldIcon,
    faqs: [
      {
        title: "Is DDoS Protection Included?",
        content:
          "Yes, All VPS Plans Include Enterprise-Grade DDoS Protection At No Extra Cost To Keep Your Server Secure From Attacks.",
      },
      {
        title: "How Do Backups Work?",
        content:
          "You Can Create Manual Snapshots Or Enable Automated Backups. Snapshots Allow You To Restore Your Server To A Previous State Instantly.",
      },
      {
        title: "Can I Configure Firewall Rules?",
        content:
          "Yes, You Have Full Control Over Firewall Configuration. You Can Use Our Web-Based Firewall Manager Or Configure iptables/firewalld Directly.",
      },
      {
        title: "Is My Data Secure?",
        content:
          "Yes, All Data Is Stored On Encrypted NVMe SSDs In Secure Data Centers With Physical And Network Security Measures In Place.",
      },
    ],
  },
  {
    category: "Support & Billing",
    icon: HelpCircleIcon,
    faqs: [
      {
        title: "What Support Is Included?",
        content:
          "We Provide 24/7 Technical Support Via Email And Live Chat. Our Team Can Help With Server Issues, Network Problems, And Basic Configuration Questions.",
      },
      {
        title: "Can I Upgrade Or Downgrade My Plan?",
        content:
          "Yes, You Can Upgrade To A Higher Plan Anytime. Downgrades Are Also Possible At The End Of Your Current Billing Cycle.",
      },
      {
        title: "What Payment Methods Do You Accept?",
        content:
          "We Accept Visa, Mastercard, AMEX, Nexus, BKash, Nagad, Rocket, And Other Mobile Banking Options. All Payments Are Processed Securely.",
      },
      {
        title: "Is There A Money-Back Guarantee?",
        content:
          "Yes, We Offer A Limited Refund Period For New VPS Orders. Please Review Our Refund Policy Or Contact Support For Specific Details.",
      },
    ],
  },
];

export function CloudVpsFaq() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Cloud VPS FAQs
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Find Answers To Common Questions About Our Cloud VPS Services
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
