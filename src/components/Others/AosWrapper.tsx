"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AosWrapper() {
  useEffect(() => {
    Aos.init({
      duration: 800, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return null;
}
