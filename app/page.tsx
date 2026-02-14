"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Starfield from "../components/starfield";
import Hero from "../components/hero";
import Stats from "../components/stats";
import About from "../components/about";
import Projects from "../components/projects";
import Experience from "../components/experience";
import Contact from "../components/contact";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Starfield Background */}
      <Starfield />
      
      {/* Mouse-following gradient overlay */}
      <motion.div
        className="fixed inset-0 opacity-20 pointer-events-none z-10"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.7 0.15 180 / 0.1), transparent 40%)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-20">
        <Navbar />

        <main>
          <Hero />
          <Stats />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}