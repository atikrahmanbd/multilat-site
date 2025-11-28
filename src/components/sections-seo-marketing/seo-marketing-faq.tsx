"use client";

import {
  ChevronDownIcon,
  SearchIcon,
  TrendingUpIcon,
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
    category: "SEO Services",
    icon: SearchIcon,
    faqs: [
      {
        title: "What Is Included In Your SEO Service?",
        content:
          "Our SEO Services Include Keyword Research, On-Page Optimization, Technical SEO, Content Optimization, Link Building, Local SEO, And Monthly Performance Reporting.",
      },
      {
        title: "How Long Does It Take To See SEO Results?",
        content:
          "Typically, You'll Start Seeing Improvements In 3-6 Months. SEO Is A Long-Term Strategy That Builds Momentum Over Time For Sustainable Growth.",
      },
      {
        title: "Do You Guarantee First Page Rankings?",
        content:
          "No Ethical SEO Agency Can Guarantee Rankings. We Focus On Best Practices, Quality Content, And Data-Driven Strategies To Improve Your Visibility Significantly.",
      },
      {
        title: "What Is The Difference Between On-Page And Off-Page SEO?",
        content:
          "On-Page SEO Involves Optimizing Your Website Content And Structure. Off-Page SEO Focuses On Building Authority Through Backlinks And External Signals.",
      },
    ],
  },
  {
    category: "Marketing Strategy",
    icon: TrendingUpIcon,
    faqs: [
      {
        title: "What Marketing Channels Do You Work With?",
        content:
          "We Work With Search Engines (Google, Bing), Social Media (Facebook, Instagram, LinkedIn), Email Marketing, Content Marketing, And Paid Advertising Platforms.",
      },
      {
        title: "How Do You Measure Marketing Success?",
        content:
          "We Track KPIs Like Organic Traffic, Conversion Rates, Click-Through Rates, ROI, Customer Acquisition Cost, And Engagement Metrics Based On Your Goals.",
      },
      {
        title: "Do You Create Content For Our Campaigns?",
        content:
          "Yes, We Create SEO-Optimized Blog Posts, Social Media Content, Email Campaigns, Landing Pages, And Other Marketing Materials Tailored To Your Brand.",
      },
      {
        title: "Can You Help With Paid Advertising?",
        content:
          "Yes, We Manage Google Ads, Facebook Ads, LinkedIn Ads, And Other PPC Campaigns With Continuous Optimization For Maximum ROI.",
      },
    ],
  },
  {
    category: "Timeline & Process",
    icon: ClockIcon,
    faqs: [
      {
        title: "What Is Your Onboarding Process?",
        content:
          "We Start With An Audit, Competitive Analysis, Goal Setting, Strategy Development, And Then Implementation With Regular Check-Ins And Reporting.",
      },
      {
        title: "How Often Do You Provide Reports?",
        content:
          "We Provide Monthly Performance Reports With Key Metrics, Progress Updates, And Recommendations For Continuous Improvement.",
      },
      {
        title: "Can We Make Changes To The Strategy?",
        content:
          "Absolutely! We Regularly Review Performance And Adjust Strategies Based On Data, Market Changes, And Your Evolving Business Goals.",
      },
      {
        title: "Do You Require Long-Term Contracts?",
        content:
          "We Offer Flexible Options. While SEO And Marketing Work Best With Sustained Effort, We Can Discuss Monthly Or Quarterly Engagements.",
      },
    ],
  },
  {
    category: "Pricing & ROI",
    icon: DollarSignIcon,
    faqs: [
      {
        title: "How Much Do Your Marketing Services Cost?",
        content:
          "Pricing Varies Based On Services And Scope. Basic SEO Starts At ৳25,000/Month, Full Marketing Packages From ৳50,000/Month. Contact Us For Custom Quotes.",
      },
      {
        title: "What ROI Can We Expect?",
        content:
          "ROI Varies By Industry And Competition. Most Clients See 3-5x Return Within 6-12 Months Through Increased Traffic, Leads, And Conversions.",
      },
      {
        title: "Are There Any Setup Fees?",
        content:
          "Yes, Initial Setup Includes Audit, Research, And Strategy Development. This One-Time Fee Ranges From ৳15,000-৳30,000 Depending On Complexity.",
      },
      {
        title: "What If We Don't See Results?",
        content:
          "We're Committed To Your Success. If Performance Isn't Meeting Expectations, We'll Adjust Strategy At No Extra Cost And Work Until We Achieve Your Goals.",
      },
    ],
  },
];

export function SeoMarketingFaq() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            SEO & Marketing FAQs
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Find Answers To Common Questions About Our SEO And Digital Marketing Services
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
