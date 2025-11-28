"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";

const technologies = [
  { name: "React", logo: "/tech-logos/react.svg", category: "Frontend" },
  { name: "Next.js", logo: "/tech-logos/nextjs.svg", category: "Framework" },
  { name: "WordPress", logo: "/tech-logos/wordpress.svg", category: "CMS" },
  { name: "Shopify", logo: "/tech-logos/shopify.svg", category: "E-Commerce" },
  { name: "Tailwind CSS", logo: "/tech-logos/tailwind.svg", category: "Styling" },
  { name: "Figma", logo: "/tech-logos/figma.svg", category: "Design" },
];

export function WebDesignTechnologies() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Technologies We Use</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            We Stay Current With The Latest Technologies And Frameworks To
            Deliver Modern, Efficient Solutions
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center justify-center aspect-square">
                <div className="relative w-16 h-16 mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                  {/* Fallback Icon If Logo Not Available */}
                  <div className="w-full h-full rounded-lg bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    {tech.name.charAt(0)}
                  </div>
                </div>
                <p className="text-sm font-semibold text-foreground text-center">
                  {tech.name}
                </p>
                <p className="text-xs text-muted-foreground text-center mt-1">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            And Many More Including Vue.js, Angular, Bootstrap, Material UI,
            Framer Motion, GSAP, And Other Modern Web Technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
