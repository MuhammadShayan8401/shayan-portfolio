"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "TensorFlow", level: 75 },
  { name: "PyTorch", level: 70 },
  { name: "Scikit-learn", level: 85 },
  { name: "Pandas", level: 90 },
  { name: "NumPy", level: 90 },
  { name: "Data Analytics", level: 85 },
  { name: "Streamlit", level: 80 },
  { name: "SQL", level: 75 },
  { name: "Git", level: 80 },
];

const interests = [
  "Applied Machine Learning",
  "Healthcare AI & Behavioral Analytics",
  "Predictive Modeling",
  "Data-Driven Decision Systems",
  "End-to-End ML Pipelines",
];

const learningItems = [
  "Advanced ML algorithms & model optimization",
  "Model evaluation & validation techniques",
  "MLOps and ML deployment workflows",
  "Natural Language Processing (NLP)",
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
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
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
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              I&apos;m a Machine Learning enthusiast and Data Analytics practitioner
              currently pursuing my Software Engineering degree at{" "}
              <span className="text-primary font-semibold">SSUET (Class of 2027)</span>. My
              passion lies in turning research ideas into scalable ML
              applications that solve real-world problems.
            </motion.p>

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
              <ul className="space-y-3 text-muted-foreground">
                {learningItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-primary text-lg">&#9656;</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
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
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
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
            <div>
              <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.6 + index * 0.05, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
                      />
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
