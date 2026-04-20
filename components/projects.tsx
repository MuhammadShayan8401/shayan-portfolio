"use client";

import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Pneumonia Detection CNN",
    description:
      "A Deep Learning-based web application that detects Pneumonia from chest X-ray images using a Convolutional Neural Network (CNN). Built to assist healthcare professionals in rapid diagnosis.",
    tech: ["Python", "TensorFlow", "CNN", "Deep Learning", "Medical Imaging"],
    github: "https://github.com/MuhammadShayan8401/pneumonia-detection-cnn",
    live: null,
    featured: true,
  },
  {
    title: "Insurance Claim Prediction",
    description:
      "Predicts medical insurance claim charges based on personal attributes such as age, BMI, smoking status, and region using a Linear Regression model. Features an interactive Streamlit dashboard for visualization and prediction.",
    tech: ["Python", "Linear Regression", "Streamlit", "Data Visualization", "Pandas"],
    github: "https://github.com/MuhammadShayan8401/insurance-claim-prediction",
    live: "https://insurance-claim-prediction-hjne3ngt7kim52ym9gxxb4.streamlit.app/",
    featured: true,
  },
  {
    title: "Credit Risk Prediction",
    description:
      "Predicts whether a loan applicant is likely to default using machine learning. Provides an interactive web-based dashboard for analysis and prediction to help financial institutions make informed decisions.",
    tech: ["Python", "Machine Learning", "Streamlit", "Risk Analysis", "Classification"],
    github: "https://github.com/MuhammadShayan8401/Credit-Risk-Prediction",
    live: "https://credit-risk-prediction-clykmamzbui8x3takdrma5.streamlit.app/",
    featured: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid lg:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Project Image/Visual Placeholder */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:col-start-6" : ""
                } hidden lg:block`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg group-hover:bg-transparent transition-all duration-300" />
                  <div className="aspect-video bg-secondary rounded-lg border border-border overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                      <div className="text-center p-8">
                        <span className="text-5xl block mb-4">
                          {index === 0 ? "🩺" : index === 1 ? "📈" : "💳"}
                        </span>
                        <span className="text-muted-foreground font-mono text-sm">
                          {project.tech[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`lg:col-span-6 ${
                  index % 2 === 1
                    ? "lg:col-start-1 lg:row-start-1"
                    : "lg:col-start-6"
                } relative z-10`}
              >
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-lg shadow-xl border border-border mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`flex flex-wrap gap-2 mb-4 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-muted-foreground font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex items-center gap-4 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/MuhammadShayan8401"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-mono text-sm"
          >
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
