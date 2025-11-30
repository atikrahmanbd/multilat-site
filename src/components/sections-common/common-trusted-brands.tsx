"use client";

import {
  InfiniteScrollClients,
  type ClientLogo,
} from "@/components/ui/infinite-scroll-clients";

export function CommonTrustedBrands() {
  const clients: ClientLogo[] = [
    {
      name: "Agro Grow",
      logo: "/mtl-clients/agro-grow.svg",
    },
    {
      name: "Balisira Resort",
      logo: "/mtl-clients/balisira-resort.png",
    },
    {
      name: "Fresh Meat Fish",
      logo: "/mtl-clients/fresh-meat-fish.svg",
    },
    {
      name: "Larky Parky",
      logo: "/mtl-clients/larky-parky.svg",
      width: 260,
    },
    {
      name: "Mahbub Perfume",
      logo: "/mtl-clients/mahbub-perfume.svg",
    },
    {
      name: "Novem Eco Resort",
      logo: "/mtl-clients/novem-eco-resort.svg",
    },
    {
      name: "Chandpur Roofing",
      logo: "/mtl-clients/chandpur-roofing.svg",
    },
  ];

  return (
    <section className="relative dark:bg-black/50">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 md:p-8 py-8 sm:py-16 md:py-20">
        {/* Title And Subheading */}
        <div className="text-center">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            Trusted By Companies & Brands
          </h2>
          <p className="px-4 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
            Businesses Across Bangladesh Trust Us For Hosting, Web Design,
            Software Development, IT Solutions, and Ongoing Support
          </p>
        </div>

        <InfiniteScrollClients
          items={clients}
          direction="right"
          speed="medium"
          pauseOnHover={true}
          imageWidth={160}
          imageHeight={80}
        />
      </div>
    </section>
  );
}
