"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering a stable placeholder until mounted
  if (!mounted) {
    return (
      <button
        aria-label="Toggle dark mode"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/10 bg-card text-foreground hover:border-border/20 transition-colors"
        // No-op onClick before mount
        onClick={() => {}}
      >
        <span className="inline-block" style={{ width: 18, height: 18 }} />
      </button>
    );
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/10 bg-card text-foreground hover:border-border/20 transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}