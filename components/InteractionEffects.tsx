"use client";
import { useEffect } from "react";

export default function InteractionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const canTrackCursor = window.matchMedia("(pointer: fine)").matches;

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--cursor-x", event.clientX + "px");
      root.style.setProperty("--cursor-y", event.clientY + "px");
    };

    const addRipple = (target: Element, clientX?: number, clientY?: number) => {
      if (target instanceof HTMLButtonElement && target.disabled) return;
      if (target.getAttribute("aria-disabled") === "true") return;
      const bounds = target.getBoundingClientRect();
      const diameter = Math.max(bounds.width, bounds.height) * 1.7;
      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.setAttribute("aria-hidden", "true");
      ripple.style.width = diameter + "px";
      ripple.style.height = diameter + "px";
      ripple.style.left = ((clientX ?? (bounds.left + bounds.width / 2)) - bounds.left - diameter / 2) + "px";
      ripple.style.top = ((clientY ?? (bounds.top + bounds.height / 2)) - bounds.top - diameter / 2) + "px";
      target.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 620);
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest("button, a.btn, .theme-toggle") : null;
      if (target) addRipple(target, event.clientX, event.clientY);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const target = event.target instanceof Element ? event.target.closest("button, a.btn, .theme-toggle") : null;
      if (target) addRipple(target);
    };

    if (canTrackCursor) window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, []);

  return null;
}
