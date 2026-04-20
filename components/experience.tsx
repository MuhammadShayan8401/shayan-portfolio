"use client";

const currentProjects = [
  {
    title: "Disease Outbreak Predictor",
    description:
      "Machine learning system that forecasts disease trends using healthcare datasets with focus on accuracy, interpretability, and analytics dashboards.",
    icon: "🦠",
  },
  {
    title: "AI Emotion Stabilizer",
    description:
      "Behavioral analytics project using emotion classification models to analyze emotional patterns and stability.",
    icon: "🧠",
  },
  {
    title: "Data Analytics Portfolio",
    description:
      "Projects involving EDA, statistical analysis, and data visualization to extract meaningful insights from complex datasets.",
    icon: "📊",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono mr-2">02.</span>
            What I&apos;m Building
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{project.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card rounded-lg border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Open to Collaborate On
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary">▹</span>
              AI / ML research projects
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">▹</span>
              Healthcare & environmental analytics
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">▹</span>
              Predictive analytics systems
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">▹</span>
              Real-world data science applications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
