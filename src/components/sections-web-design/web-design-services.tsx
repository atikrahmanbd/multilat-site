"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import GradientText from "@/components/ui/gradient-text";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { Layout, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FaWordpress,
  FaShopify,
  FaFigma,
  FaReact,
  FaLaravel,
  FaPython,
  FaNode,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiSupabase,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiVuedotjs,
  SiTailwindcss,
} from "react-icons/si";
import Image from "next/image";

const services = [
  {
    icon: FaFigma,
    title: "Custom UI/UX Design",
    description:
      "Beautiful, Intuitive User Interfaces That Deliver Exceptional User Experiences.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Interactive Designs",
      "Brand Identity",
    ],
    color: "purple",
    backgroundImage: "/tech-stack-logos/figma-light.svg",
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    description:
      "High-Converting Landing Pages Optimized For Lead Generation And Sales.",
    features: [
      "Conversion Focused",
      "A/B Testing Ready",
      "Fast Loading Speed",
      "Lead Capture Forms",
    ],
    color: "pink",
    backgroundImage: "/tech-stack-logos/bootstrap5-light.svg",
  },
  {
    icon: FaWordpress,
    title: "WordPress Development",
    description:
      "Custom WordPress Websites With Powerful Themes, Plugins, And Full Content Management Systems.",
    features: [
      "Custom Theme Development",
      "Plugin Integration",
      "WooCommerce Setup",
      "Performance Optimization",
    ],
    color: "blue",
    backgroundImage: "/tech-stack-logos/wordpress-light.svg",
  },
  {
    icon: FaShopify,
    title: "Shopify E-Commerce",
    description:
      "Complete E-Commerce Solutions With Shopify Including Store Setup And Customization.",
    features: [
      "Store Setup & Configuration",
      "Theme Customization",
      "Payment Integration",
      "Product Management",
    ],
    color: "green",
    backgroundImage: "/tech-stack-logos/shopify-icon.svg",
  },
];

const frontendTechnologies = [
  {
    icon: FaReact,
    title: "React",
    description: "Component-Based Library For Building Dynamic User Interfaces",
    color: "blue",
  },
  {
    icon: SiNextdotjs,
    title: "Next.js",
    description: "React Framework For Production-Ready Web Applications",
    color: "blue",
  },
  {
    icon: SiVuedotjs,
    title: "Vue.js",
    description: "Progressive JavaScript Framework For Modern Web Apps",
    color: "green",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    description: "Utility-First CSS Framework For Rapid UI Development",
    color: "blue",
  },
];

const backendTechnologies = [
  {
    icon: FaLaravel,
    title: "PHP/Laravel",
    description: "Enterprise PHP Framework For Robust Web Applications",
    color: "red",
  },
  {
    icon: FaPython,
    title: "Python/Django",
    description: "Scalable Backend Solutions With Python & Django Framework",
    color: "blue",
  },
  {
    icon: FaNode,
    title: "Node.js",
    description: "High-Performance JavaScript Runtime For Backend Services",
    color: "green",
  },
  {
    icon: Database,
    title: "RESTful APIs",
    description: "Secure & Efficient API Development For Modern Applications",
    color: "purple",
  },
];

const databaseServices = [
  {
    icon: SiSupabase,
    title: "Supabase",
    description:
      "Open-Source Firebase Alternative With Postgres, Auth & Storage",
    color: "green",
  },
  {
    icon: SiPrisma,
    title: "Prisma ORM",
    description: "Modern Type-Safe Database ORM For Node.js & TypeScript",
    color: "blue",
  },
  {
    icon: SiMongodb,
    title: "MongoDB",
    description: "Flexible NoSQL Database For Modern Applications",
    color: "green",
  },
  {
    icon: SiPostgresql,
    title: "PostgreSQL",
    description: "Powerful Relational Database & Serverless Postgres Solutions",
    color: "blue",
  },
];

