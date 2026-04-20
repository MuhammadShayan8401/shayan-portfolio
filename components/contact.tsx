"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">04. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I&apos;m currently looking for opportunities to collaborate on AI/ML
          research projects and build real-world data science applications.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://github.com/MuhammadShayan8401"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="font-mono text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-shayan-ahmed-05b847281/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-mono text-sm">LinkedIn</span>
          </a>
        </div>

        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>
      </div>
    </section>
  );
}
