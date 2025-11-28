"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import GradientText from "../ui/gradient-text";

export function CommonTestimonials() {
  const testimonials = [
    {
      quote:
        "The Attention To Detail And Innovative Features Have Completely Transformed Our Workflow. This Is Exactly What We've Been Looking For.",
      name: "Gulam Sharwar Rashel",
      designation: "Owner - Agro Grow / Larky Parky",
      src: "/clients-photo/gulam-sharwar-rashel-2.avif",
    },
    {
      quote:
        "Implementation Was Seamless And The Results Exceeded Our Expectations. The Platform's Flexibility Is Remarkable.",
      name: "Parvez Kamal Pasha",
      designation: "Director - Novem Eco Resort",
      src: "/clients-photo/parvez-kamal-pasha.jpg",
    },
    {
      quote:
        "This Solution Has Significantly Improved Our Team's Productivity. The Intuitive Interface Makes Complex Tasks Simple.",
      name: "Najmol Bhuiyan",
      designation: "Owner - After Glow",
      src: "/clients-photo/najmol-bhuiyan.avif",
    },
    {
      quote:
        "Outstanding Support And Robust Features. It's Rare To Find A Product That Delivers On All Its Promises.",
      name: "Sayed Afridi",
      designation: "Proprietor - Chandpur Roofing",
      src: "/clients-photo/sayed-afridi.avif",
    },
    // {
    //   quote:
    //     "The Scalability And Performance Have Been Game-Changing For Our Organization. Highly Recommend To Any Growing Business.",
    //   name: "Mohammed Mahabub Alam",
    //   designation: "Chairman & MD - Mahbub Perfume",
    //   src: "/clients-photo/gulam-sharwar-rashel-2.avif",
    // },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 dark:bg-black/50 border-t border-border">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title And Subheading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>What Our Clients Say</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Hear From Our Satisfied Customers About Their Experience With Our
            Hosting And Digital Services
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
