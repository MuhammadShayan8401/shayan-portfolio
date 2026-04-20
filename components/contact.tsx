"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, Code2, ArrowRight, Copy, Check } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "m.shayan.8401@gmail.com",
    href: "mailto:m.shayan.8401@gmail.com",
    color: "from-red-500 to-orange-500",
    copyable: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "MuhammadShayan8401",
    href: "https://github.com/MuhammadShayan8401",
    color: "from-gray-700 to-gray-900",
    copyable: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Muhammad Shayan Ahmed",
    href: "https://www.linkedin.com/in/muhammad-shayan-ahmed-05b847281/",
    color: "from-blue-600 to-blue-700",
    copyable: false,
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "LeetCode Solutions",
    href: "https://github.com/MuhammadShayan8401/leetcode-solutions",
    color: "from-yellow-500 to-orange-500",
    copyable: false,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("m.shayan.8401@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <span className="text-primary font-mono text-sm">07. What&apos;s Next?</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            I&apos;m currently looking for opportunities to collaborate on AI/ML
            research projects and build real-world data science applications.
            Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best
            to get back to you!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-4 mb-12"
        >
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              <motion.a
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="block p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
              
              {/* Copy button for email */}
              {link.copyable && (
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    copyEmail();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 right-3 p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="mailto:m.shayan.8401@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all font-medium text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
          >
            <Send className="w-5 h-5" />
            Send Me a Message
          </motion.a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-muted-foreground text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>Karachi, Pakistan</span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
