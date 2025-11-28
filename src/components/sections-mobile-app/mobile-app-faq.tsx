"use client";

import {
  ChevronDownIcon,
  SmartphoneIcon,
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
    category: "Development & Design",
    icon: SmartphoneIcon,
    faqs: [
      {
        title: "What Is Included In Your Mobile App Development Service?",
        content:
          "Our Mobile App Development Service Includes UI/UX Design, Cross-Platform Development (React Native/Flutter), API Integration, Testing, App Store Deployment, And Post-Launch Support.",
      },
      {
        title: "Do You Build Native Or Cross-Platform Apps?",
        content:
          "We Specialize In Cross-Platform Development Using React Native And Flutter, Which Allows One Codebase For Both iOS And Android, Reducing Cost And Development Time.",
      },
      {
        title: "Will My App Work On Both iOS And Android?",
        content:
          "Yes! Our Cross-Platform Approach Ensures Your App Works Seamlessly On Both iOS And Android Devices With Consistent User Experience.",
      },
      {
        title: "Can You Build Progressive Web Apps (PWAs)?",
        content:
          "Absolutely! We Build Progressive Web Apps That Work Offline, Can Be Installed On Devices, And Provide App-Like Experience Through Web Browsers.",
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
          "We Use React Native And Flutter For Mobile Apps, With Backend Services Including Firebase, Supabase, MongoDB, And Custom APIs Built With Node.js Or Other Modern Technologies.",
      },
      {
        title: "Can You Integrate With Existing Backend Systems?",
        content:
          "Yes! We Can Integrate Your Mobile App With Existing Backend Systems, Third-Party APIs, Payment Gateways, And Other Services Your Business Uses.",
      },
      {
        title: "Do You Provide Backend Development?",
        content:
          "Yes, We Offer Complete Backend Solutions Using Firebase, Supabase, MongoDB, Or Custom Backend Development To Power Your Mobile Application.",
      },
      {
        title: "Can You Help With App Store Submission?",
        content:
          "Absolutely! We Handle The Complete App Store Submission Process For Both Apple App Store And Google Play Store, Including Compliance With All Guidelines.",
      },
    ],
  },
  {
    category: "Timeline & Process",
    icon: ClockIcon,
    faqs: [
      {
        title: "How Long Does It Take To Build A Mobile App?",
        content:
          "Timeline Varies Based On Complexity. Simple Apps Take 2-3 Months, Standard Business Apps 3-4 Months, And Complex Apps With Advanced Features 5-6 Months Or More.",
      },
      {
        title: "What Is Your Development Process?",
        content:
          "Our Process Includes Ideation & Requirements, UI/UX Design, Development With Regular Updates, Testing On Multiple Devices, App Store Submission, And Post-Launch Support.",
      },
      {
        title: "How Many Revisions Are Included?",
        content:
          "We Include 2-3 Rounds Of Revisions At Each Major Stage (Design, Development) To Ensure The Final Product Meets Your Expectations And Requirements.",
      },
      {
        title: "What Happens After The App Launches?",
        content:
          "We Provide Post-Launch Support Including Bug Fixes, Updates For New OS Versions, Performance Monitoring, Analytics Setup, And Optional Maintenance Packages.",
      },
    ],
  },
  {
    category: "Pricing & Support",
    icon: DollarSignIcon,
    faqs: [
      {
        title: "How Much Does A Mobile App Cost?",
        content:
          "Pricing Varies Based On Features And Complexity. Simple Apps Start At ৳80,000, Business Apps From ৳1,50,000, And Complex Apps With Advanced Features From ৳3,00,000.",
      },
      {
        title: "Do You Offer Payment Plans?",
        content:
          "Yes, We Offer Flexible Payment Options Including Milestone-Based Payments And Installment Plans For Larger Projects To Make Development More Affordable.",
      },
      {
        title: "What Ongoing Support Do You Provide?",
        content:
          "We Offer Maintenance Packages Including Bug Fixes, OS Updates Compatibility, Performance Monitoring, Feature Enhancements, And Technical Support.",
      },
      {
        title: "Do I Own The App After It's Built?",
        content:
          "Yes, You Receive Full Ownership Of The App, Source Code, Design Files, And All Related Assets Upon Project Completion And Final Payment.",
      },
    ],
  },
];

export function MobileAppFaq() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Mobile App Development FAQs
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Find Answers To Common Questions About Our Mobile App Development Services
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
