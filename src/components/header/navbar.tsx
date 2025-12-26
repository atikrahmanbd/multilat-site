"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  LogIn,
  TextAlignJustify,
  X,
  Home,
  Globe,
  Server,
  TrendingUp,
  Building2,
  Mail,
  BookOpen,
  // Domains & Hosting
  Cloud,
  HardDrive,
  Search,
  MapPin,
  Network,
  ShieldCheck,
  FileText,
  Gauge,
  Radio,
  Route,
  // Marketing
  Target,
  Megaphone,
  Share2,
  PenTool,
  Star,
  Users,
  MailOpen,
  Bot,
  Sparkles,
  UserCheck,
  CircleDollarSign,
  MousePointerClick,
  RefreshCcw,
  BarChart3,
  // Solutions
  Layout,
  Layers,
  PenSquare,
  MonitorSmartphone,
  GitBranch,
  Boxes,
  // IT Solutions
  Lightbulb,
  Headphones,
  Workflow,
  // Footer Icons
  Rocket,
  ArrowRight,
  ExternalLink,
  // Brand Icons (Fallback)
  Box,
  Send,
  Scale,
  // Product Icons
  Rss,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Brand Icons From react-icons (Simple Icons)
import {
  SiWordpress,
  SiElementor,
  SiShopify,
  SiWoo,
  SiBigcommerce,
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiLaravel,
  SiDjango,
  SiNodedotjs,
  SiAmazonwebservices,
} from "react-icons/si";
import { FaAndroid, FaApple } from "react-icons/fa6";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  HoverBorderGradientButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";
import GradientText from "@/components/ui/gradient-text";
import { cn } from "@/lib/utils";

// Badge Types and Configuration
type BadgeType = "new" | "hot" | "free" | "popular" | "open-source" | "beta";

const badgeConfig: Record<BadgeType, { label: string; className: string }> = {
  new: {
    label: "New",
    className:
      "bg-green-500/15 text-green-600 dark:text-green-400 ring-green-500/30",
  },
  hot: {
    label: "Hot",
    className: "bg-red-500/15 text-red-600 dark:text-red-400 ring-red-500/30",
  },
  free: {
    label: "Free",
    className: "bg-primary/15 text-primary ring-primary/30",
  },
  popular: {
    label: "Popular",
    className:
      "bg-purple-500/15 text-purple-600 dark:text-purple-400 ring-purple-500/30",
  },
  "open-source": {
    label: "Open Source",
    className:
      "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-emerald-500/30",
  },
  beta: {
    label: "Beta",
    className:
      "bg-amber-500/15 text-amber-600 dark:text-amber-400 ring-amber-500/30",
  },
};

