"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ChevronRight, Brain, TrendingUp, CreditCard, Sparkles, Layers } from "lucide-react";

const projects = [
  {
    title: "Pneumonia Detection CNN",
    description:
      "A Deep Learning-based web application that detects Pneumonia from chest X-ray images using a Convolutional Neural Network (CNN). Built to assist healthcare professionals in rapid diagnosis with high accuracy predictions.",
    tech: ["Python", "TensorFlow", "CNN", "Deep Learning", "Medical Imaging"],
    github: "https://github.com/MuhammadShayan8401/pneumonia-detection-cnn",
    live: null,
    icon: Brain,
    color: "from-rose-500 to-rose-600",
    bgColor: "from-rose-500/20 to-rose-500/5",
    shadowColor: "shadow-rose-500/20",
    features: ["Image Classification", "Medical AI", "High Accuracy"],
  },
  {
    title: "Insurance Claim Prediction",
    description:
      "Predicts medical insurance claim charges based on personal attributes such as age, BMI, smoking status, and region using a Linear Regression model. Features an interactive Streamlit dashboard for visualization and real-time prediction.",
    tech: ["Python", "Linear Regression", "Streamlit", "Data Visualization", "Pandas"],
    github: "https://github.com/MuhammadShayan8401/insurance-claim-prediction",
    live: "https://insurance-claim-prediction-hjne3ngt7kim52ym9gxxb4.streamlit.app/",
    icon: TrendingUp,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "from-emerald-500/20 to-emerald-500/5",
    shadowColor: "shadow-emerald-500/20",
    features: ["Regression Model", "Interactive Dashboard", "Real-time Predictions"],
  },
  {
    title: "Credit Risk Prediction",
    description:
      "Predicts whether a loan applicant is likely to default using machine learning classification algorithms. Provides an interactive web-based dashboard for analysis and prediction to help financial institutions make informed decisions.",
    tech: ["Python", "Machine Learning", "Streamlit", "Risk Analysis", "Classification"],
    github: "https://github.com/MuhammadShayan8401/Credit-Risk-Prediction",
    live: "https://credit-risk-prediction-clykmamzbui8x3takdrma5.streamlit.app/",
    icon: CreditCard,
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-500/20 to-blue-500/5",
    shadowColor: "shadow-blue-500/20",
    features: ["Classification Model", "Risk Assessment", "Financial Analytics"],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          Here are some of my featured projects showcasing my expertise in machine learning, 
          data science, and building real-world AI applications.
        </motion.p>

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
              <motion.div 
                className={`relative p-6 md:p-8 rounded-2xl bg-card border border-border transition-all duration-500 overflow-hidden ${
                  hoveredIndex === index ? `${project.shadowColor} shadow-2xl border-primary/30` : ""
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Background gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.bgColor}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Sparkle effect on hover */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  </motion.div>
                )}
                
                <div className="relative z-10 grid md:grid-cols-12 gap-6 items-start">
                  {/* Icon */}
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <motion.div
                      animate={hoveredIndex === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Layers className="w-4 h-4 text-primary" />
                        <p className="text-primary font-mono text-xs">Featured Project</p>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
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
                      className="flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground rounded-xl transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.color} text-white rounded-xl hover:opacity-90 transition-opacity text-sm font-medium shadow-lg`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
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
          <motion.a
            href="https://github.com/MuhammadShayan8401"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl text-foreground hover:border-primary hover:text-primary transition-all font-medium"
          >
            <Github className="w-5 h-5" />
            View More Projects on GitHub
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
