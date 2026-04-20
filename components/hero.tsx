"use client";

import { Github, Linkedin, Code2 } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MuhammadShayan8401",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-shayan-ahmed-05b847281/",
    label: "LinkedIn",
  },
  {
    icon: Code2,
    href: "https://github.com/MuhammadShayan8401/leetcode-solutions",
    label: "LeetCode Solutions",
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider">
              {"Hi, I'm"}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Muhammad
              <br />
              <span className="text-primary">Shayan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Machine Learning Engineer
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-lg text-lg">
            Software Engineering Student (SSUET &apos;27) passionate about building{" "}
            <span className="text-primary">AI systems</span> that transform
            real-world data into actionable insights. I focus on predictive
            modeling, data analysis, and intelligent systems.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 pt-4">
            {["About", "Experience", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                <span className="text-sm font-medium uppercase tracking-widest">
                  {item}
                </span>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-5 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Decorative */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-primary/10 blur-3xl absolute -inset-4" />
            <div className="relative w-72 h-72 rounded-full border border-primary/30 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full border border-primary/20 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-primary/5 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/50">MS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
