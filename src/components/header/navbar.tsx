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
  Palette,
  Code,
  Settings,
  TrendingUp,
  Building2,
  Mail,
  BookOpen,
  // Domains & Hosting
  Cloud,
  HardDrive,
  LayoutDashboard,
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
  PenSquare,
  MonitorSmartphone,
  Smartphone,
  Apple,
  Layers,
  Zap,
  ShoppingCart,
  ShoppingBag,
  Store,
  Database,
  GitBranch,
  Boxes,
  CloudCog,
  // IT Solutions
  Lightbulb,
  Lock,
  Headphones,
  Cpu,
  Workflow,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeSwitch } from "@/components/theme-switch";
import { HoverBorderGradientButton } from "@/components/ui/buttons";
import GradientText from "@/components/ui/gradient-text";

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
  const [moreServicesOpen, setMoreServicesOpen] = useState(true);

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
      href: "/domains",
      hasDropdown: true,
      dropdownWidth: 600,
      dropdownLayout: "rows",
      dropdownSections: [
        {
          title: "Domains & Hosting Services",
          items: [
            {
              label: "Domains",
              href: "/domains",
              description: "Register & Manage Domain Names",
              icon: Globe,
            },
            {
              label: "Cloud/VPS Hosting",
              href: "/cloud-hosting",
              description: "Scalable Cloud Infrastructure",
              icon: Cloud,
            },
            {
              label: "High-Performance Hosting",
              href: "/web-hosting",
              description: "Fast & Reliable Web Hosting",
              icon: Server,
            },
            {
              label: "Dedicated Servers",
              href: "/dedicated-servers",
              description: "Full Server Control & Power",
              icon: HardDrive,
            },
          ],
        },
        {
          title: "Tools",
          items: [
            {
              label: "Go To Dashboard",
              href: "https://hub.multilat.xyz",
              description: "Manage Your Services",
              icon: LayoutDashboard,
              isExternal: true,
            },
            {
              label: "WHOIS Lookup",
              href: "/tools/whois",
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
              href: "/tools/http-headers",
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
              href: "/tools/ping",
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
          items: [
            {
              label: "360° Digital Marketing",
              href: "/marketing/digital",
              description: "Complete Marketing Solutions",
              icon: Target,
            },
            {
              label: "Search Engine Optimization",
              href: "/marketing/seo",
              description: "Rank Higher On Search",
              icon: TrendingUp,
            },
            {
              label: "Social Media Marketing",
              href: "/marketing/social-media",
              description: "Engage Your Audience",
              icon: Share2,
            },
            {
              label: "Content Marketing",
              href: "/marketing/content",
              description: "Compelling Content Strategy",
              icon: PenTool,
            },
            {
              label: "Reputation Management",
              href: "/marketing/reputation",
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
              href: "/marketing/email",
              description: "Targeted Email Campaigns",
              icon: MailOpen,
            },
            {
              label: "AI Content Creation",
              href: "/marketing/ai-content",
              description: "AI-Powered Content",
              icon: Bot,
            },
            {
              label: "AI Marketing Automation",
              href: "/marketing/ai-automation",
              description: "Automate With AI",
              icon: Sparkles,
            },
            {
              label: "Influencer Marketing",
              href: "/marketing/influencer",
              description: "Partner With Influencers",
              icon: UserCheck,
            },
          ],
        },
        {
          title: "Paid Advertising",
          items: [
            {
              label: "Google Ads",
              href: "/marketing/google-ads",
              description: "Search, Display & YouTube",
              icon: CircleDollarSign,
            },
            {
              label: "Social Media Ads",
              href: "/marketing/social-ads",
              description: "Meta, Instagram, LinkedIn",
              icon: Megaphone,
            },
            {
              label: "PPC Campaign Management",
              href: "/marketing/ppc",
              description: "Pay-Per-Click Campaigns",
              icon: MousePointerClick,
            },
            {
              label: "Retargeting & Remarketing",
              href: "/marketing/retargeting",
              description: "Re-engage Your Visitors",
              icon: RefreshCcw,
            },
            {
              label: "Campaign Optimization",
              href: "/marketing/optimization",
              description: "Maximize Your ROI",
              icon: BarChart3,
            },
          ],
        },
      ],
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
              title: "Core Solutions",
              gridCols: 2,
              items: [
                {
                  label: "Landing Page Design",
                  href: "/solutions/landing-pages",
                  description: "High-Converting Pages",
                  icon: Layout,
                },
                {
                  label: "Custom UI/UX Design",
                  href: "/solutions/ui-ux",
                  description: "User-Centered Design",
                  icon: PenSquare,
                },
                {
                  label: "Website Development",
                  href: "/web-design-and-development",
                  description: "Custom Web Solutions",
                  icon: MonitorSmartphone,
                },
                {
                  label: "WordPress Development",
                  href: "/solutions/wordpress",
                  description: "WordPress Expertise",
                  icon: Code,
                },
              ],
            },
            {
              title: "E-commerce",
              gridCols: 2,
              items: [
                {
                  label: "Shopify Development",
                  href: "/solutions/shopify",
                  description: "Shopify Store Setup",
                  icon: ShoppingBag,
                },
                {
                  label: "WooCommerce Development",
                  href: "/solutions/woocommerce",
                  description: "WordPress E-commerce",
                  icon: ShoppingCart,
                },
                {
                  label: "BigCommerce Development",
                  href: "/solutions/bigcommerce",
                  description: "Enterprise E-commerce",
                  icon: Store,
                },
                {
                  label: "Custom E-commerce",
                  href: "/solutions/custom-ecommerce",
                  description: "Tailored Online Stores",
                  icon: Boxes,
                },
              ],
            },
            {
              title: "Mobile Apps",
              gridCols: 2,
              items: [
                {
                  label: "iOS App Development",
                  href: "/mobile-app-development/ios",
                  description: "Native iOS Apps",
                  icon: Apple,
                },
                {
                  label: "Android App Development",
                  href: "/mobile-app-development/android",
                  description: "Native Android Apps",
                  icon: Smartphone,
                },
                {
                  label: "Flutter Development",
                  href: "/mobile-app-development/flutter",
                  description: "Cross-Platform Apps",
                  icon: Layers,
                },
                {
                  label: "React Native Development",
                  href: "/mobile-app-development/react-native",
                  description: "Hybrid Mobile Apps",
                  icon: Zap,
                },
              ],
            },
            {
              title: "Frontend",
              gridCols: 2,
              items: [
                {
                  label: "React Development",
                  href: "/solutions/react",
                  description: "React.js Applications",
                  icon: Code,
                },
                {
                  label: "Next.js Development",
                  href: "/solutions/nextjs",
                  description: "Full-Stack React",
                  icon: Zap,
                },
                {
                  label: "Vue.js Development",
                  href: "/solutions/vuejs",
                  description: "Vue.js Applications",
                  icon: Layers,
                },
                {
                  label: "Tailwind CSS",
                  href: "/solutions/tailwind",
                  description: "Modern CSS Framework",
                  icon: Palette,
                },
              ],
            },
          ],
        },
        {
          // Second column: Backend
          sections: [
            {
              title: "Backend",
              items: [
                {
                  label: "PHP/Laravel Development",
                  href: "/solutions/laravel",
                  description: "PHP Framework",
                  icon: Code,
                },
                {
                  label: "Python/Django Development",
                  href: "/solutions/django",
                  description: "Python Framework",
                  icon: Database,
                },
                {
                  label: "Node.js Development",
                  href: "/solutions/nodejs",
                  description: "JavaScript Backend",
                  icon: Server,
                },
                {
                  label: "RESTful APIs",
                  href: "/solutions/rest-api",
                  description: "API Development",
                  icon: GitBranch,
                },
                {
                  label: "GraphQL Development",
                  href: "/solutions/graphql",
                  description: "GraphQL APIs",
                  icon: Network,
                },
                {
                  label: "Microservices",
                  href: "/solutions/microservices",
                  description: "Scalable Architecture",
                  icon: Boxes,
                },
                {
                  label: "Cloud & DevOps",
                  href: "/solutions/cloud-devops",
                  description: "AWS Infrastructure",
                  icon: CloudCog,
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
              items: [
                {
                  label: "IT Consulting",
                  href: "/it-and-custom-solutions/consulting",
                  description: "Strategic IT Guidance",
                  icon: Lightbulb,
                },
                {
                  label: "Cloud & Infrastructure",
                  href: "/it-and-custom-solutions/cloud",
                  description: "Cloud Architecture",
                  icon: Cloud,
                },
                {
                  label: "Security & Compliance",
                  href: "/it-and-custom-solutions/security",
                  description: "Protect Your Business",
                  icon: Lock,
                },
                {
                  label: "Managed IT Services",
                  href: "/it-and-custom-solutions/managed",
                  description: "24/7 IT Support",
                  icon: Headphones,
                },
                {
                  label: "Custom Software",
                  href: "/it-and-custom-solutions/software",
                  description: "Bespoke Applications",
                  icon: Cpu,
                },
                {
                  label: "Digital Transformation",
                  href: "/it-and-custom-solutions/digital",
                  description: "Modernize Your Business",
                  icon: Workflow,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "About Us",
      href: "/about",
      hasDropdown: false,
    },
  ];

  // Mobile menu items
  const mobileMenuItems = [
    { label: "Home", ariaLabel: "Go To Home Page", link: "/", icon: Home },
    {
      label: "Domains",
      ariaLabel: "Domain Registration",
      link: "/domains",
      icon: Globe,
    },
    {
      label: "Web Hosting",
      ariaLabel: "Web Hosting Plans",
      link: "/web-hosting",
      icon: Server,
    },
  ];

  const moreServicesItems = [
    {
      label: "Web Design & Dev.",
      ariaLabel: "Web Design And Development Services",
      link: "/web-design-and-development",
      icon: Palette,
    },
    {
      label: "Mobile App Development",
      ariaLabel: "Mobile App Development",
      link: "/mobile-app-development",
      icon: Code,
    },
    {
      label: "IT & Custom Solutions",
      ariaLabel: "IT And Custom Solutions",
      link: "/it-and-custom-solutions",
      icon: Settings,
    },
    {
      label: "SEO & Marketing",
      ariaLabel: "SEO And Marketing",
      link: "/seo-and-marketing",
      icon: TrendingUp,
    },
  ];

  const bottomMenuItems = [
    {
      label: "Guides",
      ariaLabel: "Guides And Tutorials",
      link: "https://guides.multilat.xyz",
      icon: BookOpen,
      isExternal: true,
    },
    {
      label: "About Us",
      ariaLabel: "About Multilat",
      link: "/about",
      icon: Building2,
    },
    {
      label: "Contact Us",
      ariaLabel: "Contact Us",
      link: "/contact",
      icon: Mail,
    },
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
                    {/* Main Menu Items */}
                    {mobileMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.link}>
                          <Link
                            href={item.link}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                              pathname === item.link
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

                    {/* More Services Expandable */}
                    <li>
                      <button
                        onClick={() => setMoreServicesOpen(!moreServicesOpen)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        <ChevronDown
                          className={`h-4 w-4 flex-shrink-0 transition-transform ${
                            moreServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span className="flex-1 text-left">More Services</span>
                      </button>
                      <AnimatePresence>
                        {moreServicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 space-y-2 overflow-hidden border-l-2 border-border ml-[19px]"
                          >
                            {moreServicesItems.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.link}>
                                  <Link
                                    href={item.link}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 pl-4 pr-3 py-2 text-sm font-medium transition-colors ${
                                      pathname === item.link
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                                  >
                                    <Icon className="h-4 w-4 flex-shrink-0" />
                                    <span>{item.label}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>

                    {/* Bottom Menu Items */}
                    {bottomMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.link}>
                          {item.isExternal ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              <Icon className="h-4 w-4 flex-shrink-0" />
                              <span>{item.label}</span>
                            </a>
                          ) : (
                            <Link
                              href={item.link}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                                pathname === item.link
                                  ? "bg-muted text-foreground"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                              }`}
                            >
                              <Icon className="h-4 w-4 flex-shrink-0" />
                              <span>{item.label}</span>
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-border space-y-3">
                  <a
                    href="https://hub.multilat.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
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
                            {item.dropdownColumns?.map((column, colIndex) => (
                              <div
                                key={colIndex}
                                className="divide-y divide-border"
                                style={
                                  column.width
                                    ? { width: column.width, flexShrink: 0 }
                                    : { flex: 1 }
                                }
                              >
                                {column.sections.map((section) => (
                                  <div key={section.title} className="p-4">
                                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">
                                      <GradientText>
                                        {section.title}
                                      </GradientText>
                                    </h3>
                                    <div
                                      className={
                                        "gridCols" in section &&
                                        section.gridCols === 2
                                          ? "grid grid-cols-2 gap-1"
                                          : "space-y-1"
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
                                            className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-muted cursor-pointer group"
                                          >
                                            <div className="flex-shrink-0 p-1.5 rounded-md border border-border bg-muted/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                                              <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <div className="text-sm font-medium text-foreground whitespace-nowrap">
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
                            ))}
                          </div>
                        ) : item.dropdownLayout === "rows" ? (
                          <div className="divide-y divide-border">
                            {item.dropdownSections?.map((section) => (
                              <div key={section.title} className="p-4">
                                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">
                                  <GradientText>{section.title}</GradientText>
                                </h3>
                                <div className="grid grid-cols-2 gap-1">
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
                                        className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-muted cursor-pointer group"
                                      >
                                        <div className="flex-shrink-0 p-1.5 rounded-md border border-border bg-muted/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                                          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-foreground whitespace-nowrap">
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
                        ) : (
                          <div className="flex divide-x divide-border">
                            {item.dropdownSections?.map((section) => (
                              <div
                                key={section.title}
                                className="flex-1 p-4 min-w-0"
                              >
                                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">
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
                                        className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-muted cursor-pointer group"
                                      >
                                        <div className="flex-shrink-0 p-1.5 rounded-md border border-border bg-muted/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                                          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-foreground whitespace-nowrap">
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