const frontendTechStackLogos = [
  {
    name: "React",
    logo: "/tech-stack-logos/reactjs-dark.svg",
    logoDark: "/tech-stack-logos/reactjs-light.svg",
  },
  {
    name: "Next.js",
    logo: "/tech-stack-logos/nextjs-light.svg",
    logoDark: "/tech-stack-logos/nextjs-dark.svg",
  },
  {
    name: "Vue.js",
    logo: "/tech-stack-logos/vuejs-dark.svg",
    logoDark: "/tech-stack-logos/vuejs-light.svg",
  },
  {
    name: "Tailwind",
    logo: "/tech-stack-logos/tailwind-dark.svg",
    logoDark: "/tech-stack-logos/tailwind-light.svg",
  },
  {
    name: "TypeScript",
    logo: "/tech-stack-logos/typescript-dark.svg",
    logoDark: "/tech-stack-logos/typescript-light.svg",
  },
  {
    name: "JavaScript",
    logo: "/tech-stack-logos/js-dark.svg",
    logoDark: "/tech-stack-logos/js-light.svg",
  },
  {
    name: "HTML5",
    logo: "/tech-stack-logos/html5-dark.svg",
    logoDark: "/tech-stack-logos/html5-light.svg",
  },
  {
    name: "CSS",
    logo: "/tech-stack-logos/css-dark.svg",
    logoDark: "/tech-stack-logos/css-light.svg",
  },
  {
    name: "Bootstrap",
    logo: "/tech-stack-logos/bootstrap5-dark.svg",
    logoDark: "/tech-stack-logos/bootstrap5-light.svg",
  },
  {
    name: "Sass",
    logo: "/tech-stack-logos/sass-dark.svg",
    logoDark: "/tech-stack-logos/sass-light.svg",
  },
  {
    name: "Webpack",
    logo: "/tech-stack-logos/webpack-dark.svg",
    logoDark: "/tech-stack-logos/webpack-light.svg",
  },
  {
    name: "Vite",
    logo: "/tech-stack-logos/vitejs-dark.svg",
    logoDark: "/tech-stack-logos/vitejs-light.svg",
  },
];

const backendTechStackLogos = [
  {
    name: "Laravel",
    logo: "/tech-stack-logos/laravel-dark.svg",
    logoDark: "/tech-stack-logos/laravel-light.svg",
  },
  {
    name: "Node.js",
    logo: "/tech-stack-logos/nodejs-dark.svg",
    logoDark: "/tech-stack-logos/nodejs-light.svg",
  },
  {
    name: "Python",
    logo: "/tech-stack-logos/python-dark.svg",
    logoDark: "/tech-stack-logos/python-light.svg",
  },
  {
    name: "Django",
    logo: "/tech-stack-logos/django-dark.svg",
    logoDark: "/tech-stack-logos/django-light.svg",
  },
  {
    name: "Express.js",
    logo: "/tech-stack-logos/expressjs-dark.svg",
    logoDark: "/tech-stack-logos/expressjs-light.svg",
  },
  {
    name: "MongoDB",
    logo: "/tech-stack-logos/mongodb-dark.svg",
    logoDark: "/tech-stack-logos/mongodb-light.svg",
  },
  {
    name: "PostgreSQL",
    logo: "/tech-stack-logos/postgresql-dark.svg",
    logoDark: "/tech-stack-logos/postgresql-light.svg",
  },
  {
    name: "MySQL",
    logo: "/tech-stack-logos/mysql-dark.svg",
    logoDark: "/tech-stack-logos/mysql-light.svg",
  },
  {
    name: "Supabase",
    logo: "/tech-stack-logos/supabase.svg",
    logoDark: "/tech-stack-logos/supabase.svg",
  },
  {
    name: "Prisma",
    logo: "/tech-stack-logos/prisma.svg",
    logoDark: "/tech-stack-logos/prisma.svg",
  },
  {
    name: "Docker",
    logo: "/tech-stack-logos/docker-dark.svg",
    logoDark: "/tech-stack-logos/docker-light.svg",
  },
  {
    name: "Redis",
    logo: "/tech-stack-logos/redis-dark.svg",
    logoDark: "/tech-stack-logos/redis-light.svg",
  },
];

