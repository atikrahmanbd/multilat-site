"use client";

import {
  ChevronDownIcon,
  SettingsIcon,
  CodeIcon,
  ClockIcon,
  DollarSignIcon,
  PlusIcon,
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
    category: "Services & Solutions",
    icon: SettingsIcon,
    faqs: [
      {
        title: "What Types Of Custom Software Do You Develop?",
        content:
          "We Develop Enterprise Software, Business Management Systems, CRM, ERP, Inventory Management, Workflow Automation Tools, And Industry-Specific Custom Applications.",
      },
      {
        title: "Do You Provide Cloud Migration Services?",
        content:
          "Yes, We Offer Complete Cloud Migration Services Including Assessment, Planning, Data Migration, And Optimization For AWS, Azure, And Google Cloud Platform.",
      },
      {
        title: "Can You Modernize Our Legacy Systems?",
        content:
          "Absolutely! We Specialize In Legacy System Modernization, Migrating Old Applications To Modern Technologies While Preserving Your Business Logic And Data.",
      },
      {
        title: "Do You Offer IT Security Services?",
        content:
          "Yes, We Provide Comprehensive Security Services Including Security Audits, Penetration Testing, Compliance Management, And Implementation Of Security Best Practices.",
      },
    ],
  },
  {
    category: "Technical Details",
    icon: CodeIcon,
    faqs: [
      {
        title: "What Technologies Do You Work With?",
        content:
          "We Work With A Wide Range Of Technologies Including Node.js, Python, .NET, Java, Cloud Platforms (AWS, Azure, GCP), Databases (PostgreSQL, MongoDB, MySQL), And Modern DevOps Tools.",
      },
      {
        title: "Can You Integrate With Our Existing Systems?",
        content:
          "Yes, We Specialize In System Integration And Can Connect Your New Solutions With Existing Software, Databases, APIs, And Third-Party Services.",
      },
      {
        title: "Do You Provide Database Optimization?",
        content:
          "Yes, We Offer Database Design, Performance Tuning, Query Optimization, Indexing Strategies, And Migration Services For Various Database Systems.",
      },
      {
        title: "What About DevOps And CI/CD?",
        content:
          "We Implement Complete DevOps Solutions Including Automated Testing, Continuous Integration/Deployment Pipelines, Container Orchestration, And Infrastructure As Code.",
      },
    ],
  },
  {
    category: "Timeline & Process",
    icon: ClockIcon,
    faqs: [
      {
        title: "How Long Does A Custom Software Project Take?",
        content:
          "Timeline Varies By Complexity. Simple Tools Take 1-2 Months, Business Applications 3-6 Months, And Enterprise Systems 6-12 Months Or More.",
      },
      {
        title: "What Is Your Development Approach?",
        content:
          "We Follow Agile Methodology With Regular Sprints, Continuous Communication, Iterative Development, And Frequent Deliverables To Ensure Project Success.",
      },
      {
        title: "Do You Provide Documentation?",
        content:
          "Yes, We Provide Comprehensive Technical Documentation, User Guides, API Documentation, And Training Materials For All Solutions We Deliver.",
      },
      {
        title: "What Post-Implementation Support Do You Offer?",
        content:
          "We Offer Ongoing Support Including Bug Fixes, System Monitoring, Performance Optimization, Updates, And Technical Assistance Based On Your Needs.",
      },
    ],
  },
  {
    category: "Pricing & Support",
    icon: DollarSignIcon,
    faqs: [
      {
        title: "How Do You Price Custom Software Projects?",
        content:
          "Pricing Depends On Scope, Complexity, And Timeline. We Provide Detailed Estimates After Understanding Your Requirements And Offer Flexible Engagement Models.",
      },
      {
        title: "Do You Offer Fixed Price Or Hourly Billing?",
        content:
          "We Offer Both Fixed-Price Projects For Well-Defined Scopes And Time & Material Billing For Ongoing Development And Support Engagements.",
      },
      {
        title: "What Maintenance Plans Do You Provide?",
        content:
          "We Offer Various Maintenance Plans Including Basic Support, Standard Monitoring & Updates, And Premium 24/7 Support With Guaranteed Response Times.",
      },
      {
        title: "Do We Own The Source Code?",
        content:
          "Yes, Upon Project Completion And Final Payment, You Receive Full Ownership Of The Source Code, Documentation, And All Related Intellectual Property.",
      },
    ],
  },
];

export function ItSolutionsFaq() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            IT Solutions FAQs
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Find Answers To Common Questions About Our IT And Custom Software Solutions
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
