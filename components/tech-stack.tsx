"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Database, 
  Code2, 
  Cpu, 
  BarChart3, 
  GitBranch, 
  Terminal,
  Boxes,
  Workflow
} from "lucide-react";

const techCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 75 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    title: "ML/DL Frameworks",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    technologies: [
      { name: "TensorFlow", level: 80 },
      { name: "Keras", level: 85 },
      { name: "Scikit-learn", level: 88 },
      { name: "PyTorch", level: 70 },
    ],
  },
  {
    title: "Data Science",
    icon: BarChart3,
    color: "from-emerald-500 to-green-500",
    technologies: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 90 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 80 },
    ],
  },
  {
    title: "Web & Deployment",
    icon: Boxes,
    color: "from-orange-500 to-amber-500",
    technologies: [
      { name: "Streamlit", level: 85 },
      { name: "Flask", level: 70 },
      { name: "HTML/CSS", level: 75 },
    ],
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    color: "from-rose-500 to-pink-500",
    technologies: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "Jupyter", level: 90 },
      { name: "VS Code", level: 85 },
    ],
  },
  {
    title: "ML Concepts",
    icon: Workflow,
    color: "from-cyan-500 to-teal-500",
    technologies: [
      { name: "CNNs", level: 82 },
      { name: "Regression", level: 88 },
      { name: "Classification", level: 85 },
      { name: "Data Preprocessing", level: 90 },
    ],
  },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono mr-2">06.</span>
            Tech Stack
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          Technologies and tools I use to build machine learning models, analyze data, and deploy AI applications.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="group"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 h-full"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-foreground font-semibold">{category.title}</h3>
                </div>

                {/* Skills with progress bars */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.3 }}
                    >
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-primary font-mono text-xs">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${tech.level}%` } : {}}
                          transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.5, duration: 0.8 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
