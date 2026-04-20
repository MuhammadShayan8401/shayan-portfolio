"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, Brain, BarChart3, Users, Lightbulb, Rocket } from "lucide-react";

const currentProjects = [
  {
    title: "Disease Outbreak Predictor",
    description:
      "Machine learning system that forecasts disease trends using healthcare datasets with focus on accuracy, interpretability, and analytics dashboards.",
    icon: Microscope,
    status: "In Progress",
  },
  {
    title: "AI Emotion Stabilizer",
    description:
      "Behavioral analytics project using emotion classification models to analyze emotional patterns and stability.",
    icon: Brain,
    status: "Research Phase",
  },
  {
    title: "Data Analytics Portfolio",
    description:
      "Projects involving EDA, statistical analysis, and data visualization to extract meaningful insights from complex datasets.",
    icon: BarChart3,
    status: "Ongoing",
  },
];

const collaborationAreas = [
  { icon: Lightbulb, text: "AI / ML research projects" },
  { icon: Microscope, text: "Healthcare & environmental analytics" },
  { icon: BarChart3, text: "Predictive analytics systems" },
  { icon: Rocket, text: "Real-world data science applications" },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono mr-2">02.</span>
            What I&apos;m Building
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <project.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {project.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 p-8 bg-card rounded-xl border border-border relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Open to Collaborate On
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {collaborationAreas.map((area, index) => (
                <motion.div
                  key={area.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <area.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {area.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