// Menu Badge Component
function MenuBadge({ type }: { type: BadgeType }) {
  const config = badgeConfig[type];
  return (
    <span
      className={cn(
        "ml-1.5 px-1.5 py-0.25 text-[9px] font-semibold uppercase rounded-full ring-1 whitespace-nowrap",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileHostingOpen, setMobileHostingOpen] = useState(false);
  const [mobileMarketingOpen, setMobileMarketingOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
    const element = menuRefs.current[label];
    const menuItem = menuItems.find((item) => item.label === label);
    if (element && menuItem) {
      const rect = element.getBoundingClientRect();
      const dropdownWidth = menuItem.dropdownWidth || 550;
      // Calculate content area bounds (max-w-7xl = 1280px centered)
      const contentWidth = Math.min(1280, window.innerWidth);
      const contentLeft = (window.innerWidth - contentWidth) / 2;
      // Center dropdown within the content area
      const left = contentLeft + (contentWidth - dropdownWidth) / 2;
      setDropdownPosition({
        top: rect.bottom - 1,
        left: Math.max(contentLeft, left),
        width: Math.min(dropdownWidth, contentWidth),
      });
    }
  };

  const menuItems = [
    {
      label: "Home",
      href: "/",
      hasDropdown: false,
    },
    {
      label: "Hosting",
      href: "/hosting",
      hasDropdown: true,
      dropdownWidth: 600,
      dropdownLayout: "rows",
      dropdownSections: [
        {
          title: "Domains & Hosting",
          titleHref: "/hosting",
          items: [
            {
              label: "Domains",
              href: "/hosting/domains",
              description: "Register & Manage Domain Names",
              badge: "hot" as BadgeType,
              icon: Globe,
            },
            {
              label: "Performance Hosting",
              href: "/hosting/performance-hosting",
              description: "Fast & Reliable Web Hosting",
              badge: "popular" as BadgeType,
              icon: Server,
            },
            {
              label: "Cloud/VPS Servers",
              href: "/hosting/cloud-vps-servers",
              description: "Scalable Cloud Infrastructure",
              badge: "new" as BadgeType,
              icon: Cloud,
            },
            {
              label: "Dedicated Servers",
              href: "/hosting/dedicated-servers",
              description: "Full Server Control & Power",
              badge: "new" as BadgeType,
              icon: HardDrive,
            },
          ],
        },
        {
          title: "Free Useful Tools",
          titleHref: "/tools",
          items: [
            {
              label: "WHOIS Lookup",
              href: "/tools/whois-lookup",
              description: "Domain Ownership Info",
              icon: Search,
            },
            {
              label: "IP Lookup",
              href: "/tools/ip-lookup",
              description: "IP Address Details",
              icon: MapPin,
            },
            {
              label: "DNS Lookup",
              href: "/tools/dns-lookup",
              description: "DNS Record Checker",
              icon: Network,
            },
            {
              label: "SSL Checker",
              href: "/tools/ssl-checker",
              description: "Verify SSL Certificates",
              icon: ShieldCheck,
            },
            {
              label: "HTTP Header Checker",
              href: "/tools/http-header-checker",
              description: "Inspect HTTP Headers",
              icon: FileText,
            },
            {
              label: "Speed Test",
              href: "/tools/speed-test",
              description: "Test Connection Speed",
              icon: Gauge,
            },
            {
              label: "Ping Test",
              href: "/tools/ping-test",
              description: "Check Server Response",
              icon: Radio,
            },
            {
              label: "Traceroute",
              href: "/tools/traceroute",
              description: "Trace Network Path",
              icon: Route,
            },
          ],
        },
      ],
      dropdownFooter: {
        text: "Try Our Premium Hosting, Backed By 30-Day Money-Back Guarantee, No Questions Asked!",
        buttonLabel: "Go To Dashboard",
        buttonHref: "https://hub.multilat.xyz",
        buttonExternal: true,
        buttonIcon: ArrowRight,
        buttonIconPosition: "before",
      },
    },
    {
      label: "Marketing",
      href: "/marketing",
      hasDropdown: true,
      dropdownWidth: 600,
      dropdownLayout: "rows",
      dropdownSections: [
        {
          title: "Core Marketing Strategies",
          titleHref: "/marketing",
          items: [
            {
              label: "360° Digital Marketing",
              href: "/marketing/360-digital-marketing",
              description: "Complete Marketing Solutions",
              badge: "hot" as BadgeType,
              icon: Target,
            },
            {
              label: "Search Engine Optimization",
              href: "/marketing/search-engine-optimization",
              description: "Rank Higher on Search",
              icon: TrendingUp,
            },
            {
              label: "Social Media Marketing",
              href: "/marketing/social-media-marketing",
              description: "Engage Your Audience",
              icon: Share2,
            },
            {
              label: "Content Marketing",
              href: "/marketing/content-marketing",
              description: "Compelling Content Strategy",
              icon: PenTool,
            },
            {
              label: "Reputation Management",
              href: "/marketing/reputation-management",
              description: "Protect Your Brand Image",
              icon: Star,
            },
            {
              label: "Lead Generation",
              href: "/marketing/lead-generation",
              description: "Capture Quality Leads",
              icon: Users,
            },
            {
              label: "Email Marketing",
              href: "/marketing/email-marketing",
              description: "Targeted Email Campaigns",
              icon: MailOpen,
            },
            {
              label: "AI Content Creation",
              href: "/marketing/ai-content-creation",
              description: "AI-Powered Content",
              badge: "new" as BadgeType,
              icon: Bot,
            },
            {
              label: "AI Marketing Automation",
              href: "/marketing/ai-marketing-automation",
              description: "Automate With AI",
              badge: "new" as BadgeType,
              icon: Sparkles,
            },
            {
              label: "Influencer Marketing",
              href: "/marketing/influencer-marketing",
              description: "Partner With Influencers",
              icon: UserCheck,
            },
          ],
        },
        {
          title: "Paid Advertising",
          titleHref: "/marketing/paid-advertising",
          items: [
            {
              label: "Google Ads",
              href: "/marketing/paid-advertising/google-ads",
              description: "Search, Display & YouTube",
              icon: CircleDollarSign,
            },
            {
              label: "Social Media Ads",
              href: "/marketing/paid-advertising/social-media-ads",
              description: "Meta (FB, Insta), TikTok, X, LinkedIn",
              badge: "hot" as BadgeType,
              icon: Megaphone,
            },
            {
              label: "PPC Campaign Management",
              href: "/marketing/paid-advertising/ppc-campaign-management",
              description: "Pay-Per-Click Campaigns",
              icon: MousePointerClick,
            },
            {
              label: "Retargeting & Remarketing",
              href: "/marketing/paid-advertising/retargeting-remarketing",
              description: "Re-engage Your Visitors",
              icon: RefreshCcw,
            },
            {
              label: "Campaign Optimization",
              href: "/marketing/paid-advertising/campaign-optimization",
              description: "Maximize Your ROI",
              icon: BarChart3,
            },
          ],
        },
      ],
      dropdownFooter: {
        text: "Grow Your Business With Our Expert Marketing Strategies.",
        buttonLabel: "Get Started",
        buttonHref: "/contact",
        buttonExternal: false,
        buttonIcon: ArrowRight,
        buttonIconPosition: "after",
      },
    },
    {
      label: "Solutions",
      href: "/solutions",
      hasDropdown: true,
      dropdownWidth: 1216,
      dropdownLayout: "solutions",
      dropdownColumns: [
        {
          // First column: 4 sections stacked (row-based) - half width
          width: "50%",
          sections: [
            {
              title: "Web Development",
              titleHref: "/solutions/web-development",
              gridCols: 2,
              items: [
                {
                  label: "Landing Page Design",
                  href: "/solutions/web-development/landing-page-design",
                  description: "High-Converting Pages",
                  icon: Layout,
                },
                {
                  label: "WordPress Development",
                  href: "/solutions/web-development/wordpress-development",
                  description: "WordPress Expertise",
                  icon: SiWordpress,
                },
                {
                  label: "Elementor Development",
                  href: "/solutions/web-development/elementor-development",
                  description: "Visual Page Builder",
                  icon: SiElementor,
                  badge: "popular" as BadgeType,
                },
                {
                  label: "UI/UX Design",
                  href: "/solutions/web-development/ui-ux-design",
                  description: "User-Centered Design",
                  icon: PenSquare,
                },
                {
                  label: "Custom Website",
                  href: "/solutions/web-development/custom-website",
                  description: "Custom Web Solutions",
                  icon: MonitorSmartphone,
                },
              ],
            },
            {
              title: "E-commerce Development",
              titleHref: "/solutions/ecommerce-development",
              gridCols: 2,
              items: [
                {
                  label: "Shopify Development",
                  href: "/solutions/ecommerce-development/shopify-development",
                  description: "Shopify Store Setup",
                  icon: SiShopify,
                  badge: "hot" as BadgeType,
                },
                {
                  label: "WooCommerce Development",
                  href: "/solutions/ecommerce-development/woocommerce-development",
                  description: "WordPress E-commerce",
                  icon: SiWoo,
                },
                {
                  label: "BigCommerce Development",
                  href: "/solutions/ecommerce-development/bigcommerce-development",
                  description: "Enterprise E-commerce",
                  icon: SiBigcommerce,
                },
                {
                  label: "Custom E-commerce",
                  href: "/solutions/ecommerce-development/custom-ecommerce",
                  description: "Tailored Online Stores",
                  icon: Boxes,
                },
              ],
            },
            {
              title: "Frontend Development",
              titleHref: "/solutions/frontend-development",
              gridCols: 2,
              items: [
                {
                  label: "React Development",
                  href: "/solutions/frontend-development#react",
                  description: "React.js Applications",
                  icon: SiReact,
                },
                {
                  label: "Next.js Development",
                  href: "/solutions/frontend-development#nextjs",
                  description: "Full-Stack React",
                  icon: SiNextdotjs,
                  badge: "hot" as BadgeType,
                },
                {
                  label: "Vue.js Development",
                  href: "/solutions/frontend-development#vuejs",
                  description: "Vue.js Applications",
                  icon: SiVuedotjs,
                },
                {
                  label: "Tailwind CSS",
                  href: "/solutions/frontend-development#tailwind",
                  description: "Modern CSS Framework",
                  icon: SiTailwindcss,
                  badge: "popular" as BadgeType,
                },
              ],
            },
            {
              title: "Mobile App Development",
              titleHref: "/solutions/mobile-app-development",
              gridCols: 2,
              items: [
                {
                  label: "iOS App Development",
                  href: "/solutions/mobile-app-development#ios",
                  description: "Native iOS Apps",
                  icon: FaApple,
                },
                {
                  label: "Android App Development",
                  href: "/solutions/mobile-app-development#android",
                  description: "Native Android Apps",
                  icon: FaAndroid,
                },
                {
                  label: "Flutter Development",
                  href: "/solutions/mobile-app-development#flutter",
                  description: "Cross-Platform Apps",
                  icon: SiFlutter,
                },
                {
                  label: "React Native Development",
                  href: "/solutions/mobile-app-development#react-native",
                  description: "Hybrid Mobile Apps",
                  icon: SiReact,
                },
              ],
            },
          ],
        },
        {
          // Second column: Backend
          sections: [
            {
              title: "Backend Development",
              titleHref: "/solutions/backend-development",
              items: [
                {
                  label: "PHP/Laravel Development",
                  href: "/solutions/backend-development#php-laravel",
                  description: "PHP Framework",
                  icon: SiLaravel,
                },
                {
                  label: "Python/Django Development",
                  href: "/solutions/backend-development#python-django",
                  description: "Python Framework",
                  icon: SiDjango,
                },
                {
                  label: "Node.js Development",
                  href: "/solutions/backend-development#nodejs",
                  description: "JavaScript Backend",
                  icon: SiNodedotjs,
                },
                {
                  label: "RESTful APIs",
                  href: "/solutions/backend-development#restful-apis",
                  description: "API Development",
                  icon: GitBranch,
                },
                {
                  label: "Microservices",
                  href: "/solutions/backend-development#microservices",
                  description: "Scalable Architecture",
                  icon: Boxes,
                },
              ],
            },
          ],
        },
        {
          // Third column: IT Solutions
          sections: [
            {
              title: "IT Solutions",
              titleHref: "/solutions/it-solutions",
              items: [
                {
                  label: "IT Consulting",
                  href: "/solutions/it-solutions/it-consulting",
                  description: "Strategic IT Guidance",
                  icon: Lightbulb,
                },
                {
                  label: "Managed IT Services",
                  href: "/solutions/it-solutions/managed-it-services",
                  description: "24/7 IT Support",
                  icon: Headphones,
                },
                {
                  label: "Digital Transformation",
                  href: "/solutions/it-solutions/digital-transformation",
                  description: "Modernize Your Business",
                  icon: Workflow,
                },
                {
                  label: "Cloud & DevOps",
                  href: "/solutions/it-solutions/cloud-devops",
                  description: "AWS Infrastructure",
                  icon: SiAmazonwebservices,
                },
              ],
            },
          ],
        },
      ],
      dropdownBottomSection: {
        title: "Our Products / Additional Services",
        gridCols: 2,
        items: [
          {
            label: "Cut Out Image, Inc.",
            href: "https://cutoutimage.com",
            description: "Complete Image Editing Solution",
            image: "/our-brands/cut-out-image.png",
            isExternal: true,
          },
          {
            label: "Render Bakery",
            href: "https://renderbakery.com",
            description: "3D Studio - Complete 3D Solution",
            icon: Box,
            isExternal: true,
          },
          {
            label: "FullStack Crew",
            href: "https://fullstackcrew.com",
            description: "All Inclusive BPO Solutions",
            image: "/our-brands/fullstack-crew.jpg",
            isExternal: true,
          },
          {
            label: "Sendsfer",
            href: "https://sendsfer.com",
            description: "File Transfer w/ Ease",
            badge: "open-source" as BadgeType,
            icon: Send,
            isExternal: true,
          },
          {
            label: "Desk Optic",
            href: "https://deskoptic.com",
            description: "Desktop Time & Activity Tracking",
            badge: "open-source" as BadgeType,
            icon: Clock,
            isExternal: true,
          },
          {
            label: "Multilat Feed",
            href: "https://feed.multilat.xyz",
            description: "Automated Bank Feed For Xero",
            icon: Rss,
            isExternal: true,
          },
        ],
      },
      dropdownSocialContributionSection: {
        title: "Our Social Contributions",
        gridCols: 2,
        items: [
          {
            label: "Joyee",
            href: "https://joyee.com.bd",
            description: "Skills For Women Empowerment",
            image: "/our-brands/joyee-logo-text-color.svg",
            isExternal: true,
          },
          {
            label: "Socheton Nagorik",
            href: "https://sochetonnagorik.org",
            description: "Help People Learn Civic Sense",
            icon: Scale,
            isExternal: true,
          },
          {
            label: "Onco Story",
            href: "https://oncostory.org",
            description: "Cancer Survivor Stories of Strength",
            image: "/our-brands/oncostory.jpg",
            isExternal: true,
          },
        ],
      },
      dropdownFooter: {
        text: "Let's Build Something Amazing Together. Hire Us Today!",
        buttonLabel: "Start A Project",
        buttonHref: "/contact",
        buttonExternal: false,
        buttonIcon: Rocket,
        buttonIconPosition: "before",
      },
    },
    {
      label: "About Us",
      href: "/about",
      hasDropdown: false,
    },
  ];

  // Menu item type for mobile rendering
  type MobileMenuItem = {
    label: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<{ className?: string }>;
    image?: string;
    badge?: BadgeType;
    isExternal?: boolean;
  };

  type MobileSection = {
    title: string;
    titleHref?: string;
    items: MobileMenuItem[];
  };

  // Helper function to get mobile sections from desktop menu item
  const getMobileSectionsFromMenuItem = (menuLabel: string): MobileSection[] => {
    const menuItem = menuItems.find((item) => item.label === menuLabel);
    if (!menuItem) return [];

    // For Hosting and Marketing - use dropdownSections directly
    if (menuItem.dropdownSections) {
      return menuItem.dropdownSections as MobileSection[];
    }

    // For Solutions - flatten columns and add bottom sections
    if (menuItem.dropdownColumns) {
      const sections: MobileSection[] = [];

      // Extract sections from all columns
      menuItem.dropdownColumns.forEach((column) => {
        column.sections.forEach((section) => {
          sections.push(section as MobileSection);
        });
      });

      // Add bottom section if exists
      if ("dropdownBottomSection" in menuItem && menuItem.dropdownBottomSection) {
        sections.push(menuItem.dropdownBottomSection as MobileSection);
      }

      // Add social contribution section if exists
      if (
        "dropdownSocialContributionSection" in menuItem &&
        menuItem.dropdownSocialContributionSection
      ) {
        sections.push(menuItem.dropdownSocialContributionSection as MobileSection);
      }

      return sections;
    }

    return [];
  };

  // Mobile menu - Bottom items
  const mobileBottomItems = [
    { label: "About Us", href: "/about", icon: Building2 },
    { label: "Contact Us", href: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[60] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[75%] sm:w-1/2 min-w-[200px] bg-background/60 backdrop-blur-sm border-r border-border z-[70] lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 h-[64px] min-h-[64px] border-b border-border">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src="/logos/multilat-logo-for-light.svg"
                      alt="Multilat"
                      width={120}
                      height={20}
                      className="h-6 w-auto dark:hidden"
                      priority
                    />
                    <Image
                      src="/logos/multilat-logo-for-dark.svg"
                      alt="Multilat"
                      width={120}
                      height={20}
                      className="hidden h-6 w-auto dark:block"
                      priority
                    />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-muted rounded-md transition-colors"
                    aria-label="Close Menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-4">
                  <ul className="space-y-1">
                    {/* Home */}
                    <li>
                      <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                          pathname === "/"
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <Home className="h-4 w-4 flex-shrink-0" />
                        <span>Home</span>
                      </Link>
                    </li>

                    {/* Hosting - Expandable */}
                    <li>
                      <button
                        onClick={() => setMobileHostingOpen(!mobileHostingOpen)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        <Server className="h-4 w-4 flex-shrink-0" />
                        <span className="flex-1 text-left">Hosting</span>
                        <ChevronDown
                          className={`h-4 w-4 flex-shrink-0 transition-transform ${
                            mobileHostingOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileHostingOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 overflow-hidden border-l-2 border-border ml-[19px]"
                          >
                            {getMobileSectionsFromMenuItem("Hosting").map((section) => (
                              <div key={section.title} className="mb-2">
                                <h4 className="pl-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                                  {section.title}
                                </h4>
                                <ul className="space-y-1">
                                  {section.items.map((item) => {
                                    const Icon = item.icon;
                                    const hasImage = item.image;
                                    const isExternal = item.isExternal;
                                    const linkContent = (
                                      <>
                                        {hasImage ? (
                                          <div className="flex-shrink-0 w-5 h-5 rounded overflow-hidden">
                                            <Image
                                              src={item.image as string}
                                              alt={item.label}
                                              width={20}
                                              height={20}
                                              className="w-full h-full object-cover"
                                              unoptimized
                                            />
                                          </div>
                                        ) : Icon ? (
                                          <Icon className="h-5 w-5 flex-shrink-0" />
                                        ) : null}
                                        <span>{item.label}</span>
                                        {item.badge && (
                                          <MenuBadge type={item.badge} />
                                        )}
                                        {isExternal && (
                                          <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                                        )}
                                      </>
                                    );
                                    return (
                                      <li key={item.href}>
                                        {isExternal ? (
                                          <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className="flex items-center gap-3 pl-4 pr-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
                                          >
                                            {linkContent}
                                          </a>
                                        ) : (
                                          <Link
                                            href={item.href}
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className={`flex items-center gap-3 pl-4 pr-3 py-2 text-sm font-medium transition-colors ${
                                              pathname === item.href
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                            }`}
                                          >
                                            {linkContent}
                                          </Link>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>

                    {/* Marketing - Expandable */}
                    <li>
                      <button
                        onClick={() =>
                          setMobileMarketingOpen(!mobileMarketingOpen)
                        }
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        <Megaphone className="h-4 w-4 flex-shrink-0" />
                        <span className="flex-1 text-left">Marketing</span>
                        <ChevronDown
                          className={`h-4 w-4 flex-shrink-0 transition-transform ${
                            mobileMarketingOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileMarketingOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 overflow-hidden border-l-2 border-border ml-[19px]"
                          >
                            {getMobileSectionsFromMenuItem("Marketing").map((section) => (
                              <div key={section.title} className="mb-2">
                                <h4 className="pl-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                                  {"titleHref" in section &&
                                  section.titleHref ? (
                                    <Link
                                      href={section.titleHref}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                                    >
                                      {section.title}
                                      <ArrowRight className="h-3 w-3 opacity-60" />
                                    </Link>
                                  ) : (
                                    section.title
                                  )}
                                </h4>
                                <ul className="space-y-1">
                                  {section.items.map((item) => {
                                    const Icon = item.icon;
                                    const hasImage = item.image;
                                    const isExternal = item.isExternal;
                                    const linkContent = (
                                      <>
                                        {hasImage ? (
                                          <div className="flex-shrink-0 w-5 h-5 rounded overflow-hidden">
                                            <Image
                                              src={item.image as string}
                                              alt={item.label}
                                              width={20}
                                              height={20}
                                              className="w-full h-full object-cover"
                                              unoptimized
                                            />
                                          </div>
                                        ) : Icon ? (
                                          <Icon className="h-5 w-5 flex-shrink-0" />
                                        ) : null}
                                        <span>{item.label}</span>
                                        {item.badge && (
                                          <MenuBadge type={item.badge} />
                                        )}
                                        {isExternal && (
                                          <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                                        )}
                                      </>
                                    );
                                    return (
                                      <li key={item.href}>
                                        {isExternal ? (
                                          <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className="flex items-center gap-3 pl-4 pr-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
                                          >
                                            {linkContent}
                                          </a>
                                        ) : (
                                          <Link
                                            href={item.href}
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className={`flex items-center gap-3 pl-4 pr-3 py-2 text-sm font-medium transition-colors ${
                                              pathname === item.href
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                            }`}
                                          >
                                            {linkContent}
                                          </Link>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>

                    {/* Solutions - Expandable */}
                    <li>
                      <button
                        onClick={() =>
                          setMobileSolutionsOpen(!mobileSolutionsOpen)
                        }
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        <Layers className="h-4 w-4 flex-shrink-0" />
                        <span className="flex-1 text-left">Solutions</span>
                        <ChevronDown
                          className={`h-4 w-4 flex-shrink-0 transition-transform ${
                            mobileSolutionsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileSolutionsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 overflow-hidden border-l-2 border-border ml-[19px]"
                          >
                            {getMobileSectionsFromMenuItem("Solutions").map((section) => (
                              <div key={section.title} className="mb-2">
                                <h4 className="pl-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                                  {"titleHref" in section &&
                                  section.titleHref ? (
                                    <Link
                                      href={section.titleHref}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                                    >
                                      {section.title}
                                      <ArrowRight className="h-3 w-3 opacity-60" />
                                    </Link>
                                  ) : (
                                    section.title
                                  )}
                                </h4>
                                <ul className="space-y-1">
                                  {section.items.map((item) => {
                                    const Icon = item.icon;
                                    const hasImage = item.image;
                                    const isExternal = item.isExternal;
                                    const linkContent = (
                                      <>
                                        {hasImage ? (
                                          <div className="flex-shrink-0 w-5 h-5 rounded overflow-hidden">
                                            <Image
                                              src={item.image as string}
                                              alt={item.label}
                                              width={20}
                                              height={20}
                                              className="w-full h-full object-cover"
                                              unoptimized
                                            />
                                          </div>
                                        ) : Icon ? (
                                          <Icon className="h-5 w-5 flex-shrink-0" />
                                        ) : null}
                                        <span>{item.label}</span>
                                        {item.badge && (
                                          <MenuBadge type={item.badge} />
                                        )}
                                        {isExternal && (
                                          <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                                        )}
                                      </>
                                    );
                                    return (
                                      <li key={item.href}>
                                        {isExternal ? (
                                          <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className="flex items-center gap-3 pl-4 pr-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
                                          >
                                            {linkContent}
                                          </a>
                                        ) : (
                                          <Link
                                            href={item.href}
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className={`flex items-center gap-3 pl-4 pr-3 py-2 text-sm font-medium transition-colors ${
                                              pathname === item.href
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                            }`}
                                          >
                                            {linkContent}
                                          </Link>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>

                    {/* Bottom Menu Items */}
                    {mobileBottomItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                              pathname === item.href
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <a
                      href="https://guides.multilat.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1"
                    >
                      <button className="w-full flex items-center justify-center gap-2 h-9 rounded-full bg-primary/5 px-3 ring-1 ring-primary/15 text-sm font-medium transition-colors hover:bg-primary/10 hover:ring-primary/30 text-primary">
                        <BookOpen className="h-4 w-4" />
                        Guides
                      </button>
                    </a>
                    <a
                      href="https://hub.multilat.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1"
                    >
                      <HoverBorderGradientButton
                        shape="pill"
                        size="sm"
                        className="w-full justify-center px-5 py-1.75 text-[0.8125rem]"
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Login
                      </HoverBorderGradientButton>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-0">
          {/* Mobile Hamburger + Logo */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="pl-0 p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Open Menu"
            >
              <TextAlignJustify className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/multilat-logo-for-light.svg"
                alt="Multilat"
                width={120}
                height={20}
                className="h-5 w-auto dark:hidden"
                priority
              />
              <Image
                src="/logos/multilat-logo-for-dark.svg"
                alt="Multilat"
                width={120}
                height={20}
                className="hidden h-5 w-auto dark:block"
                priority
              />
            </Link>
          </div>

          {/* Desktop Logo */}
          <Link href="/" className="hidden lg:flex items-center">
            <Image
              src="/logos/multilat-logo-for-light.svg"
              alt="Multilat"
              width={120}
              height={20}
              className="h-5 w-auto dark:hidden"
              priority
            />
            <Image
              src="/logos/multilat-logo-for-dark.svg"
              alt="Multilat"
              width={120}
              height={20}
              className="hidden h-5 w-auto dark:block"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 lg:flex absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => {
              const isActive = item.hasDropdown
                ? pathname?.startsWith(item.href)
                : pathname === item.href;
              const isDropdownOpen = activeDropdown === item.label;
              const showThemeGradient = isDropdownOpen;
              const showPrimaryGradient = isActive && !isDropdownOpen;

              const menuClassName = `group relative inline-block rounded-sm px-3 py-2 text-base font-medium transition-colors hover:text-foreground cursor-pointer ${
                isActive || isDropdownOpen
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`;

              const menuContent = (
                <>
                  {/* Dot Indicator - 3 Dots For Dropdown, 1 Dot For Regular */}
                  <span className="absolute top-1 left-1/2 -translate-x-1/2 flex gap-1">
                    <span className="w-[3px] h-[3px] rounded-full bg-primary" />
                    {item.hasDropdown && (
                      <>
                        <span className="w-[3px] h-[3px] rounded-full bg-primary" />
                        <span className="w-[3px] h-[3px] rounded-full bg-primary" />
                      </>
                    )}
                  </span>
                  <span>{item.label}</span>
                  {/* Primary Gradient - Active State (Not Hovering Dropdown) */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-300 pointer-events-none ${
                      showPrimaryGradient ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
                    }}
                  />
                  {/* Theme Gradient - Hover Or Dropdown Open */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-300 pointer-events-none ${
                      showThemeGradient
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to right, transparent, transparent, var(--color-primary), transparent, transparent)",
                    }}
                  />
                </>
              );

              return (
                <div
                  key={item.label}
                  ref={(el) => {
                    if (item.hasDropdown) {
                      menuRefs.current[item.label] = el;
                    }
                  }}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button type="button" className={menuClassName}>
                      {menuContent}
                    </button>
                  ) : (
                    <Link href={item.href} className={menuClassName}>
                      {menuContent}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 ml-auto lg:ml-0">
            <a
              href="https://guides.multilat.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 h-8 rounded-full bg-primary/5 px-3 ring-1 ring-primary/15 text-sm font-medium transition-colors hover:bg-primary/10 hover:ring-primary/30 text-primary"
            >
              <BookOpen className="h-4 w-4" />
              Guides
            </a>
            <ThemeSwitch />
            <a
              href="https://hub.multilat.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <HoverBorderGradientButton
                shape="pill"
                size="sm"
                className="px-5 py-1.75 text-[0.8125rem]"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </HoverBorderGradientButton>
            </a>
            <a
              href="https://hub.multilat.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="block lg:hidden"
            >
              <HoverBorderGradientButton
                shape="pill"
                size="sm"
                className="px-3 py-1.5 text-[0.8125rem]"
              >
                <LogIn className="h-3 w-3 mr-1.5" />
                Login
              </HoverBorderGradientButton>
            </a>
          </div>
        </div>

        {/* Portal For Dropdown Menu */}
        {mounted &&
          activeDropdown &&
          dropdownPosition &&
          createPortal(
            <AnimatePresence>
              {menuItems.map(
                (item) =>
                  item.hasDropdown &&
                  activeDropdown === item.label && (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed z-50 pt-8"
                      style={{
                        top: `${dropdownPosition.top}px`,
                        left: `${dropdownPosition.left}px`,
                        width: `${dropdownPosition.width}px`,
                      }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="rounded-xl border border-primary/25 bg-background/95 backdrop-blur-xl shadow-lg">
                        {item.dropdownLayout === "solutions" ? (
                          <div className="flex divide-x divide-border">
                            {/* Left Column - 50% */}
                            {item.dropdownColumns?.[0] && (
                              <div
                                className="divide-y divide-border"
                                style={{ width: "50%", flexShrink: 0 }}
                              >
                                {item.dropdownColumns[0].sections.map(
                                  (section) => {
                                    const hasGrid =
                                      "gridCols" in section &&
                                      section.gridCols === 2;
                                    const rowCount = hasGrid
                                      ? Math.ceil(section.items.length / 2)
                                      : section.items.length;
                                    return (
                                      <div key={section.title} className="p-4">
                                        <h3 className="mb-3 pl-2 pt-2 text-xs font-semibold uppercase tracking-wider">
                                          {"titleHref" in section &&
                                          section.titleHref ? (
                                            <Link
                                              href={section.titleHref}
                                              className="group inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                                            >
                                              <GradientText>
                                                {section.title}
                                              </GradientText>
                                              <ArrowRight className="h-3 w-3 text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                            </Link>
                                          ) : (
                                            <GradientText>
                                              {section.title}
                                            </GradientText>
                                          )}
                                        </h3>
                                        <div
                                          className={
                                            hasGrid
                                              ? "grid grid-cols-2 grid-flow-col gap-1"
                                              : "space-y-1"
                                          }
                                          style={
                                            hasGrid
                                              ? {
                                                  gridTemplateRows: `repeat(${rowCount}, auto)`,
                                                }
                                              : undefined
                                          }
                                        >
                                          {section.items.map((dropdownItem) => {
                                            const Icon = dropdownItem.icon;
                                            const isExternal =
                                              "isExternal" in dropdownItem &&
                                              dropdownItem.isExternal;
                                            const LinkComponent = isExternal
                                              ? "a"
                                              : Link;
                                            const linkProps = isExternal
                                              ? {
                                                  href: dropdownItem.href,
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                }
                                              : { href: dropdownItem.href };
                                            return (
                                              <LinkComponent
                                                key={dropdownItem.href}
                                                {...linkProps}
                                                className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors cursor-pointer group"
                                              >
                                                <div className="flex-shrink-0 p-1.5 rounded-md border border-border bg-muted/50 group-hover:border-transparent group-hover:bg-black dark:group-hover:bg-white transition-colors">
                                                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-white dark:group-hover:text-black transition-colors" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                  <div className="flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary whitespace-nowrap transition-colors">
                                                    {dropdownItem.label}
                                                    {(
                                                      dropdownItem as unknown as {
                                                        badge?: BadgeType;
                                                      }
                                                    ).badge && (
                                                      <MenuBadge
                                                        type={
                                                          (
                                                            dropdownItem as unknown as {
                                                              badge: BadgeType;
                                                            }
                                                          ).badge
                                                        }
                                                      />
                                                    )}
                                                  </div>
                                                  <div className="text-xs text-muted-foreground whitespace-nowrap">
                                                    {dropdownItem.description}
                                                  </div>
                                                </div>
                                              </LinkComponent>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            )}
                            {/* Right Column - 50% (Backend + IT Solutions + Our Brands) */}
                            <div className="flex-1 flex flex-col">
                              {/* Top Row: Backend & IT Solutions side by side */}
                              <div className="flex divide-x divide-border flex-1">
                                {item.dropdownColumns
                                  ?.slice(1)
                                  .map((column, colIndex) => (
                                    <div
                                      key={colIndex}
                                      className="flex-1 divide-y divide-border"
                                    >
                                      {column.sections.map((section) => (
                                        <div
                                          key={section.title}
                                          className="p-4"
                                        >
                                          <h3 className="mb-3 pl-2 pt-2 text-xs font-semibold uppercase tracking-wider">
                                            {"titleHref" in section &&
                                            section.titleHref ? (
                                              <Link
                                                href={section.titleHref}
                                                className="group inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                                              >
                                                <GradientText>
                                                  {section.title}
                                                </GradientText>
                                                <ArrowRight className="h-3 w-3 text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                              </Link>
                                            ) : (
                                              <GradientText>
                                                {section.title}
                                              </GradientText>
                                            )}
                                          </h3>
                                          <div className="space-y-1">
                                            {section.items.map(
                                              (dropdownItem) => {
                                                const Icon = dropdownItem.icon;
                                                const isExternal =
                                                  "isExternal" in
                                                    dropdownItem &&
                                                  dropdownItem.isExternal;
                                                const LinkComponent = isExternal
                                                  ? "a"
                                                  : Link;
                                                const linkProps = isExternal
                                                  ? {
                                                      href: dropdownItem.href,
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                    }
                                                  : { href: dropdownItem.href };
                                                return (
                                                  <LinkComponent
                                                    key={dropdownItem.href}
                                                    {...linkProps}
                                                    className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors cursor-pointer group"
                                                  >
                                                    <div className="flex-shrink-0 p-1.5 rounded-md border border-border bg-muted/50 group-hover:border-transparent group-hover:bg-black dark:group-hover:bg-white transition-colors">
                                                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-white dark:group-hover:text-black transition-colors" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                      <div className="flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary whitespace-nowrap transition-colors">
                                                        {dropdownItem.label}
                                                        {(
                                                          dropdownItem as unknown as {
                                                            badge?: BadgeType;
                                                          }
                                                        ).badge && (
                                                          <MenuBadge
                                                            type={
                                                              (
                                                                dropdownItem as unknown as {
                                                                  badge: BadgeType;
                                                                }
                                                              ).badge
                                                            }
                                                          />
                                                        )}
                                                      </div>
                                                      <div className="text-xs text-muted-foreground whitespace-nowrap">
                                                        {
                                                          dropdownItem.description
                                                        }
                                                      </div>
                                                    </div>
                                                  </LinkComponent>
                                                );
                                              }
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  ))}
                              </div>
                              {/* Bottom Row: Our Brands spanning full width of right half */}
                              {"dropdownBottomSection" in item &&
                                item.dropdownBottomSection && (
                                  <div className="p-4 border-t border-border">
                                    <h3 className="mb-3 pl-2 pt-2 text-xs font-semibold uppercase tracking-wider">
                                      <GradientText>
                                        {item.dropdownBottomSection.title}
                                      </GradientText>
                                    </h3>
                                    <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-1">
                                      {item.dropdownBottomSection.items.map(
                                        (brandItem) => {
                                          const isExternal =
                                            "isExternal" in brandItem &&
                                            brandItem.isExternal;
                                          const hasImage =
                                            "image" in brandItem &&
                                            brandItem.image;
                                          const Icon =
                                            "icon" in brandItem
                                              ? brandItem.icon
                                              : null;
                                          const LinkComponent = isExternal
                                            ? "a"
                                            : Link;
                                          const linkProps = isExternal
                                            ? {
                                                href: brandItem.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                              }
                                            : { href: brandItem.href };
                                          return (
                                            <LinkComponent
                                              key={brandItem.href}
                                              {...linkProps}
                                              className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors cursor-pointer group"
                                            >
                                              {hasImage ? (
                                                <div className="flex-shrink-0 w-8 h-8 rounded-md border border-border bg-muted/50 overflow-hidden group-hover:border-primary/50 transition-colors">
                                                  <Image
                                                    src={
                                                      brandItem.image as string
                                                    }
                                                    alt={brandItem.label}
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-cover"
                                                    unoptimized
                                                  />
                                                </div>
                                              ) : Icon ? (
                                                <div className="flex-shrink-0 p-1.5 rounded-md border border-border bg-muted/50 group-hover:border-transparent group-hover:bg-black dark:group-hover:bg-white transition-colors">
                                                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-white dark:group-hover:text-black transition-colors" />
                                                </div>
                                              ) : null}
                                              <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium text-foreground group-hover:text-primary whitespace-nowrap transition-colors flex items-center gap-1">
                                                  {brandItem.label}
                                                  {isExternal && (
                                                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                                                  )}
                                                  {(
                                                    brandItem as unknown as {
                                                      badge?: BadgeType;
                                                    }
                                                  ).badge && (
                                                    <MenuBadge
                                                      type={
                                                        (
                                                          brandItem as unknown as {
                                                            badge: BadgeType;
                                                          }
                                                        ).badge
                                                      }
                                                    />
                                                  )}
                                                </div>
                                                <div className="text-xs text-muted-foreground whitespace-nowrap">
                                                  {brandItem.description}
                                                </div>
                                              </div>
                                            </LinkComponent>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                              {/* Products / Tools Row */}
                              {"dropdownSocialContributionSection" in item &&
                                item.dropdownSocialContributionSection && (
                                  <div className="p-4 border-t border-border">
                                    <h3 className="mb-3 pl-2 pt-2 text-xs font-semibold uppercase tracking-wider">
                                      <GradientText>
                                        {
                                          item.dropdownSocialContributionSection
                                            .title
                                        }
                                      </GradientText>
                                    </h3>
                                    <div className="grid grid-cols-2 gap-1">
                                      {item.dropdownSocialContributionSection.items.map(
                                        (productItem) => {
                                          const isExternal =
                                            "isExternal" in productItem &&
                                            productItem.isExternal;
                                          const hasImage =
                                            "image" in productItem &&
                                            productItem.image;
                                          const Icon =
                                            "icon" in productItem
                                              ? productItem.icon
                                              : null;
                                          const LinkComponent = isExternal
                                            ? "a"
                                            : Link;
                                          const linkProps = isExternal
                                            ? {
                                                href: productItem.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                              }
                                            : { href: productItem.href };
                                          return (
                                            <LinkComponent
                                              key={productItem.href}
                                              {...linkProps}
                                              className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors cursor-pointer group"
                                            >
                                              {hasImage ? (
                                                <div className="flex-shrink-0 w-8 h-8 rounded-md border border-border bg-muted/50 overflow-hidden group-hover:border-primary/50 transition-colors">
                                                  <Image
                                                    src={
                                                      productItem.image as string
                                                    }
                                                    alt={productItem.label}
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-cover"
                                                    unoptimized
                                                  />
                                                </div>
                                              ) : Icon ? (
                                                <div className="flex-shrink-0 p-1.5 rounded-md border border-border bg-muted/50 group-hover:border-transparent group-hover:bg-black dark:group-hover:bg-white transition-colors">
                                                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-white dark:group-hover:text-black transition-colors" />
                                                </div>
                                              ) : null}
                                              <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium text-foreground group-hover:text-primary whitespace-nowrap transition-colors flex items-center gap-1">
                                                  {productItem.label}
                                                  {isExternal && (
                                                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                                                  )}
                                                  {(
                                                    productItem as unknown as {
                                                      badge?: BadgeType;
                                                    }
                                                  ).badge && (
                                                    <MenuBadge
                                                      type={
                                                        (
                                                          productItem as unknown as {
                                                            badge: BadgeType;
                                                          }
                                                        ).badge
                                                      }
                                                    />
                                                  )}
                                                </div>
                                                <div className="text-xs text-muted-foreground whitespace-nowrap">
                                                  {productItem.description}
                                                </div>
                                              </div>
                                            </LinkComponent>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                )}
                            </div>
                          </div>
                        ) : item.dropdownLayout === "rows" ? (
                          <div className="divide-y divide-border">
                            {item.dropdownSections?.map((section) => {
                              const rowCount = Math.ceil(
                                section.items.length / 2
                              );
                              return (
                                <div key={section.title} className="p-4">
                                  <h3 className="mb-3 pl-2 pt-2 text-xs font-semibold uppercase tracking-wider">
                                    {"titleHref" in section &&
                                    section.titleHref ? (
                                      <Link
                                        href={section.titleHref}
                                        className="group inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                                      >
                                        <GradientText>
                                          {section.title}
                                        </GradientText>
                                        <ArrowRight className="h-3 w-3 text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                      </Link>
                                    ) : (
                                      <GradientText>
                                        {section.title}
                                      </GradientText>
                                    )}
                                  </h3>
                                  <div
                                    className="grid grid-cols-2 grid-flow-col gap-1"
                                    style={{
                                      gridTemplateRows: `repeat(${rowCount}, auto)`,
                                    }}
                                  >
                                    {section.items.map((dropdownItem) => {
                                      const Icon = dropdownItem.icon;
                                      const isExternal =
                                        "isExternal" in dropdownItem &&
                                        dropdownItem.isExternal;
                                      const LinkComponent = isExternal
                                        ? "a"
                                        : Link;
                                      const linkProps = isExternal
                                        ? {
                                            href: dropdownItem.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          }
                                        : { href: dropdownItem.href };
                                      return (
                                        <LinkComponent
                                          key={dropdownItem.href}
                                          {...linkProps}
                                          className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors cursor-pointer group"
                                        >
                                          <div className="flex-shrink-0 p-1.5 rounded-md border border-border bg-muted/50 group-hover:border-transparent group-hover:bg-black dark:group-hover:bg-white transition-colors">
                                            <Icon className="h-4 w-4 text-muted-foreground group-hover:text-white dark:group-hover:text-black transition-colors" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary whitespace-nowrap transition-colors">
                                              {dropdownItem.label}
                                              {(
                                                dropdownItem as unknown as {
                                                  badge?: BadgeType;
                                                }
                                              ).badge && (
                                                <MenuBadge
                                                  type={
                                                    (
                                                      dropdownItem as unknown as {
                                                        badge: BadgeType;
                                                      }
                                                    ).badge
                                                  }
                                                />
                                              )}
                                            </div>
                                            <div className="text-xs text-muted-foreground whitespace-nowrap">
                                              {dropdownItem.description}
                                            </div>
                                          </div>
                                        </LinkComponent>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="flex divide-x divide-border">
                            {item.dropdownSections?.map((section) => (
                              <div
                                key={section.title}
                                className="flex-1 p-4 min-w-0"
                              >
                                <h3 className="mb-3 pl-2 pt-2 text-xs font-semibold uppercase tracking-wider">
                                  <GradientText>{section.title}</GradientText>
                                </h3>
                                <div className="space-y-1">
                                  {section.items.map((dropdownItem) => {
                                    const Icon = dropdownItem.icon;
                                    const isExternal =
                                      "isExternal" in dropdownItem &&
                                      dropdownItem.isExternal;
                                    const LinkComponent = isExternal
                                      ? "a"
                                      : Link;
                                    const linkProps = isExternal
                                      ? {
                                          href: dropdownItem.href,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                        }
                                      : { href: dropdownItem.href };
                                    return (
                                      <LinkComponent
                                        key={dropdownItem.href}
                                        {...linkProps}
                                        className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors cursor-pointer group"
                                      >
                                        <div className="flex-shrink-0 p-1.5 rounded-md border border-border bg-muted/50 group-hover:border-transparent group-hover:bg-black dark:group-hover:bg-white transition-colors">
                                          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-white dark:group-hover:text-black transition-colors" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-foreground group-hover:text-primary whitespace-nowrap transition-colors">
                                            {dropdownItem.label}
                                          </div>
                                          <div className="text-xs text-muted-foreground whitespace-nowrap">
                                            {dropdownItem.description}
                                          </div>
                                        </div>
                                      </LinkComponent>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Dropdown Footer */}
                        {"dropdownFooter" in item && item.dropdownFooter && (
                          <div className="flex items-center justify-between gap-12 border-t border-border px-6 py-4 bg-muted/30 rounded-b-xl">
                            <span className="text-sm text-muted-foreground">
                              {item.dropdownFooter.text}
                            </span>
                            {item.dropdownFooter.buttonExternal ? (
                              <a
                                href={item.dropdownFooter.buttonHref}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <TailwindConnectButton
                                  shape="pill"
                                  size="md"
                                  className="text-sm whitespace-nowrap"
                                >
                                  {item.dropdownFooter.buttonIcon &&
                                    item.dropdownFooter.buttonIconPosition ===
                                      "before" && (
                                      <item.dropdownFooter.buttonIcon className="h-4 w-4 mr-2 -ml-2" />
                                    )}
                                  {item.dropdownFooter.buttonLabel}
                                  {item.dropdownFooter.buttonIcon &&
                                    item.dropdownFooter.buttonIconPosition ===
                                      "after" && (
                                      <item.dropdownFooter.buttonIcon className="h-4 w-4 ml-2 -mr-2" />
                                    )}
                                </TailwindConnectButton>
                              </a>
                            ) : (
                              <Link href={item.dropdownFooter.buttonHref}>
                                <TailwindConnectButton
                                  shape="pill"
                                  size="md"
                                  className="text-sm whitespace-nowrap"
                                >
                                  {item.dropdownFooter.buttonIcon &&
                                    item.dropdownFooter.buttonIconPosition ===
                                      "before" && (
                                      <item.dropdownFooter.buttonIcon className="h-4 w-4 mr-2 -ml-2" />
                                    )}
                                  {item.dropdownFooter.buttonLabel}
                                  {item.dropdownFooter.buttonIcon &&
                                    item.dropdownFooter.buttonIconPosition ===
                                      "after" && (
                                      <item.dropdownFooter.buttonIcon className="h-4 w-4 ml-2 -mr-2" />
                                    )}
                                </TailwindConnectButton>
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>,
            document.body
          )}
      </nav>
    </>
  );
}
