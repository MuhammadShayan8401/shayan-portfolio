"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Target, Zap } from "lucide-react";

const skills = [
  { name: "Python", level: 90, category: "Languages" },
  { name: "Machine Learning", level: 85, category: "AI/ML" },
  { name: "Deep Learning", level: 80, category: "AI/ML" },
  { name: "TensorFlow", level: 75, category: "Frameworks" },
  { name: "PyTorch", level: 70, category: "Frameworks" },
  { name: "Scikit-learn", level: 85, category: "Libraries" },
  { name: "Pandas", level: 90, category: "Libraries" },
  { name: "NumPy", level: 90, category: "Libraries" },
  { name: "Data Analytics", level: 85, category: "Skills" },
  { name: "Streamlit", level: 80, category: "Frameworks" },
  { name: "SQL", level: 75, category: "Languages" },
  { name: "Git", level: 80, category: "Tools" },
];

const interests = [
  "Applied Machine Learning",
  "Healthcare AI & Behavioral Analytics",
  "Predictive Modeling",
  "Data-Driven Decision Systems",
  "End-to-End ML Pipelines",
];

const learningItems = [
  { text: "Advanced ML algorithms & model optimization", icon: Zap },
  { text: "Model evaluation & validation techniques", icon: Target },
  { text: "MLOps and ML deployment workflows", icon: BookOpen },
  { text: "Natural Language Processing (NLP)", icon: GraduationCap },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div 
              variants={itemVariants} 
              className="p-6 bg-card rounded-xl border border-border"
            >
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a Machine Learning enthusiast and Data Analytics practitioner
                currently pursuing my Software Engineering degree at{" "}
                <span className="text-primary font-semibold">SSUET (Class of 2027)</span>. My
                passion lies in turning research ideas into scalable ML
                applications that solve real-world problems.
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              I focus on building intelligent systems that can analyze complex
              datasets, predict outcomes, and provide actionable insights. From
              healthcare AI to financial predictions, I enjoy tackling
              challenging problems with data-driven solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary" />
                Currently Learning
              </h3>
              <div className="grid gap-3">
                {learningItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="group"
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary font-mono text-xs bg-primary/10 px-2 py-0.5 rounded">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.6 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary via-primary to-primary/50 rounded-full relative"
                      >
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full opacity-80" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
