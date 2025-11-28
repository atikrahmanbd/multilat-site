"use client";

import { motion } from "motion/react";
import GradientText from "@/components/ui/gradient-text";
import { Paperclip, Send, MessageSquare, BarChart3 } from "lucide-react";
import { CardStack } from "@/components/ui/card-stack";

const PAYMENT_CARDS = [
  {
    id: 1,
    content: (
      <div className="bg-gradient-to-br from-pink-700 to-pink-500 rounded-2xl p-6 text-white relative z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-no-repeat bg-right bg-[length:250%]"
          style={{
            backgroundImage: "url('/payment-logos/bd/bkash.svg')",
            filter: "brightness(0) invert(1)",
          }}
        ></div>
        <div className="flex justify-between items-center relative z-10">
          <div className="w-12 h-8 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-md"></div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>
        <div className="mt-16 relative z-10">
          <p className="tracking-[0.2em] text-md font-medium">01712-XXX-XXX</p>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-sm opacity-90">bKash</p>
            <span className="text-sm opacity-75">•</span>
            <p className="text-sm opacity-90">Mobile Banking</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl p-6 text-white relative z-10">
        <div className="flex justify-between items-center">
          <div className="w-12 h-8 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-md"></div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>
        <div className="mt-16">
          <p className="tracking-[0.2em] text-md font-medium">
            **** **** **** 2834
          </p>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-sm opacity-90">Credit Card</p>
            <span className="text-sm opacity-75">•</span>
            <p className="text-sm opacity-90">Visa</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="bg-gradient-to-br from-red-800 to-red-600 rounded-2xl p-6 text-white relative z-10">
        <div className="flex justify-between items-center">
          <div className="w-12 h-8 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-md"></div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>
        <div className="mt-16">
          <p className="tracking-[0.2em] text-md font-medium">
            **** **** **** 5678
          </p>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-sm opacity-90">Credit Card</p>
            <span className="text-sm opacity-75">•</span>
            <p className="text-sm opacity-90">MasterCard</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 text-white relative z-10">
        <div className="flex justify-between items-center">
          <div className="w-12 h-8 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-md"></div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>
        <div className="mt-16">
          <p className="tracking-[0.2em] text-md font-medium">
            Connected To iPhone
          </p>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-sm opacity-90">Apple Pay</p>
            <span className="text-sm opacity-75">•</span>
            <p className="text-sm opacity-90">Connected</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-2xl p-6 text-white relative z-10">
        <div className="flex justify-between items-center">
          <div className="w-12 h-8 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-md"></div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>
        <div className="mt-16">
          <p className="tracking-[0.2em] text-md font-medium">
            me@my.paypal.com
          </p>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-sm opacity-90">PayPal</p>
            <span className="text-sm opacity-75">•</span>
            <p className="text-sm opacity-90">Connected</p>
          </div>
        </div>
      </div>
    ),
  },
];

export function CommonBetterExperience() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            A Better Experience{" "}
            <GradientText>Built Around Your Needs</GradientText>
          </h2>
          <p className="px-4 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            From Friendly Support To Flexible Payments And A Skilled Team Ready
            To Assist — We Make Managing Your Services Simple And Hassle-Free.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ChatCard />
          <PaymentsCard />
          <TeamCard />
        </div>
      </div>
    </section>
  );
}

function ChatCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-muted/30 rounded-[18px] p-4 border border-border shadow-sm h-full flex flex-col"
    >
      <div className="space-y-4 rounded-xl p-4 border border-border bg-card flex-1">
        <div className="space-y-4">
          {/* Chat messages */}
          <div className="flex justify-start animate-chat-message-1 opacity-0">
            <div className="max-w-[80%] text-sm p-2 rounded-[0px_10px_10px_10px] border border-border bg-card shadow-sm">
              Hello, Nice
            </div>
          </div>
          <div className="flex justify-start animate-chat-message-2 opacity-0">
            <div className="max-w-[80%] text-sm p-2 rounded-[0px_10px_10px_10px] border border-border bg-card shadow-sm">
              Welcome To LiveChat I Was Made With Pick A Topic From The List Or
              Type Down A Question!
            </div>
          </div>
          <div className="flex justify-end animate-chat-message-3 opacity-0">
            <div className="max-w-[80%] text-sm p-2 rounded-[10px_0px_10px_10px] bg-gradient-to-br from-primary/90 to-primary text-primary-foreground shadow-sm">
              Welcome
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="border border-border rounded-full p-3.5 flex items-center gap-3 animate-chat-message-4 opacity-0">
          <input
            type="text"
            placeholder="Write A Message"
            className="flex-1 outline-none text-sm bg-transparent placeholder-muted-foreground"
            disabled
          />
          <div className="flex items-center gap-3 text-muted-foreground">
            <button className="hover:text-foreground transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="hover:text-foreground transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mt-6 mb-2">Chat With Our Team</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        We’re Here Whenever You Need Help. Get Fast, Friendly Support For
        Domains, Hosting, Design, Development and Other Technical Issues.
      </p>
    </motion.div>
  );
}

function PaymentsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-muted/30 rounded-[18px] p-4 border border-border shadow-sm h-full flex flex-col"
    >
      <div className="space-y-4 rounded-xl p-4 border border-border bg-card flex-1 flex flex-col items-center justify-center">
        <CardStack items={PAYMENT_CARDS} offset={15} scaleFactor={0.06} />
      </div>
      <h3 className="text-xl font-bold mt-6 mb-2">Flexible Payment Options</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        You Can Pay Using bKash, Nagad, Rocket, Visa, Mastercard, AMEX,
        International Cards or PayPal — Fast, Secure, And Instant.
      </p>
    </motion.div>
  );
}

function TeamCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-muted/30 rounded-[18px] p-4 border border-border shadow-sm h-full flex flex-col"
    >
      <div className="space-y-4 rounded-xl p-4 border border-border bg-card flex-1">
        <div className="flex items-center justify-between mb-6">
          <button className="text-primary hover:text-primary/80 transition-colors font-medium">
            + Join
          </button>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-muted border-2 border-background ring-2 ring-muted"
                style={{
                  backgroundImage: `url(https://i.pravatar.cc/150?img=${i})`,
                  backgroundSize: "cover",
                }}
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-muted border-2 border-background ring-2 ring-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
              +2
            </div>
          </div>
        </div>

        <ProjectCard />
      </div>
      <h3 className="text-xl font-bold mt-6 mb-2">Ready To Collaborate</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Our Diverse, Skilled Team Is Always Prepared To Jump In — Whether You
        Need Help With Design, Development, or Any Technical Needs.
      </p>
    </motion.div>
  );
}

function ProjectCard() {
  return (
    <div className="h-52 relative">
      {/* Background dashed border */}
      <div className="absolute p-5" />

      {/* Main card */}
      <div className="rounded-lg absolute inset-0  border border-dashed border-primary/30 bg-primary/5 shadow-sm p-5">
        <div>
          <span className="bg-gradient-to-b from-primary/90 to-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
            Available
          </span>
          <h4 className="text-sm font-semibold mt-3 mb-1">
            Team Collaboration
          </h4>
          <p className="text-muted-foreground text-xs">
            Our Skilled Team Is Ready To Assist With Design, Development, And
            Technical Tasks.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5">
          <div className="flex -space-x-2">
            {[5, 6].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-background ring-2 ring-muted"
                style={{
                  backgroundImage: `url(https://i.pravatar.cc/150?img=${i})`,
                  backgroundSize: "cover",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-4 text-muted-foreground text-sm mt-2">
            <span className="flex items-center gap-1.5 text-xs">
              <MessageSquare className="w-4 h-4" />
              Active Support
            </span>
            <span className="flex items-center gap-1.5 text-xs">
              <BarChart3 className="w-4 h-4" />6 Experts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
