"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import Image from "next/image";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundDot } from "@/components/ui/background-dot";
import createGlobe from "cobe";
import { useEffect, useRef, useCallback, useState } from "react";

export function WebDesignShowcase() {
  const features = [
    {
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto sm:px-6 md:px-8">
      {/* Title And Subheading */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
          <GradientText>What Makes Us Different</GradientText>
        </h2>
        <p className="px-4 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          From Cutting-Edge Technology To Exceptional Customer Service, We
          Deliver Excellence In Every Aspect Of Our Business.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(`relative overflow-hidden`, feature.className)}
            >
              {feature.skeleton}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const SkeletonOne = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <BackgroundDot backgroundColor="bg-background" fadeDirection="bottom" />
      <div className="relative">
        <p className="max-w-5xl mx-auto text-left tracking-tight text-foreground text-lg sm:text-xl md:text-2xl md:leading-snug">
          We Design To Impress, Crafted With Care
        </p>
        <p className="text-sm md:text-base text-left text-muted-foreground font-normal max-w-lg mx-0 my-2">
          We Create Modern, Elegant Interfaces That Make Every Interaction
          Smooth, Intuitive, And Delightful For Your Audience.
        </p>
      </div>
      <div className="relative h-full w-full mt-4 sm:mt-6 md:mt-8 min-h-[200px] sm:min-h-[300px] md:min-h-0">
        <motion.div
          className="w-full h-full pt-2 mx-auto absolute inset-x-0 bottom-0 z-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            <GlowingEffect
              blur={2}
              borderWidth={4}
              spread={80}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.03}
              className="rounded-t-3xl"
            />
            <GlassContainer
              className="rounded-t-3xl rounded-b-none border-b-0"
              innerClassName="rounded-t-2xl gap-0 flex flex-col border-b-0"
              outerBorderRadius="rounded-t-3xl rounded-b-none"
              innerBorderRadius="rounded-t-2xl rounded-b-none"
              outerPadding="px-4 pt-4 pb-0"
              innerPadding="pt-0 px-0 pb-0"
            >
              {/* Portal Preview Image */}
              <Image
                src="/images/bst-preview-for-light.avif"
                alt="Client Portal Dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-contain dark:hidden rounded-t-2xl"
              />
              <Image
                src="/images/bst-preview-for-dark.avif"
                alt="Client Portal Dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-contain hidden dark:block rounded-t-2xl"
              />
            </GlassContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
      <p className="max-w-5xl mx-auto text-left tracking-tight text-foreground text-lg sm:text-xl md:text-2xl md:leading-snug">
        Reliable Support
      </p>
      <p className="text-sm md:text-base text-left text-muted-foreground font-normal max-w-sm mx-0 my-2">
        Our Dedicated Team Is Available Via Email And Live Chat To Help You
        Succeed.
      </p>
      <div className="relative h-full w-full mt-6 sm:mt-8">
        <div className="absolute bottom-0 inset-x-0 h-15 bg-gradient-to-t from-background via-background to-transparent w-full pointer-events-none z-[11]" />

        <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
            {/* Header */}
            <div className="w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6" />

            {/* Chat Messages */}
            <div className="content mt-4 w-[90%] mx-auto">
              <div className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md animate-chat-message-1 opacity-0">
                Need Help With My Hosting Setup
              </div>

              <div className="message bg-black/80 text-white dark:bg-white/80 dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md animate-chat-message-2 opacity-0">
                I&apos;m Here To Help! What Do You Need Assistance With?
              </div>

              <div className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md animate-chat-message-3 opacity-0">
                How Do I Configure My Domain?
              </div>

              <div className="message bg-black/80 text-white dark:bg-white/80 dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md animate-chat-message-4 opacity-0">
                Let Me Guide You Through The Process...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  const teamMembers = [
    {
      name: "Atik",
      image: "/mtl-team/atik.webp",
    },
    {
      name: "Arman",
      image: "/mtl-team/arman.webp",
    },
    {
      name: "Rubina",
      image: "/mtl-team/rubina.webp",
    },
    {
      name: "Ziaur",
      image: "/mtl-team/ziaur.webp",
    },
  ];

  // Fixed Rotation Values For Visual Variation
  const rotations = [-8, 5, -3, 7];

  const iconVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <p className="max-w-5xl mx-auto text-left tracking-tight text-foreground text-lg sm:text-xl md:text-2xl md:leading-snug">
        Team of Diverse Expertise
      </p>
      <p className="text-sm md:text-base text-left text-muted-foreground font-normal max-w-sm mx-0 my-2">
        Our Team Brings Together Diverse Skills And Expertise To Deliver
        Exceptional Solutions.
      </p>
      <div className="relative flex flex-col items-center sm:items-start p-4 sm:p-6 md:p-8 gap-6 sm:gap-10 h-full overflow-hidden">
        <div className="flex flex-row -ml-4 sm:-ml-16 md:-ml-20">
          {teamMembers.map((member, idx) => (
            <motion.div
              variants={iconVariants}
              key={"team-member-" + idx}
              style={{
                rotate: rotations[idx],
              }}
              whileHover="whileHover"
              whileTap="whileTap"
              className="rounded-xl -mr-4 sm:-mr-4 mt-4 p-1 bg-card dark:border-neutral-700 border border-border shrink-0 overflow-hidden"
            >
              <div className="rounded-lg h-20 w-20 sm:h-24 sm:w-24 md:h-40 md:w-40 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden sm:block absolute left-0 z-[100] inset-y-0 w-16 md:w-20 bg-gradient-to-r from-background to-transparent h-full pointer-events-none" />
        <div className="hidden sm:block absolute right-0 z-[100] inset-y-0 w-16 md:w-20 bg-gradient-to-l from-background to-transparent h-full pointer-events-none" />
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  const techStack = [
    {
      name: "React",
      logo: "/tech-stack-logos/reactjs-dark.svg",
      logoDark: "/tech-stack-logos/reactjs-light.svg",
    },
    {
      name: "NextJS",
      logo: "/tech-stack-logos/nextjs-light.svg",
      logoDark: "/tech-stack-logos/nextjs-dark.svg",
    },
    {
      name: "VueJS",
      logo: "/tech-stack-logos/vuejs-dark.svg",
      logoDark: "/tech-stack-logos/vuejs-light.svg",
    },
    {
      name: "NodeJS",
      logo: "/tech-stack-logos/nodejs-dark.svg",
      logoDark: "/tech-stack-logos/nodejs-light.svg",
    },
    {
      name: "Python",
      logo: "/tech-stack-logos/python-dark.svg",
      logoDark: "/tech-stack-logos/python-light.svg",
    },
    {
      name: "Laravel",
      logo: "/tech-stack-logos/laravel-dark.svg",
      logoDark: "/tech-stack-logos/laravel-light.svg",
    },
    {
      name: "WordPress",
      logo: "/tech-stack-logos/wordpress-dark.svg",
      logoDark: "/tech-stack-logos/wordpress-light.svg",
    },
    {
      name: "Tailwind",
      logo: "/tech-stack-logos/tailwind-dark.svg",
      logoDark: "/tech-stack-logos/tailwind-light.svg",
    },
    {
      name: "Docker",
      logo: "/tech-stack-logos/docker-dark.svg",
      logoDark: "/tech-stack-logos/docker-light.svg",
    },
    {
      name: "AWS",
      logo: "/tech-stack-logos/aws-dark.svg",
      logoDark: "/tech-stack-logos/aws-light.svg",
    },
    {
      name: "Azure",
      logo: "/tech-stack-logos/azure-dark.svg",
      logoDark: "/tech-stack-logos/azure-light.svg",
    },
    {
      name: "Google Cloud",
      logo: "/tech-stack-logos/google-cloud-dark.svg",
      logoDark: "/tech-stack-logos/google-cloud-light.svg",
    },
    {
      name: "Vercel",
      logo: "/tech-stack-logos/nextjs-light.svg",
      logoDark: "/tech-stack-logos/nextjs-dark.svg",
    },
    {
      name: "Netlify",
      logo: "/tech-stack-logos/netlify-dark.svg",
      logoDark: "/tech-stack-logos/netlify-light.svg",
    },
    {
      name: "Firebase",
      logo: "/tech-stack-logos/firebase-dark.svg",
      logoDark: "/tech-stack-logos/firebase-light.svg",
    },
    {
      name: "MongoDB",
      logo: "/tech-stack-logos/mongodb-dark.svg",
      logoDark: "/tech-stack-logos/mongodb-light.svg",
    },
    {
      name: "MySQL",
      logo: "/tech-stack-logos/mysql-dark.svg",
      logoDark: "/tech-stack-logos/mysql-light.svg",
    },
    {
      name: "PostgreSQL",
      logo: "/tech-stack-logos/postgresql-dark.svg",
      logoDark: "/tech-stack-logos/postgresql-light.svg",
    },
    {
      name: "Linux",
      logo: "/tech-stack-logos/linux-dark.svg",
      logoDark: "/tech-stack-logos/linux-light.svg",
    },
    {
      name: "Ubuntu",
      logo: "/tech-stack-logos/ubuntu-dark.svg",
      logoDark: "/tech-stack-logos/ubuntu-light.svg",
    },
    {
      name: "Figma",
      logo: "/tech-stack-logos/figma-dark.svg",
      logoDark: "/tech-stack-logos/figma-light.svg",
    },
    {
      name: "PWA",
      logo: "/tech-stack-logos/pwa-dark.svg",
      logoDark: "/tech-stack-logos/pwa-light.svg",
    },
  ];

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const [startRow1, setStartRow1] = useState(false);
  const [startRow2, setStartRow2] = useState(false);
  const [startRow3, setStartRow3] = useState(false);

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
    setupRow(row2Ref, "right", "65s", setStartRow2);
    setupRow(row3Ref, "left", "70s", setStartRow3);
  }, [setupRow]);

  return (
    <div className="relative h-full w-full">
      {/* Globe Background */}
      <Globe className="absolute -right-10 sm:-right-20 md:-right-30 -bottom-85 sm:-bottom-70 md:-bottom-50 z-0" />
      <div className="p-4 sm:p-6 md:p-8">
        <p className="max-w-5xl mx-auto text-left tracking-tight text-foreground text-lg sm:text-xl md:text-2xl md:leading-snug">
          Multi-Stack Solutions
        </p>
        <p className="text-sm md:text-base text-left text-muted-foreground font-normal max-w-sm mx-0 my-2">
          We Deploy Your Vision With The Technology Stack That Best Fits Your
          Needs And Goals.
        </p>
      </div>
      <div className="relative w-full pt-20 py-12 flex flex-col justify-center gap-3 sm:gap-4 overflow-hidden">
        {/* Row 1 - Left To Right */}
        <div
          ref={row1Ref}
          className={cn(
            "flex gap-2 sm:gap-3 md:gap-4 w-max relative z-10",
            startRow1 && "animate-scroll"
          )}
        >
          {techStack.map((tech, idx) => (
            <div
              key={`row1-${idx}`}
              className="pl-1.5 pr-2 sm:pl-2 sm:pr-3 md:pr-4 py-0.5 bg-card/50 border border-border rounded-lg shrink-0 flex items-center gap-1.5 sm:gap-2"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={28}
                height={28}
                className="dark:hidden w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9"
              />
              <Image
                src={tech.logoDark}
                alt={tech.name}
                width={28}
                height={28}
                className="hidden dark:block w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9"
              />
              <span className="text-xs sm:text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 - Right To Left */}
        <div
          ref={row2Ref}
          className={cn(
            "flex gap-2 sm:gap-3 md:gap-4 w-max relative z-10",
            startRow2 && "animate-scroll"
          )}
        >
          {techStack.map((tech, idx) => (
            <div
              key={`row2-${idx}`}
              className="pl-1.5 pr-2 sm:pl-2 sm:pr-3 md:pr-4 py-0.5 bg-card/80 border border-border rounded-lg shrink-0 flex items-center gap-1.5 sm:gap-2"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={28}
                height={28}
                className="dark:hidden w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9"
              />
              <Image
                src={tech.logoDark}
                alt={tech.name}
                width={28}
                height={28}
                className="hidden dark:block w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9"
              />
              <span className="text-xs sm:text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 3 - Left To Right */}
        <div
          ref={row3Ref}
          className={cn(
            "flex gap-2 sm:gap-3 md:gap-4 w-max relative z-10",
            startRow3 && "animate-scroll"
          )}
        >
          {techStack.map((tech, idx) => (
            <div
              key={`row3-${idx}`}
              className="pl-1.5 pr-2 sm:pl-2 sm:pr-3 md:pr-4 py-0.5 bg-card/50 border border-border rounded-lg shrink-0 flex items-center gap-1.5 sm:gap-2"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={28}
                height={28}
                className="dark:hidden w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9"
              />
              <Image
                src={tech.logoDark}
                alt={tech.name}
                width={28}
                height={28}
                className="hidden dark:block w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9"
              />
              <span className="text-xs sm:text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
        {/* <div className="absolute right-0 inset-y-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-20" /> */}
      </div>
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [23.8103, 90.4125], size: 0.1 }, // Dhaka, Bangladesh
        { location: [40.7128, -74.006], size: 0.05 }, // New York
        { location: [51.5074, -0.1278], size: 0.05 }, // London
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
