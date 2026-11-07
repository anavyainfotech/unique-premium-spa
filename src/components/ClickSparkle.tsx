"use client";

import { useEffect } from "react";

export default function ClickSparkle() {
  useEffect(() => {
    const createSparkle = (e: MouseEvent) => {
      const colors = ["#e32678", "#f04e98", "#fce7f0", "#ffd1dc", "#ffffff"];
      const count = 8;

      for (let i = 0; i < count; i++) {
        const sparkle = document.createElement("span");
        sparkle.className = "click-sparkle-particle";
        
        const size = Math.floor(Math.random() * 6) + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
        const velocity = Math.random() * 45 + 25;
        const destX = Math.cos(angle) * velocity;
        const destY = Math.sin(angle) * velocity;

        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.backgroundColor = color;
        sparkle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        sparkle.style.left = `${e.clientX}px`;
        sparkle.style.top = `${e.clientY}px`;
        sparkle.style.setProperty("--dest-x", `${destX}px`);
        sparkle.style.setProperty("--dest-y", `${destY}px`);

        document.body.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 650);
      }
    };

    window.addEventListener("click", createSparkle);
    return () => window.removeEventListener("click", createSparkle);
  }, []);

  return null;
}
