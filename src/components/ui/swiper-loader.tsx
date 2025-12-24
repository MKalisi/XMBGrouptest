"use client";

import { useEffect } from "react";

export function SwiperLoader() {
  useEffect(() => {
    // Load Swiper CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css";
    document.head.appendChild(link);

    return () => {
      // Cleanup on unmount
      const existingLink = document.querySelector(`link[href="${link.href}"]`);
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  return null;
}

