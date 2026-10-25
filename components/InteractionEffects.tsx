"use client";
import { useEffect } from "react";

export default function InteractionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;
    let cursorX = window.innerWidth * 0.5;
    let cursorY = window.innerHeight * 0.35;
    const timers = new WeakMap<Element, number>();

    const onPointerMove = (event: PointerEvent) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", cursorX + "px");
        root.style.setProperty("--cursor-y", cursorY + "px");
        frame = 0;
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("button, a.btn, .theme-toggle") : null;
      if (!target || target.getAttribute("aria-disabled") === "true") return;
      if (target instanceof HTMLButtonElement && target.disabled) return;
      const oldTimer = timers.get(target);
      if (oldTimer) window.clearTimeout(oldTimer);
      target.classList.remove("is-clicking");
      void (target as HTMLElement).offsetWidth;
      target.classList.add("is-clicking");
      const timer = window.setTimeout(() => {
        target.classList.remove("is-clicking");
        timers.delete(target);
      }, 280);
      timers.set(target, timer);
    };

    if (supportsFinePointer) window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
