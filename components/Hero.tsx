"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Eye, Mail } from "lucide-react";

const phrases = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Creative Thinker",
];

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = phrases[phraseIndex];
      charIndex = deleting ? charIndex - 1 : charIndex + 1;
      setText(current.substring(0, charIndex));

      let speed = deleting ? 50 : 100;
      if (!deleting && charIndex === current.length) {
        speed = 2000;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 200;
      }
      timeout = setTimeout(tick, speed);
    };

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float" />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-accent-200 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-1.5 mb-8 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500" />
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-5">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-400 dark:via-primary-300 dark:to-accent-400 bg-clip-text text-transparent">
            Tshepang
          </span>
        </h1>

        <div className="flex items-center justify-center h-9 md:h-11 mb-6">
          <span className="typing font-heading text-2xl md:text-3xl font-medium tracking-tight text-neutral-600 dark:text-neutral-300">
            {text}
          </span>
        </div>

        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed text-balance">
          Full Stack Developer passionate about creating innovative digital
          experiences with modern web technologies and clean, efficient code.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            <Eye className="w-5 h-5 mr-2" />
            View My Work
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neutral-400" />
      </div>
    </section>
  );
}
