"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Image as ImageIcon, 
  Layers, 
  Grid3X3, 
  Zap, 
  Brain, 
  CheckCircle2, 
  XCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

const cnnSteps = [
  {
    step: 1,
    title: "Input Image",
    icon: ImageIcon,
    description: "Chest X-ray image is fed into the network as a matrix of pixel values",
    detail: "The raw X-ray image (typically 224x224 pixels) is normalized and preprocessed before being fed into the CNN.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: 2,
    title: "Convolutional Layers",
    icon: Grid3X3,
    description: "Filters extract features like edges, textures, and patterns from the image",
    detail: "Multiple convolutional layers with ReLU activation detect increasingly complex features - from simple edges to lung opacity patterns.",
    color: "from-violet-500 to-purple-500",
  },
  {
    step: 3,
    title: "Pooling Layers",
    icon: Layers,
    description: "Reduces spatial dimensions while preserving important features",
    detail: "Max pooling layers downsample the feature maps, reducing computational complexity and helping the model focus on dominant features.",
    color: "from-orange-500 to-amber-500",
  },
  {
    step: 4,
    title: "Feature Extraction",
    icon: Zap,
    description: "Deep layers capture high-level patterns specific to pneumonia",
    detail: "The network learns to identify consolidation patterns, infiltrates, and other radiological signs indicative of pneumonia.",
    color: "from-emerald-500 to-green-500",
  },
  {
    step: 5,
    title: "Classification",
    icon: Brain,
    description: "Fully connected layers process features for final prediction",
    detail: "Flattened features pass through dense layers with dropout regularization, culminating in a sigmoid activation for binary classification.",
    color: "from-rose-500 to-pink-500",
  },
];

const modelMetrics = [
  { label: "Accuracy", value: "94%", description: "Overall prediction accuracy" },
  { label: "Precision", value: "92%", description: "True positive rate" },
  { label: "Recall", value: "96%", description: "Sensitivity to detect pneumonia" },
  { label: "F1-Score", value: "94%", description: "Harmonic mean of precision & recall" },
];

export function CNNExplained() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [showPrediction, setShowPrediction] = useState(false);

  return (
    <section id="cnn-work" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono mr-2">05.</span>
            How CNN Works
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-12 max-w-3xl"
        >
          Understanding how my Pneumonia Detection CNN analyzes chest X-rays using deep learning. 
          The model processes images through multiple layers to identify patterns associated with pneumonia.
        </motion.p>

        {/* CNN Pipeline Visualization */}
        <div className="grid lg:grid-cols-5 gap-4 mb-16">
          {cnnSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`p-5 bg-card rounded-2xl border transition-all duration-300 h-full ${
                  activeStep === index ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                }`}
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <span className="text-primary font-mono text-sm font-bold">{step.step}</span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-foreground font-semibold mb-2 text-sm">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>

                {/* Expanded detail on hover */}
                {activeStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 pt-3 border-t border-border"
                  >
                    <p className="text-xs text-primary/80">{step.detail}</p>
                  </motion.div>
                )}

                {/* Arrow connector */}
                {index < cnnSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-primary/50" />
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left - Prediction Demo */}
          <div className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Prediction Demo</h3>
            </div>

            <div className="space-y-4">
              {/* Simulated X-ray placeholder */}
              <div className="relative aspect-square bg-secondary/50 rounded-xl overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">Chest X-Ray Input</p>
                  </div>
                </div>
                
                {/* Scanning animation */}
                {showPrediction && (
                  <motion.div
                    initial={{ top: 0 }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                )}
              </div>

              {/* Predict button */}
              <motion.button
                onClick={() => {
                  setShowPrediction(true);
                  setTimeout(() => setShowPrediction(false), 2500);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={showPrediction}
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all disabled:opacity-50"
              >
                {showPrediction ? "Analyzing..." : "Run Prediction"}
              </motion.button>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showPrediction ? 0 : 1 }}
                className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                <div>
                  <p className="text-foreground font-medium">Normal (No Pneumonia)</p>
                  <p className="text-sm text-muted-foreground">Confidence: 94.2%</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right - Model Metrics */}
          <div className="p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Model Performance</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {modelMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-4 bg-secondary/50 rounded-xl text-center group hover:bg-secondary transition-colors"
                >
                  <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
                  <p className="text-sm text-foreground font-medium">{metric.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Architecture Summary */}
            <div className="p-4 bg-secondary/30 rounded-xl border border-border">
              <h4 className="text-sm font-semibold text-foreground mb-3">Architecture Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Framework</span>
                  <span className="text-primary font-mono">TensorFlow/Keras</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Input Size</span>
                  <span className="text-primary font-mono">224 x 224 x 1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Conv Layers</span>
                  <span className="text-primary font-mono">4 Blocks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dense Layers</span>
                  <span className="text-primary font-mono">2 (512, 1)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Output</span>
                  <span className="text-primary font-mono">Binary (Sigmoid)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