export function WebDesignServices() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const row4Ref = useRef<HTMLDivElement>(null);
  const [startRow1, setStartRow1] = useState(false);
  const [startRow2, setStartRow2] = useState(false);
  const [startRow3, setStartRow3] = useState(false);
  const [startRow4, setStartRow4] = useState(false);

  const setupRow = useCallback(
    (
      containerRef: React.RefObject<HTMLDivElement | null>,
      direction: "left" | "right",
      duration: string,
      setStart: (value: boolean) => void
    ) => {
      if (containerRef.current) {
        const children = Array.from(containerRef.current.children);
        children.forEach((child) => {
          const clonedChild = child.cloneNode(true);
          containerRef.current?.appendChild(clonedChild);
        });

        containerRef.current.style.setProperty(
          "--animation-duration",
          duration
        );
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "left" ? "forwards" : "reverse"
        );
        setStart(true);
      }
    },
    []
  );

  useEffect(() => {
    setupRow(row1Ref, "left", "50s", setStartRow1);
    setupRow(row2Ref, "right", "60s", setStartRow2);
    setupRow(row3Ref, "left", "55s", setStartRow3);
    setupRow(row4Ref, "right", "65s", setStartRow4);
  }, [setupRow]);

  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 md:py-20 bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Complete Web Solutions</GradientText>
          </h2>
          <p className="px-4 mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            From UI/UX Design To Full-Stack Development - Transforming Ideas
            Into Powerful Web Experiences
          </p>
        </div>

        {/* Services Grid - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {services.map((service, index) => {
            const colorClasses = {
              yellow: {
                bg: "bg-yellow-500/10 group-hover:bg-yellow-500/20",
                text: "text-yellow-500",
              },
              purple: {
                bg: "bg-purple-500/10 group-hover:bg-purple-500/20",
                text: "text-purple-500",
              },
              blue: {
                bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
                text: "text-blue-500",
              },
              green: {
                bg: "bg-green-500/10 group-hover:bg-green-500/20",
                text: "text-green-500",
              },
              pink: {
                bg: "bg-pink-500/10 group-hover:bg-pink-500/20",
                text: "text-pink-500",
              },
              red: {
                bg: "bg-red-500/10 group-hover:bg-red-500/20",
                text: "text-red-500",
              },
            };
            const colors =
              colorClasses[service.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <GlassContainer className="group h-full overflow-hidden">
                  <GlowingEffect disabled={false} proximity={200} spread={30} />

                  {/* Background Image */}
                  {service.backgroundImage && (
                    <div className="absolute -bottom-70 -right-80 w-[800px] h-[800px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none">
                      <Image
                        src={service.backgroundImage}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}

                  <div className="p-6 flex flex-col h-full relative z-10">
                    <div
                      className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} transition-colors self-start`}
                    >
                      <service.icon
                        className={`w-6 h-6 ${colors.text}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className={`mr-2 mt-0.5 ${colors.text}`}>
                            •
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassContainer>
              </motion.div>
            );
          })}
        </div>

        {/* Full Width Card - Frontend Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-8 mt-24"
        >
          <GlassContainer className="group overflow-hidden">
            <GlowingEffect disabled={false} proximity={200} spread={30} />

            {/* Background Images */}
            {/* React Logo - Bottom Right */}
            <div className="absolute -bottom-70 -right-80 w-[800px] h-[800px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none">
              <Image
                src="/tech-stack-logos/reactjs-light.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Vue.js Logo - Bottom Left */}
            <div className="absolute -top-70 -left-80 w-[800px] h-[800px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none">
              <Image
                src="/tech-stack-logos/vuejs-light.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 md:p-8 relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  <GradientText>Frontend Development</GradientText>
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Modern Frontend Applications Built With React, Vue, Next.js
                  And Other Cutting-Edge Technologies
                </p>
              </div>
              {/* Frontend Technologies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {frontendTechnologies.map((tech, idx) => {
                  const colorClasses = {
                    yellow: {
                      bg: "bg-yellow-500/10 group-hover/tech:bg-yellow-500/20",
                      text: "text-yellow-500",
                    },
                    purple: {
                      bg: "bg-purple-500/10 group-hover/tech:bg-purple-500/20",
                      text: "text-purple-500",
                    },
                    blue: {
                      bg: "bg-blue-500/10 group-hover/tech:bg-blue-500/20",
                      text: "text-blue-500",
                    },
                    green: {
                      bg: "bg-green-500/10 group-hover/tech:bg-green-500/20",
                      text: "text-green-500",
                    },
                    red: {
                      bg: "bg-red-500/10 group-hover/tech:bg-red-500/20",
                      text: "text-red-500",
                    },
                  };
                  const colors =
                    colorClasses[tech.color as keyof typeof colorClasses];

                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center group/tech cursor-pointer"
                    >
                      <div
                        className={`mb-3 inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} transition-colors`}
                      >
                        <tech.icon
                          className={`w-7 h-7 ${colors.text}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="font-semibold text-foreground mb-2">
                        {tech.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Sparkles Separator */}
              <div className="mt-8 w-full relative">
                <div className="w-full h-40 relative overflow-hidden">
                  {/* Gradients */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

                  {/* Core Component */}
                  <div className="w-full h-full [mask-image:radial-gradient(ellipse_400px_150px_at_center_top,white_0%,transparent_100%)]">
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={1200}
                      className="w-full h-full"
                      particleColor="#00EFAE"
                    />
                  </div>
                </div>
              </div>
              {/* Tech Stack Logos Scroller */}
              <div className="relative w-full -mt-32 pt-8 pb-4 flex flex-col justify-center gap-3 overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_95%,rgba(0,0,0,0)_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
                {/* Row 1 - Left To Right */}
                <div
                  ref={row1Ref}
                  className={cn(
                    "flex gap-3 md:gap-4 w-max relative z-10",
                    startRow1 && "animate-scroll"
                  )}
                >
                  {frontendTechStackLogos.map((tech, idx) => (
                    <div
                      key={`row1-${idx}`}
                      className="pl-2 pr-3 md:pr-4 py-0.5 bg-card/50 border border-border rounded-lg shrink-0 flex items-center gap-2"
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="dark:hidden w-7 h-7 md:w-9 md:h-9"
                      />
                      <Image
                        src={tech.logoDark}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="hidden dark:block w-7 h-7 md:w-9 md:h-9"
                      />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Row 2 - Right To Left */}
                <div
                  ref={row2Ref}
                  className={cn(
                    "flex gap-3 md:gap-4 w-max relative z-10",
                    startRow2 && "animate-scroll"
                  )}
                >
                  {frontendTechStackLogos.map((tech, idx) => (
                    <div
                      key={`row2-${idx}`}
                      className="pl-2 pr-3 md:pr-4 py-0.5 bg-card/80 border border-border rounded-lg shrink-0 flex items-center gap-2"
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="dark:hidden w-7 h-7 md:w-9 md:h-9"
                      />
                      <Image
                        src={tech.logoDark}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="hidden dark:block w-7 h-7 md:w-9 md:h-9"
                      />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassContainer>
        </motion.div>

        {/* Full Width Card - Backend Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-6"
        >
          <GlassContainer className="group overflow-hidden">
            <GlowingEffect disabled={false} proximity={200} spread={30} />

            {/* Background Images */}
            {/* React Logo - Bottom Right */}
            <div className="absolute -bottom-70 -right-80 w-[800px] h-[800px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none">
              <Image
                src="/tech-stack-logos/laravel-light.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Vue.js Logo - Bottom Left */}
            <div className="absolute -top-70 -left-80 w-[800px] h-[800px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none">
              <Image
                src="/tech-stack-logos/django-light.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 md:p-8 relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  <GradientText>Backend Development</GradientText>
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Robust Backend Solutions With Modern Frameworks And
                  Technologies For Scalable, Secure Web Applications
                </p>
              </div>

              {/* Backend Frameworks - Row 1 */}
              <div className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {backendTechnologies.map((tech, idx) => {
                    const colorClasses = {
                      yellow: {
                        bg: "bg-yellow-500/10 group-hover/tech:bg-yellow-500/20",
                        text: "text-yellow-500",
                      },
                      purple: {
                        bg: "bg-purple-500/10 group-hover/tech:bg-purple-500/20",
                        text: "text-purple-500",
                      },
                      blue: {
                        bg: "bg-blue-500/10 group-hover/tech:bg-blue-500/20",
                        text: "text-blue-500",
                      },
                      green: {
                        bg: "bg-green-500/10 group-hover/tech:bg-green-500/20",
                        text: "text-green-500",
                      },
                      red: {
                        bg: "bg-red-500/10 group-hover/tech:bg-red-500/20",
                        text: "text-red-500",
                      },
                    };
                    const colors =
                      colorClasses[tech.color as keyof typeof colorClasses];

                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center group/tech cursor-pointer"
                      >
                        <div
                          className={`mb-3 inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} transition-colors`}
                        >
                          <tech.icon
                            className={`w-7 h-7 ${colors.text}`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <p className="font-semibold text-foreground mb-2">
                          {tech.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Database & Backend Services - Row 2 */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {databaseServices.map((tech, idx) => {
                    const colorClasses = {
                      yellow: {
                        bg: "bg-yellow-500/10 group-hover/tech:bg-yellow-500/20",
                        text: "text-yellow-500",
                      },
                      purple: {
                        bg: "bg-purple-500/10 group-hover/tech:bg-purple-500/20",
                        text: "text-purple-500",
                      },
                      blue: {
                        bg: "bg-blue-500/10 group-hover/tech:bg-blue-500/20",
                        text: "text-blue-500",
                      },
                      green: {
                        bg: "bg-green-500/10 group-hover/tech:bg-green-500/20",
                        text: "text-green-500",
                      },
                      red: {
                        bg: "bg-red-500/10 group-hover/tech:bg-red-500/20",
                        text: "text-red-500",
                      },
                    };
                    const colors =
                      colorClasses[tech.color as keyof typeof colorClasses];

                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center group/tech cursor-pointer"
                      >
                        <div
                          className={`mb-3 inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} transition-colors`}
                        >
                          <tech.icon
                            className={`w-7 h-7 ${colors.text}`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <p className="font-semibold text-foreground mb-2">
                          {tech.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Sparkles Separator */}
              <div className="mt-8 w-full relative">
                <div className="w-full h-40 relative overflow-hidden">
                  {/* Gradients */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

                  {/* Core Component */}
                  <div className="w-full h-full [mask-image:radial-gradient(ellipse_400px_150px_at_center_top,white_0%,transparent_100%)]">
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={1200}
                      className="w-full h-full"
                      particleColor="#00EFAE"
                    />
                  </div>
                </div>
              </div>
              {/* Tech Stack Logos Scroller */}
              <div className="relative w-full -mt-32 pt-8 pb-4 flex flex-col justify-center gap-3 overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_95%,rgba(0,0,0,0)_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
                {/* Row 1 - Left To Right */}
                <div
                  ref={row3Ref}
                  className={cn(
                    "flex gap-3 md:gap-4 w-max relative z-10",
                    startRow3 && "animate-scroll"
                  )}
                >
                  {backendTechStackLogos.map((tech, idx) => (
                    <div
                      key={`row3-${idx}`}
                      className="pl-2 pr-3 md:pr-4 py-0.5 bg-card/50 border border-border rounded-lg shrink-0 flex items-center gap-2"
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="dark:hidden w-7 h-7 md:w-9 md:h-9"
                      />
                      <Image
                        src={tech.logoDark}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="hidden dark:block w-7 h-7 md:w-9 md:h-9"
                      />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                {/* Row 2 - Right To Left */}
                <div
                  ref={row4Ref}
                  className={cn(
                    "flex gap-3 md:gap-4 w-max relative z-10",
                    startRow4 && "animate-scroll"
                  )}
                >
                  {backendTechStackLogos.map((tech, idx) => (
                    <div
                      key={`row4-${idx}`}
                      className="pl-2 pr-3 md:pr-4 py-0.5 bg-card/50 border border-border rounded-lg shrink-0 flex items-center gap-2"
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="dark:hidden w-7 h-7 md:w-9 md:h-9"
                      />
                      <Image
                        src={tech.logoDark}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="hidden dark:block w-7 h-7 md:w-9 md:h-9"
                      />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassContainer>
        </motion.div>
      </div>
    </section>
  );
}
