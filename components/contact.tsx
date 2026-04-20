"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Send, Code2 } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "m.shayan.8401@gmail.com",
    href: "mailto:m.shayan.8401@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "MuhammadShayan8401",
    href: "https://github.com/MuhammadShayan8401",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Muhammad Shayan Ahmed",
    href: "https://www.linkedin.com/in/muhammad-shayan-ahmed-05b847281/",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "LeetCode Solutions",
    href: "https://github.com/MuhammadShayan8401/leetcode-solutions",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-4">04. What&apos;s Next?</p>
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
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </div>
            </motion.a>
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
            whileHover={{ scale: 1.05 }}
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
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>Karachi, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
