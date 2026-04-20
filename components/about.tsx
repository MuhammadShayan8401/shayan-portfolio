"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, BookOpen, Target, Zap, MapPin, Calendar, Award, Brain, Layers, Network, ChevronRight } from "lucide-react";

const interests = [
  "Applied Machine Learning",
  "Healthcare AI",
  "Behavioral Analytics",
  "Predictive Modeling",
  "Data-Driven Systems",
  "Deep Learning",
];

const learningItems = [
  { 
    text: "Convolutional Neural Networks (CNNs)", 
    icon: Brain,
    description: "Image classification & medical imaging",
    color: "from-rose-500 to-pink-500"
  },
  { 
    text: "Natural Language Processing (NLP)", 
    icon: Network,
    description: "Text analysis & sentiment detection",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    text: "Advanced ML Model Optimization", 
    icon: Zap,
    description: "Hyperparameter tuning & performance",
    color: "from-amber-500 to-orange-500"
  },
  { 
    text: "MLOps & Deployment Workflows", 
    icon: Layers,
    description: "Production-ready ML pipelines",
    color: "from-emerald-500 to-green-500"
  },
];

const highlights = [
  { icon: GraduationCap, label: "Education", value: "Software Engineering @ SSUET" },
  { icon: Calendar, label: "Graduating", value: "Class of 2027" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
  { icon: Award, label: "Focus", value: "Machine Learning & AI" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

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
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
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
              className="p-6 bg-card rounded-xl border border-border relative overflow-hidden group"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
                I&apos;m a <span className="text-primary font-semibold">Machine Learning enthusiast</span> and 
                Data Analytics practitioner currently pursuing my Software Engineering degree at{" "}
                <span className="text-primary font-semibold">SSUET (Class of 2027)</span>. My
                passion lies in turning research ideas into scalable ML applications that solve real-world problems.
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              I focus on building intelligent systems that can analyze complex
              datasets, predict outcomes, and provide actionable insights. From
              healthcare AI to financial predictions, I enjoy tackling
              challenging problems with data-driven solutions.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-4 bg-card/50 rounded-xl border border-border/50 group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                    transition={{ delay: 0.5 + index * 0.05 }}
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
            className="space-y-6"
          >
            {/* Currently Learning - Enhanced */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
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
                    onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                    className="group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`p-4 bg-secondary/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all relative overflow-hidden ${
                        expandedItem === index ? "border-primary/50" : ""
                      }`}
                    >
                      {/* Gradient accent */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color}`} />
                      
                      <div className="flex items-center gap-3 pl-2">
                        <motion.div 
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <item.icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <span className="text-foreground font-medium block">
                            {item.text}
                          </span>
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: expandedItem === index ? "auto" : 0,
                              opacity: expandedItem === index ? 1 : 0
                            }}
                            className="text-muted-foreground text-sm mt-1 overflow-hidden"
                          >
                            {item.description}
                          </motion.p>
                        </div>
                        <ChevronRight 
                          className={`w-4 h-4 text-muted-foreground transition-transform ${
                            expandedItem === index ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Code Stats - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 relative overflow-hidden"
            >
              {/* Animated particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full"
                  style={{ left: `${20 + i * 15}%`, top: "20%" }}
                  animate={{
                    y: [0, 50, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
              
              <p className="text-center text-muted-foreground relative z-10">
                <motion.span 
                  className="text-primary font-mono text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.9, type: "spring" }}
                >
                  3+
                </motion.span>
                <br />
                <span className="text-sm">ML Projects Completed</span>
              </p>
              <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-primary/20 relative z-10">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="text-primary font-mono font-bold text-xl">2</p>
                  <p className="text-xs text-muted-foreground">Live Apps</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="text-primary font-mono font-bold text-xl">94%</p>
                  <p className="text-xs text-muted-foreground">CNN Accuracy</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="text-primary font-mono font-bold text-xl">100+</p>
                  <p className="text-xs text-muted-foreground">LeetCode</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
