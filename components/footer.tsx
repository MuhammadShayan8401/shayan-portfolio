"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/MuhammadShayan8401", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-shayan-ahmed-05b847281/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:m.shayan.8401@gmail.com", label: "Email" },
  { icon: Code2, href: "https://github.com/MuhammadShayan8401/leetcode-solutions", label: "LeetCode" },
];

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-border" />

          {/* Credits */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm font-mono flex items-center gap-2 justify-center">
              Designed & Built with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> by
            </p>
            <p className="text-foreground font-medium">Muhammad Shayan</p>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs font-mono">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
