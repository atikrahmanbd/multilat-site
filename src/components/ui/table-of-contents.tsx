"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
  }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-foreground flex items-center gap-2">
        <span className="inline-block w-4 h-0.5 bg-primary"></span>
        On This Page
      </p>
      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={cn(
              "block w-full text-left text-sm transition-colors hover:text-foreground py-1 relative pl-4",
              activeId === item.id
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            {activeId === item.id && (
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-foreground rounded-full"></span>
            )}
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
