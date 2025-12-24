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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassContainer } from "@/components/ui/glass-container";
import { ThemeSwitch } from "@/components/theme-switch";
import { HoverBorderGradientButton } from "@/components/ui/buttons";

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
    if (element) {
      const rect = element.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom - 1,
        left: rect.left,
        width: 550,
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
      label: "Domains",
      href: "/domains",
      hasDropdown: false,
    },
    {
      label: "Web Hosting",
      href: "/web-hosting",
      hasDropdown: false,
    },
    {
      label: "More Services",
      href: "/services",
      hasDropdown: true,
      dropdownSections: [
        {
          title: "Additional Services",
          items: [
            {
              label: "Web Design & Development",
              href: "/web-design-and-development",
              description:
                "Modern, Responsive Websites That Captivate Your Audience",
            },
            {
              label: "Mobile App Development",
              href: "/mobile-app-development",
              description:
                "Custom Mobile Applications From Concept To Deployment",
            },
            {
              label: "IT & Custom Solutions",
              href: "/it-and-custom-solutions",
              description:
                "Tailored IT Infrastructure And Technology Solutions",
            },
            {
              label: "SEO & Marketing",
              href: "/seo-and-marketing",
              description: "Boost Your Online Presence With Strategic SEO",
            },
          ],
        },
      ],
      dropdownFooter: {
        label: "Need A Different Solution? Contact Us",
        href: "/contact",
      },
    },
    {
      label: "Contact Us",
      href: "/contact",
      hasDropdown: false,
    },
    {
      label: "Guides",
      href: "https://guides.multilat.xyz",
      hasDropdown: false,
      isExternal: true,
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
          <div className="hidden items-center gap-1 lg:flex absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
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
                  <button
                    className={`flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-semibold transition-colors hover:text-foreground cursor-pointer ${
                      pathname?.startsWith(item.href)
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                ) : item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-sm bg-primary/5 px-3 py-1.5 ring-1 ring-primary/15 text-sm font-semibold transition-colors hover:bg-primary/10 hover:ring-primary/30 cursor-pointer text-primary ml-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`rounded-sm px-3 py-2 text-sm font-semibold transition-colors hover:text-foreground cursor-pointer ${
                      pathname === item.href
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 ml-auto lg:ml-0">
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
                      className="fixed z-50 pt-[15px]"
                      style={{
                        top: `${dropdownPosition.top}px`,
                        left: `${dropdownPosition.left}px`,
                        width: `${dropdownPosition.width}px`,
                      }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {/* Caret Arrow Pointing Up */}
                      <div className="absolute top-[8px] left-10 w-4 h-4 bg-background border-l border-t border-border rotate-45 transform"></div>
                      <GlassContainer>
                        <div className="pb-4">
                          {item.dropdownSections?.map((section) => (
                            <div key={section.title}>
                              <h3 className="mb-3 px-3 text-xs font-semibold text-muted-foreground">
                                {section.title}
                              </h3>
                              <div className="grid grid-cols-2 gap-2">
                                {section.items.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.href}
                                    href={dropdownItem.href}
                                    className="block rounded-md px-3 py-2 transition-colors hover:bg-muted cursor-pointer"
                                  >
                                    <div className="text-sm font-medium text-foreground">
                                      {dropdownItem.label}
                                    </div>
                                    <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                      {dropdownItem.description}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {item.dropdownFooter && (
                          <div className="border-t border-border bg-muted/30 px-2 py-3 -mx-4 -mb-4">
                            <Link
                              href={item.dropdownFooter.href}
                              className="flex items-center justify-between text-sm font-medium text-foreground transition-colors hover:text-primary px-2"
                            >
                              <span>{item.dropdownFooter.label}</span>
                              <ChevronDown className="h-4 w-4 -rotate-90" />
                            </Link>
                          </div>
                        )}
                      </GlassContainer>
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
