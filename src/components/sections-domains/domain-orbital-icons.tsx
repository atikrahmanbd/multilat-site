"use client";

import Image from "next/image";

export function DomainOrbitalIcons() {
  return (
    <div className="flex-1 gap-2 flex items-center justify-center w-full h-full absolute inset-0 py-2 mt-16 sm:mt-20 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.1)_5%,rgba(0,0,0,1.0)_20%,rgba(0,0,0,1.0)_70%,rgba(0,0,0,0.2)_95%)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
      {/* Background Concentric Circles - Match Orbital Paths With Symmetrical Gaps */}
      {/* Orbit 1 Path - 35% of container */}
      <div className="absolute inset-0 shrink-0 border rounded-full m-auto shadow border-border w-[35%] aspect-square bg-muted/80 z-[5]"></div>
      {/* Orbit 2 Path - 50% of container */}
      <div className="absolute inset-0 shrink-0 border rounded-full m-auto shadow border-border w-[50%] aspect-square bg-muted/60 z-[4]"></div>
      {/* Orbit 3 Path - 65% of container */}
      <div className="absolute inset-0 shrink-0 border rounded-full m-auto shadow border-border w-[65%] aspect-square bg-muted/40 z-[3]"></div>
      {/* Orbit 4 Path - 80% of container */}
      <div className="absolute inset-0 shrink-0 border rounded-full m-auto shadow border-border w-[80%] aspect-square bg-muted/20 z-[2]"></div>

      {/* Central Hub - B.S.T Logo - 20% of container */}
      <div className="w-[20%] aspect-square bg-card absolute inset-0 shrink-0 border z-20 rounded-full m-auto flex items-center justify-center border-border shadow-sm">
        <Image
          src="/logos/bst-logo-for-light.svg"
          alt="B.S.T Logo"
          width={64}
          height={64}
          className="w-3/5 h-3/5 dark:hidden hover-shake"
        />
        <Image
          src="/logos/bst-logo-for-dark.svg"
          alt="B.S.T Logo"
          width={64}
          height={64}
          className="w-3/5 h-3/5 hidden dark:block hover-shake"
        />
      </div>

      {/* Orbit 1 - Closest (Popular Domains: .com, .net, .org) - 35% */}
      <div className="absolute inset-0 m-auto w-[35%] aspect-square z-[15] animate-[spin_25s_linear_infinite] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_25s_linear_infinite_reverse]">
            <Image
              src="/domains/bark-hosting-dot-com-domain.svg"
              alt=".com"
              width={24}
              height={24}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_25s_linear_infinite_reverse]">
            <Image
              src="/domains/bark-hosting-dot-net-domain.svg"
              alt=".net"
              width={24}
              height={24}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_25s_linear_infinite_reverse]">
            <Image
              src="/domains/bark-hosting-dot-org-domain.svg"
              alt=".org"
              width={24}
              height={24}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Orbit 2 - Second Ring (.shop, .store, .online) - 50% */}
      <div className="absolute inset-0 m-auto w-[50%] aspect-square z-[15] animate-[spin_20s_linear_infinite_reverse] pointer-events-none">
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_20s_linear_infinite]">
            <Image
              src="/domains/bark-hosting-dot-shop-domain.svg"
              alt=".shop"
              width={28}
              height={28}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_20s_linear_infinite]">
            <Image
              src="/domains/bark-hosting-dot-store-domain.svg"
              alt=".store"
              width={28}
              height={28}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_20s_linear_infinite]">
            <Image
              src="/domains/bark-hosting-dot-online-domain.svg"
              alt=".online"
              width={28}
              height={28}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Orbit 3 - Third Ring (.tech, .xyz, .biz) - 65% */}
      <div className="absolute inset-0 m-auto w-[65%] aspect-square z-[15] animate-[spin_18s_linear_infinite] pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_18s_linear_infinite_reverse]">
            <Image
              src="/domains/bark-hosting-dot-tech-domain.svg"
              alt=".tech"
              width={28}
              height={28}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_18s_linear_infinite_reverse]">
            <Image
              src="/domains/bark-hosting-dot-xyz-domain.svg"
              alt=".xyz"
              width={28}
              height={28}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_18s_linear_infinite_reverse]">
            <Image
              src="/domains/bark-hosting-dot-biz-domain.svg"
              alt=".biz"
              width={28}
              height={28}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Orbit 4 - Outer Ring (.fun, .cloud) - 80% */}
      <div className="absolute inset-0 m-auto w-[80%] aspect-square z-[15] animate-[spin_15s_linear_infinite_reverse] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_15s_linear_infinite]">
            <Image
              src="/domains/bark-hosting-dot-fun-domain.svg"
              alt=".fun"
              width={24}
              height={24}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-1.5 sm:p-2 animate-[spin_15s_linear_infinite]">
            <Image
              src="/domains/bark-hosting-dot-cloud-domain.svg"
              alt=".cloud"
              width={24}
              height={24}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
