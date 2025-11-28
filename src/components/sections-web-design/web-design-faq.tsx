"use client";

import {
  ChevronDownIcon,
  PaletteIcon,
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
    category: "Design & Development",
    icon: PaletteIcon,
    faqs: [
      {
        title: "What Is Included In Your Web Design Service?",
        content:
          "Our Web Design Service Includes Custom UI/UX Design, Responsive Development, SEO Optimization, Performance Tuning, Browser Testing, And Post-Launch Support.",
      },
      {
        title: "Do You Design Websites From Scratch Or Use Templates?",
        content:
          "We Create Custom Designs Tailored To Your Brand And Business Goals. While We Can Work With Templates For Budget Projects, Our Specialty Is Unique, Custom Designs.",
      },
      {
        title: "Will My Website Be Mobile-Friendly?",
        content:
          "Absolutely! All Our Websites Are Built With A Mobile-First Approach, Ensuring Perfect Functionality Across All Devices And Screen Sizes.",
      },
      {
        title: "Can You Redesign My Existing Website?",
        content:
          "Yes, We Offer Website Redesign Services To Modernize Your Current Site With Updated Design, Improved Performance, And Better User Experience.",
      },
    ],
  },
  {
    category: "Technical Details",
    icon: CodeIcon,
    faqs: [
      {
        title: "What Technologies Do You Use?",
        content:
          "We Use Modern Technologies Including React, Next.js, WordPress, Shopify, Tailwind CSS, And More Based On Your Project Requirements.",
      },
      {
        title: "Will I Be Able To Update Content Myself?",
        content:
          "Yes! We Build Websites With User-Friendly Content Management Systems Like WordPress Or Custom Admin Panels That Allow Easy Content Updates.",
      },
      {
        title: "Do You Provide E-Commerce Solutions?",
        content:
          "Yes, We Build Complete E-Commerce Websites Using Shopify, WooCommerce, Or Custom Solutions With Payment Gateway Integration And Inventory Management.",
      },
      {
        title: "Is SEO Included In The Web Design?",
        content:
          "Yes, We Implement On-Page SEO Best Practices Including Meta Tags, Structured Data, Fast Loading Times, And Mobile Optimization For Better Search Rankings.",
      },
    ],
  },
  {
    category: "Timeline & Process",
    icon: ClockIcon,
    faqs: [
      {
        title: "How Long Does It Take To Build A Website?",
        content:
          "Timeline Varies Based On Complexity. A Simple Website Takes 2-3 Weeks, Business Websites 4-6 Weeks, And Complex E-Commerce Sites 8-12 Weeks.",
      },
      {
        title: "What Is Your Design Process?",
        content:
          "Our Process Includes Discovery & Research, Wireframing, Design Mockups, Client Feedback, Development, Testing, And Launch With Ongoing Support.",
      },
      {
        title: "How Many Revisions Are Included?",
        content:
          "We Include 2-3 Rounds Of Revisions At Each Major Stage (Wireframe, Design, Development) To Ensure The Final Product Meets Your Expectations.",
      },
      {
        title: "What Happens After The Website Launches?",
        content:
          "We Provide Post-Launch Support Including Bug Fixes, Training On Content Management, Analytics Setup, And Optional Maintenance Packages.",
      },
    ],
  },
  {
    category: "Pricing & Support",
    icon: DollarSignIcon,
    faqs: [
      {
        title: "How Much Does A Website Cost?",
        content:
          "Pricing Varies Based On Features And Complexity. Landing Pages Start At ৳15,000, Business Websites From ৳35,000, And E-Commerce Sites From ৳75,000.",
      },
      {
        title: "Do You Offer Payment Plans?",
        content:
          "Yes, We Offer Flexible Payment Options Including Milestone-Based Payments And Installment Plans For Larger Projects.",
      },
      {
        title: "What Ongoing Support Do You Provide?",
        content:
          "We Offer Various Maintenance Packages Including Security Updates, Content Updates, Performance Monitoring, And Technical Support.",
      },
      {
        title: "Do I Own The Website After It's Built?",
        content:
          "Yes, You Receive Full Ownership Of The Website, Source Code, Design Files, And All Related Assets Upon Project Completion And Final Payment.",
      },
    ],
  },
];

export function WebDesignFaq() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Web Design FAQs
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Find Answers To Common Questions About Our Web Design Services
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
