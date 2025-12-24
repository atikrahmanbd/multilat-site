"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { Shield } from "lucide-react";

const tocItems = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-information", title: "How We Use Your Information" },
  { id: "information-sharing", title: "Information Sharing And Disclosure" },
  { id: "data-security", title: "Data Security" },
  { id: "your-rights", title: "Your Rights" },
  { id: "cookies", title: "Cookies And Tracking Technologies" },
  { id: "children-privacy", title: "Children's Privacy" },
  { id: "changes", title: "Changes To This Privacy Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
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
                      <Shield
                        className="w-8 h-8 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
                    <GradientText>Privacy Policy</GradientText>
                  </h1>
                  <p className="mb-6 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                    Your Privacy Is Important To Us. Learn How We Collect, Use,
                    And Protect Your Personal Information.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Last Updated: November 23, 2025
                  </p>
                </motion.div>

                {/* Divider */}
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
                  {/* Introduction */}
                  <section id="introduction">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Introduction
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Multilat (&quot;We&quot;, &quot;Us&quot;, Or
                      &quot;Our&quot;) Is Committed To Protecting Your Privacy.
                      This Privacy Policy Explains How We Collect, Use,
                      Disclose, And Safeguard Your Information When You Visit
                      Our Website And Use Our Services.
                    </p>
                  </section>

                  {/* Information We Collect */}
                  <section id="information-we-collect">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Information We Collect
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      We May Collect Information About You In A Variety Of Ways.
                      The Information We May Collect Includes:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>
                        <strong className="text-foreground">
                          Personal Information:
                        </strong>{" "}
                        Name, Email Address, Phone Number, Billing Address, And
                        Payment Information
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Account Information:
                        </strong>{" "}
                        Username, Password, And Other Registration Details
                      </li>
                      <li>
                        <strong className="text-foreground">Usage Data:</strong>{" "}
                        Information About How You Use Our Services, Including IP
                        Address, Browser Type, And Operating System
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Cookies And Tracking:
                        </strong>{" "}
                        Data Collected Through Cookies And Similar Technologies
                      </li>
                    </ul>
                  </section>

                  {/* How We Use Your Information */}
                  <section id="how-we-use-information">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      How We Use Your Information
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      We Use The Information We Collect To:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>Provide, Operate, And Maintain Our Services</li>
                      <li>
                        Process Your Transactions And Send Related Information
                      </li>
                      <li>
                        Send You Technical Notices, Updates, And Support
                        Messages
                      </li>
                      <li>
                        Respond To Your Comments, Questions, And Customer
                        Service Requests
                      </li>
                      <li>
                        Monitor And Analyze Usage And Trends To Improve User
                        Experience
                      </li>
                      <li>
                        Detect, Prevent, And Address Technical Issues And
                        Security Threats
                      </li>
                      <li>
                        Send You Marketing And Promotional Communications (With
                        Your Consent)
                      </li>
                    </ul>
                  </section>

                  {/* Information Sharing */}
                  <section id="information-sharing">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Information Sharing And Disclosure
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      We May Share Your Information In The Following Situations:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>
                        <strong className="text-foreground">
                          Service Providers:
                        </strong>{" "}
                        With Third-Party Vendors Who Perform Services On Our
                        Behalf
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Business Transfers:
                        </strong>{" "}
                        In Connection With Any Merger, Sale, Or Acquisition
                      </li>
                      <li>
                        <strong className="text-foreground">
                          Legal Requirements:
                        </strong>{" "}
                        When Required By Law Or To Protect Our Rights
                      </li>
                      <li>
                        <strong className="text-foreground">
                          With Your Consent:
                        </strong>{" "}
                        When You Give Us Permission To Share Your Information
                      </li>
                    </ul>
                  </section>

                  {/* Data Security */}
                  <section id="data-security">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Data Security
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      We Implement Appropriate Technical And Organizational
                      Security Measures To Protect Your Personal Information.
                      However, No Method Of Transmission Over The Internet Or
                      Electronic Storage Is 100% Secure, And We Cannot Guarantee
                      Absolute Security.
                    </p>
                  </section>

                  {/* Your Rights */}
                  <section id="your-rights">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Your Rights
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      You Have The Following Rights Regarding Your Personal
                      Information:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>Access And Review Your Personal Information</li>
                      <li>Request Correction Of Inaccurate Information</li>
                      <li>Request Deletion Of Your Personal Information</li>
                      <li>Object To Processing Of Your Personal Information</li>
                      <li>Request Data Portability</li>
                      <li>Withdraw Consent At Any Time</li>
                    </ul>
                  </section>

                  {/* Cookies */}
                  <section id="cookies">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Cookies And Tracking Technologies
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      We Use Cookies And Similar Tracking Technologies To Track
                      Activity On Our Service And Store Certain Information. You
                      Can Instruct Your Browser To Refuse All Cookies Or To
                      Indicate When A Cookie Is Being Sent. For More
                      Information, Please See Our Cookie Policy.
                    </p>
                  </section>

                  {/* Children's Privacy */}
                  <section id="children-privacy">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Children&apos;s Privacy
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Our Services Are Not Intended For Children Under 18 Years
                      Of Age. We Do Not Knowingly Collect Personal Information
                      From Children Under 18. If You Are A Parent Or Guardian
                      And Believe Your Child Has Provided Us With Personal
                      Information, Please Contact Us.
                    </p>
                  </section>

                  {/* Changes */}
                  <section id="changes">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Changes To This Privacy Policy
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      We May Update Our Privacy Policy From Time To Time. We
                      Will Notify You Of Any Changes By Posting The New Privacy
                      Policy On This Page And Updating The &quot;Last
                      Updated&quot; Date. You Are Advised To Review This Privacy
                      Policy Periodically For Any Changes.
                    </p>
                  </section>

                  {/* Contact */}
                  <section id="contact">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Contact Us
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      If You Have Any Questions About This Privacy Policy,
                      Please Contact Us At:
                    </p>
                    <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
                      <p className="text-foreground">
                        <strong>Email:</strong> privacy@multilat.xyz
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
