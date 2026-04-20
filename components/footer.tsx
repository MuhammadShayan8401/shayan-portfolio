"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/MuhammadShayan8401", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-shayan-ahmed-05b847281/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:m.shayan.8401@gmail.com", label: "Email" },
  { icon: Code2, href: "https://github.com/MuhammadShayan8401/leetcode-solutions", label: "LeetCode" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-border bg-card/50 relative">
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Credits */}
          <motion.div 
            className="text-center space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-muted-foreground text-sm font-mono flex items-center gap-2 justify-center flex-wrap">
              Designed & Built with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </motion.span>
              by
            </p>
            <p className="text-foreground font-semibold text-lg">Muhammad Shayan</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex items-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "CNN", id: "cnn-work" },
              { name: "Skills", id: "skills" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                {item.name}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p 
            className="text-muted-foreground text-xs font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            &copy; {new Date().getFullYear()} Muhammad Shayan. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
