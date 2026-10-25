"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const THEME_EVENT = "ziro-theme-change";

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const sync = () => {
      const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      setTheme(current);
    };
    sync();
    window.addEventListener(THEME_EVENT, sync);
    return () => window.removeEventListener(THEME_EVENT, sync);
  }, []);

  function toggleTheme() {
    const next: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { window.localStorage.setItem("ziro-theme", next); } catch { /* Theme still works for this visit. */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#11121b" : "#fbfaf8");
    setTheme(next);
    window.dispatchEvent(new CustomEvent(THEME_EVENT));
  }

  const isDark = theme === "dark";
  return <button
    type="button"
    className={compact ? "theme-toggle theme-toggle-compact" : "theme-toggle"}
    onClick={toggleTheme}
    aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    aria-pressed={isDark}
    title={isDark ? "Switch to light theme" : "Switch to dark theme"}
  >
    <span className="theme-toggle-icon" aria-hidden="true">{isDark ? <Moon size={16}/> : <Sun size={16}/>}</span>
    <span className="theme-toggle-label">{isDark ? "Dark" : "Light"}</span>
  </button>;
}
