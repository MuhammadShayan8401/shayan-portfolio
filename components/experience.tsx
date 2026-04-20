"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, Brain, BarChart3, Users, Lightbulb, Rocket, ArrowRight, Sparkles } from "lucide-react";

const currentProjects = [
  {
    title: "Disease Outbreak Predictor",
    description:
      "Machine learning system that forecasts disease trends using healthcare datasets with focus on accuracy, interpretability, and analytics dashboards.",
    icon: Microscope,
    status: "In Progress",
    statusColor: "bg-amber-500",
    gradient: "from-rose-500/10 to-rose-500/5",
  },
  {
    title: "AI Emotion Stabilizer",
    description:
      "Behavioral analytics project using emotion classification models to analyze emotional patterns and stability.",
    icon: Brain,
    status: "Research Phase",
    statusColor: "bg-blue-500",
    gradient: "from-blue-500/10 to-blue-500/5",
  },
  {
    title: "Data Analytics Portfolio",
    description:
      "Projects involving EDA, statistical analysis, and data visualization to extract meaningful insights from complex datasets.",
    icon: BarChart3,
    status: "Ongoing",
    statusColor: "bg-emerald-500",
    gradient: "from-emerald-500/10 to-emerald-500/5",
  },
];

const collaborationAreas = [
  { icon: Lightbulb, text: "AI / ML research projects", color: "text-amber-500" },
  { icon: Microscope, text: "Healthcare & environmental analytics", color: "text-rose-500" },
  { icon: BarChart3, text: "Predictive analytics systems", color: "text-blue-500" },
  { icon: Rocket, text: "Real-world data science applications", color: "text-emerald-500" },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-mono mr-2">02.</span>
            What I&apos;m Building
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          Currently working on exciting projects that push the boundaries of AI and machine learning.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full relative overflow-hidden`}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Sparkle on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4"
                >
                  <Sparkles className="w-4 h-4 text-primary/50" />
                </motion.div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20"
                    >
                      <project.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <span className={`text-xs font-mono text-white ${project.statusColor} px-3 py-1 rounded-full`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16"
        >
          <div className="p-8 bg-card rounded-2xl border border-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
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
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-all group border border-transparent hover:border-border"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <area.icon className={`w-5 h-5 ${area.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                      {area.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                ))}
              </div>
              
              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="mt-8 pt-6 border-t border-border"
              >
                <p className="text-muted-foreground text-center">
                  Interested in collaborating?{" "}
                  <a 
                    href="mailto:m.shayan.8401@gmail.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    Let&apos;s connect
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
