"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { FileText } from "lucide-react";

const tocItems = [
  { id: "agreement", title: "Agreement To Terms" },
  { id: "services", title: "Our Services" },
  { id: "registration", title: "Account Registration" },
  { id: "acceptable-use", title: "Acceptable Use Policy" },
  { id: "payment", title: "Payment Terms" },
  { id: "sla", title: "Service Level Agreement" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "data-backup", title: "Data Backup And Loss" },
  { id: "termination", title: "Termination" },
  { id: "liability", title: "Limitation Of Liability" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes To Terms" },
  { id: "contact", title: "Contact Us" },
];

export default function TermsAndConditionsPage() {
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
                      <FileText
                        className="w-8 h-8 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
                    <GradientText>Terms & Conditions</GradientText>
                  </h1>
                  <p className="mb-6 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                    Please Read These Terms And Conditions Carefully Before
                    Using Our Services.
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
                  {/* Agreement To Terms */}
                  <section id="agreement">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Agreement To Terms
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      By Accessing Or Using Multilat&apos;s Services, You Agree
                      To Be Bound By These Terms And Conditions. If You Disagree
                      With Any Part Of These Terms, You May Not Access Our
                      Services.
                    </p>
                  </section>

                  {/* Our Services */}
                  <section id="services">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Our Services
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      Multilat Provides Web Hosting, Domain Registration, Cloud
                      VPS, Dedicated Servers, And Related Digital Services. We
                      Reserve The Right To:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>Modify Or Discontinue Services At Any Time</li>
                      <li>Refuse Service To Anyone For Any Reason</li>
                      <li>Update These Terms Without Prior Notice</li>
                      <li>Change Pricing With 30 Days Notice</li>
                    </ul>
                  </section>

                  {/* Account Registration */}
                  <section id="registration">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Account Registration
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      To Use Our Services, You Must:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>Be At Least 18 Years Of Age</li>
                      <li>Provide Accurate And Complete Information</li>
                      <li>Maintain The Security Of Your Account Credentials</li>
                      <li>
                        Accept Responsibility For All Activities Under Your
                        Account
                      </li>
                      <li>
                        Notify Us Immediately Of Any Unauthorized Use Of Your
                        Account
                      </li>
                    </ul>
                  </section>

                  {/* Acceptable Use Policy */}
                  <section id="acceptable-use">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Acceptable Use Policy
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      You Agree Not To Use Our Services To:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>
                        Violate Any Laws Or Regulations, Local Or International
                      </li>
                      <li>
                        Transmit Spam, Malware, Or Any Harmful Computer Code
                      </li>
                      <li>
                        Infringe Upon Intellectual Property Rights Of Others
                      </li>
                      <li>
                        Engage In Any Form Of Harassment, Abuse, Or Hate Speech
                      </li>
                      <li>
                        Host Adult Content, Gambling, Or Illegal Materials
                      </li>
                      <li>
                        Conduct Cryptocurrency Mining Without Prior
                        Authorization
                      </li>
                      <li>
                        Attempt Unauthorized Access To Our Systems Or Other
                        Users&apos; Accounts
                      </li>
                      <li>Resell Our Services Without Written Permission</li>
                    </ul>
                  </section>

                  {/* Payment Terms */}
                  <section id="payment">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Payment Terms
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      Payment Terms Include:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>
                        All Fees Are Due In Advance Unless Otherwise Agreed
                      </li>
                      <li>
                        Payments Are Non-Refundable Unless Stated Otherwise
                      </li>
                      <li>
                        Late Payments May Result In Service Suspension Or
                        Termination
                      </li>
                      <li>
                        You Are Responsible For All Taxes And Transaction Fees
                      </li>
                      <li>
                        Renewal Fees Will Be Charged Automatically Unless
                        Cancelled
                      </li>
                      <li>Price Changes Apply To Future Billing Cycles Only</li>
                    </ul>
                  </section>

                  {/* Service Level Agreement */}
                  <section id="sla">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Service Level Agreement
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      We Strive To Provide:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>99.9% Uptime For Shared Hosting Services</li>
                      <li>24/7 Technical Support Via Ticket System</li>
                      <li>Regular Backups (Available Upon Request)</li>
                      <li>
                        Scheduled Maintenance With Advance Notice When Possible
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed text-justify mt-4">
                      However, We Are Not Liable For Downtime Caused By Factors
                      Beyond Our Control, Including But Not Limited To Natural
                      Disasters, Power Failures, ISP Issues, Or DDOS Attacks.
                    </p>
                  </section>

                  {/* Intellectual Property */}
                  <section id="intellectual-property">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Intellectual Property
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      All Content, Trademarks, And Materials On Our Website Are
                      The Property Of Multilat Or Its Licensors. You May Not
                      Copy, Reproduce, Distribute, Or Create Derivative Works
                      Without Our Express Written Permission. Your Content
                      Remains Your Property, But You Grant Us A License To Use
                      It For Service Provision.
                    </p>
                  </section>

                  {/* Data Backup And Loss */}
                  <section id="data-backup">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Data Backup And Loss
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      While We Perform Regular Backups, You Are Solely
                      Responsible For Maintaining Your Own Backups Of Your Data.
                      We Are Not Liable For Any Data Loss Or Corruption. We
                      Recommend Maintaining Off-Site Backups Of All Critical
                      Data.
                    </p>
                  </section>

                  {/* Termination */}
                  <section id="termination">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Termination
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                      We May Terminate Or Suspend Your Account Immediately:
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-muted-foreground ml-6">
                      <li>For Violation Of These Terms</li>
                      <li>For Non-Payment Of Fees</li>
                      <li>Upon Your Request</li>
                      <li>If Required By Law</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed text-justify mt-4">
                      Upon Termination, Your Right To Use The Services Will
                      Immediately Cease. You Must Download Your Data Before
                      Termination As We Are Not Obligated To Retain It.
                    </p>
                  </section>

                  {/* Limitation Of Liability */}
                  <section id="liability">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Limitation Of Liability
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      To The Maximum Extent Permitted By Law, Multilat Shall Not
                      Be Liable For Any Indirect, Incidental, Special,
                      Consequential, Or Punitive Damages, Including Lost
                      Profits, Data Loss, Or Business Interruption. Our Total
                      Liability Shall Not Exceed The Amount Paid By You For The
                      Services In The Last 12 Months.
                    </p>
                  </section>

                  {/* Disclaimer */}
                  <section id="disclaimer">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Disclaimer
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      Our Services Are Provided &quot;As Is&quot; And &quot;As
                      Available&quot; Without Any Warranties Of Any Kind, Either
                      Express Or Implied. We Do Not Warrant That The Services
                      Will Be Uninterrupted, Error-Free, Or Completely Secure.
                    </p>
                  </section>

                  {/* Governing Law */}
                  <section id="governing-law">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Governing Law
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      These Terms Shall Be Governed By And Construed In
                      Accordance With The Laws Of Bangladesh, Without Regard To
                      Its Conflict Of Law Provisions. Any Disputes Shall Be
                      Resolved In The Courts Of Dhaka, Bangladesh.
                    </p>
                  </section>

                  {/* Changes To Terms */}
                  <section id="changes">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Changes To Terms
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      We Reserve The Right To Modify These Terms At Any Time.
                      Changes Will Be Posted On This Page With An Updated
                      &quot;Last Updated&quot; Date. Continued Use Of Our
                      Services After Changes Constitutes Acceptance Of The
                      Modified Terms.
                    </p>
                  </section>

                  {/* Contact Us */}
                  <section id="contact">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Contact Us
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      If You Have Any Questions About These Terms, Please
                      Contact Us At:
                    </p>
                    <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
                      <p className="text-foreground">
                        <strong>Email:</strong> legal@bst.com.bd
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
