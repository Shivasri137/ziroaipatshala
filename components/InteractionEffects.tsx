"use client";
import { useEffect } from "react";

export default function InteractionEffects() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const root = document.documentElement;
    let frame = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.35;
    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", x + "px");
        root.style.setProperty("--cursor-y", y + "px");
        frame = 0;
      });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
