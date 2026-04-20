"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ChevronRight, Brain, TrendingUp, CreditCard } from "lucide-react";

const projects = [
  {
    title: "Pneumonia Detection CNN",
    description:
      "A Deep Learning-based web application that detects Pneumonia from chest X-ray images using a Convolutional Neural Network (CNN). Built to assist healthcare professionals in rapid diagnosis with high accuracy predictions.",
    tech: ["Python", "TensorFlow", "CNN", "Deep Learning", "Medical Imaging"],
    github: "https://github.com/MuhammadShayan8401/pneumonia-detection-cnn",
    live: null,
    icon: Brain,
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "group-hover:border-rose-500/50",
  },
  {
    title: "Insurance Claim Prediction",
    description:
      "Predicts medical insurance claim charges based on personal attributes such as age, BMI, smoking status, and region using a Linear Regression model. Features an interactive Streamlit dashboard for visualization and real-time prediction.",
    tech: ["Python", "Linear Regression", "Streamlit", "Data Visualization", "Pandas"],
    github: "https://github.com/MuhammadShayan8401/insurance-claim-prediction",
    live: "https://insurance-claim-prediction-hjne3ngt7kim52ym9gxxb4.streamlit.app/",
    icon: TrendingUp,
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "group-hover:border-emerald-500/50",
  },
  {
    title: "Credit Risk Prediction",
    description:
      "Predicts whether a loan applicant is likely to default using machine learning classification algorithms. Provides an interactive web-based dashboard for analysis and prediction to help financial institutions make informed decisions.",
    tech: ["Python", "Machine Learning", "Streamlit", "Risk Analysis", "Classification"],
    github: "https://github.com/MuhammadShayan8401/Credit-Risk-Prediction",
    live: "https://credit-risk-prediction-clykmamzbui8x3takdrma5.streamlit.app/",
    icon: CreditCard,
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "group-hover:border-blue-500/50",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`relative p-6 md:p-8 rounded-xl bg-card border border-border ${project.borderColor} transition-all duration-300 hover:shadow-xl overflow-hidden`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
                  {/* Icon */}
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <motion.div
                      animate={hoveredIndex === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center"
                    >
                      <project.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <p className="text-primary font-mono text-xs mb-1">Featured Project</p>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="md:col-span-3 flex md:flex-col items-center md:items-end gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/MuhammadShayan8401"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono"
          >
            View More Projects on GitHub
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
