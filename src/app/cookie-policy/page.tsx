"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { Cookie } from "lucide-react";

const tocItems = [
  { id: "what-are-cookies", title: "What Are Cookies?" },
  { id: "how-we-use-cookies", title: "How We Use Cookies" },
  { id: "types-of-cookies", title: "Types Of Cookies We Use" },
  { id: "third-party-cookies", title: "Third-Party Cookies" },
  { id: "managing-cookies", title: "Managing Your Cookie Preferences" },
  { id: "browser-instructions", title: "Browser-Specific Instructions" },
  { id: "do-not-track", title: "Do Not Track Signals" },
  { id: "changes", title: "Changes To This Cookie Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function CookiePolicyPage() {
  return (
    <>
      {/* Two Column Layout - Full Height */}
      <div className="relative w-full bg-background min-h-screen">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="flex border-l border-r border-t border-border">
            {/* Table Of Contents - Left Sidebar (Sticky) */}
            <div className="hidden xl:block xl:w-1/4 border-r border-dashed border-border bg-background bg-[linear-gradient(45deg,transparent_30%,rgba(0,0,0,.05)_30%,rgba(0,0,0,.05)_50%,transparent_50%,transparent_80%,rgba(0,0,0,.05)_80%,rgba(0,0,0,.05)_100%)] dark:bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,.05)_30%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_80%,rgba(255,255,255,.05)_80%,rgba(255,255,255,.05)_100%)] bg-[length:12px_12px] transition-all">
              <div className="sticky top-16 pt-20 pb-8 px-6 max-h-screen overflow-y-auto">
                <TableOfContents items={tocItems} />
              </div>
            </div>

            {/* Main Content - Right Side (Scrollable) */}
            <div className="flex-1 xl:w-3/4 relative">
              <div className="relative z-10 pt-20 pb-24 px-6 sm:px-8 md:px-12 lg:px-16">
                {/* Hero Content */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                      <Cookie
                        className="w-8 h-8 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
                    <GradientText>Cookie Policy</GradientText>
                  </h1>
                  <p className="mb-6 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                    Learn How We Use Cookies And Similar Technologies To Improve
                    Your Experience On Our Website.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Last Updated: November 23, 2025
                  </p>
                </motion.div>

                {/* Sparkles Separator */}
                <div className="relative w-full">
                  <div className="w-full h-20 relative overflow-hidden">
                    {/* Gradients */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-8 max-w-4xl mx-auto">
                  {/* What Are Cookies */}
                  <section id="what-are-cookies">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      What Are Cookies?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Cookies Are Small Text Files That Are Placed On Your
                      Device When You Visit A Website. They Are Widely Used To
                      Make Websites Work More Efficiently And Provide
                      Information To The Website Owners.
                    </p>
                  </section>

                  {/* How We Use Cookies */}
                  <section id="how-we-use-cookies">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      How We Use Cookies
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      Multilat Uses Cookies To:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>Remember Your Preferences And Settings</li>
                      <li>Keep You Signed In To Your Account</li>
                      <li>Understand How You Use Our Website</li>
                      <li>Improve Website Performance And User Experience</li>
                      <li>Provide Personalized Content And Recommendations</li>
                      <li>Analyze Website Traffic And Usage Patterns</li>
                    </ul>
                  </section>

                  {/* Types Of Cookies We Use */}
                  <section id="types-of-cookies">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Types Of Cookies We Use
                    </h2>

                    {/* Essential Cookies */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        1. Essential Cookies
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-justify mb-2">
                        These Cookies Are Necessary For The Website To Function
                        Properly. They Enable Core Functionality Such As
                        Security, Network Management, And Accessibility.
                      </p>
                      <div className="p-4 rounded-lg bg-muted/50 border border-border mt-3">
                        <p className="text-sm text-foreground">
                          <strong>Examples:</strong> Session Cookies,
                          Authentication Cookies, Load Balancing Cookies
                        </p>
                        <p className="text-sm text-foreground mt-2">
                          <strong>Duration:</strong> Session Or Up To 1 Year
                        </p>
                        <p className="text-sm text-foreground mt-2">
                          <strong>Can Be Disabled:</strong> No - Required For
                          Basic Functionality
                        </p>
                      </div>
                    </div>

                    {/* Performance Cookies */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        2. Performance Cookies
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-justify mb-2">
                        These Cookies Help Us Understand How Visitors Interact
                        With Our Website By Collecting And Reporting Information
                        Anonymously.
                      </p>
                      <div className="p-4 rounded-lg bg-muted/50 border border-border mt-3">
                        <p className="text-sm text-foreground">
                          <strong>Examples:</strong> Google Analytics, Page Load
                          Time Tracking
                        </p>
                        <p className="text-sm text-foreground mt-2">
                          <strong>Duration:</strong> Up To 2 Years
                        </p>
                        <p className="text-sm text-foreground mt-2">
                          <strong>Can Be Disabled:</strong> Yes - Via Browser
                          Settings
                        </p>
                      </div>
                    </div>

                    {/* Functionality Cookies */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        3. Functionality Cookies
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-justify mb-2">
                        These Cookies Allow The Website To Remember Choices You
                        Make And Provide Enhanced, More Personal Features.
                      </p>
                      <div className="p-4 rounded-lg bg-muted/50 border border-border mt-3">
                        <p className="text-sm text-foreground">
                          <strong>Examples:</strong> Language Preference, Theme
                          Selection, Region Settings
                        </p>
                        <p className="text-sm text-foreground mt-2">
                          <strong>Duration:</strong> Up To 1 Year
                        </p>
                        <p className="text-sm text-foreground mt-2">
                          <strong>Can Be Disabled:</strong> Yes - May Affect
                          User Experience
                        </p>
                      </div>
                    </div>

                    {/* Targeting/Advertising Cookies */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        4. Targeting/Advertising Cookies
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-justify mb-2">
                        These Cookies Are Used To Deliver Advertisements More
                        Relevant To You And Your Interests.
                      </p>
                      <div className="p-4 rounded-lg bg-muted/50 border border-border mt-3">
                        <p className="text-sm text-foreground">
                          <strong>Examples:</strong> Retargeting Pixels, Ad
                          Network Cookies
                        </p>
                        <p className="text-sm text-foreground mt-2">
                          <strong>Duration:</strong> Up To 2 Years
                        </p>
                        <p className="text-sm text-foreground mt-2">
                          <strong>Can Be Disabled:</strong> Yes - Via Browser
                          Settings Or Opt-Out Tools
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Third-Party Cookies */}
                  <section id="third-party-cookies">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Third-Party Cookies
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      We May Use Third-Party Services That Also Use Cookies.
                      These Include:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>
                        <strong className="text-foreground">
                          Google Analytics:
                        </strong>{" "}
                        For Website Analytics And Performance Monitoring
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Social Media Platforms:
                        </strong>{" "}
                        For Social Sharing And Integration
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Payment Processors:
                        </strong>{" "}
                        For Secure Payment Processing
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Customer Support Tools:
                        </strong>{" "}
                        For Live Chat And Support Services
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed text-justify mt-4">
                      These Third Parties Have Their Own Privacy Policies And
                      Cookie Policies. We Recommend Reviewing Their Policies For
                      More Information.
                    </p>
                  </section>

                  {/* Managing Your Cookie Preferences */}
                  <section id="managing-cookies">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Managing Your Cookie Preferences
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      You Have Several Options For Managing Cookies:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>
                        <strong className="text-foreground">
                          Browser Settings:
                        </strong>{" "}
                        Most Browsers Allow You To Refuse Or Accept Cookies
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Delete Cookies:
                        </strong>{" "}
                        You Can Delete Existing Cookies From Your Browser
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Private Browsing:
                        </strong>{" "}
                        Use Incognito Or Private Mode To Browse Without Cookies
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Opt-Out Tools:
                        </strong>{" "}
                        Use Industry Opt-Out Tools For Advertising Cookies
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed text-justify mt-4">
                      <strong className="text-foreground">Please Note:</strong>{" "}
                      Blocking Or Deleting Cookies May Impact Your User
                      Experience And Some Features May Not Function Properly.
                    </p>
                  </section>

                  {/* Browser-Specific Instructions */}
                  <section id="browser-instructions">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Browser-Specific Instructions
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      For Detailed Instructions On Managing Cookies, Please
                      Visit:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>
                        Google Chrome: Settings {">"} Privacy And Security {">"}{" "}
                        Cookies
                      </li>
                      <li>
                        Mozilla Firefox: Settings {">"} Privacy & Security
                      </li>
                      <li>Safari: Preferences {">"} Privacy</li>
                      <li>
                        Microsoft Edge: Settings {">"} Cookies And Site
                        Permissions
                      </li>
                      <li>Opera: Settings {">"} Privacy & Security</li>
                    </ul>
                  </section>

                  {/* Do Not Track Signals */}
                  <section id="do-not-track">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Do Not Track Signals
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Some Browsers Include A &quot;Do Not Track&quot; (DNT)
                      Feature That Signals To Websites That You Do Not Want Your
                      Online Activity Tracked. Currently, There Is No Industry
                      Standard For Responding To DNT Signals. We Do Not
                      Currently Respond To DNT Signals.
                    </p>
                  </section>

                  {/* Changes To This Cookie Policy */}
                  <section id="changes">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Changes To This Cookie Policy
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      We May Update This Cookie Policy From Time To Time To
                      Reflect Changes In Technology, Legislation, Or Our
                      Business Operations. Any Changes Will Be Posted On This
                      Page With An Updated &quot;Last Updated&quot; Date.
                    </p>
                  </section>

                  {/* Contact Us */}
                  <section id="contact">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Contact Us
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      If You Have Any Questions About Our Cookie Policy, Please
                      Contact Us At:
                    </p>
                    <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
                      <p className="text-foreground">
                        <strong>Email:</strong> privacy@bst.com.bd
                      </p>
                      <p className="text-foreground mt-2">
                        <strong>Address:</strong> Dhaka, Bangladesh
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
