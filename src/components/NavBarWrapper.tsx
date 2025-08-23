"use client";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function NavBarWrapper() {
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
      <NavBar />
    </header>
  );
}


