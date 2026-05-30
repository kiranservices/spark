"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Company", href: "#company" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all",
        scrolled
          ? "border-border bg-background/95 shadow-sm backdrop-blur-xl"
          : "bg-navy/50 text-white backdrop-blur-md",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="#home" className="flex min-w-0 items-center gap-3" aria-label="Kiran Services home">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-corporate text-base font-black text-white">
            KS
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-bold leading-tight">Kiran Services</span>
            <span className={cn("block truncate text-xs", scrolled ? "text-muted-foreground" : "text-white/70")}>
              Workforce Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-white/10 hover:text-corporate dark:hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant={scrolled ? "default" : "secondary"}>
            <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}>
              <Phone />
              Call Now
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button
            aria-label="Open navigation menu"
            size="icon"
            variant="ghost"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background text-foreground lg:hidden"
          >
            <div className="container grid gap-2 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`}>
                  <Phone />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
