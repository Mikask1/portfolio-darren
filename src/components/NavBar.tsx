"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-white/15 via-white/12 to-white/15 backdrop-blur-xl border-b border-white/25 shadow-lg shadow-black/10 dark:shadow-black/25"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-16 items-center justify-between">
        <Link href="/#home" className="group inline-flex items-center gap-4">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-background font-bold shadow-[0_0_0_3px_var(--color-ring)]">
            D
          </span>
          <span className="text-sm font-semibold tracking-wide opacity-90 group-hover:opacity-100">
            Darren
          </span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <Link 
            href="/#home" 
            className={`hover:opacity-100 underline-ltr ${
              pathname === "/" ? "opacity-100 underline-active" : "opacity-80"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/blogs" 
            className={`hover:opacity-100 underline-ltr ${
              pathname === "/blogs" ? "opacity-100 underline-active" : "opacity-80"
            }`}
          >
            Blogs
          </Link>
          <a
            href="mailto:darrenprasetya40@gmail.com"
            className="hover:opacity-100 opacity-80 underline-ltr"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}


