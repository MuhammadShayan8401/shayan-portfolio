"use client";

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Data Analytics",
  "Streamlit",
  "SQL",
  "Git",
];

const interests = [
  "Applied Machine Learning",
  "Healthcare AI & Behavioral Analytics",
  "Predictive Modeling",
  "Data-Driven Decision Systems",
  "End-to-End ML Pipelines",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px flex-1 bg-border max-w-sm" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a Machine Learning enthusiast and Data Analytics practitioner
              currently pursuing my Software Engineering degree at{" "}
              <span className="text-primary">SSUET (Class of 2027)</span>. My
              passion lies in turning research ideas into scalable ML
              applications that solve real-world problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I focus on building intelligent systems that can analyze complex
              datasets, predict outcomes, and provide actionable insights. From
              healthcare AI to financial predictions, I enjoy tackling
              challenging problems with data-driven solutions.
            </p>

            <div className="pt-4">
              <h3 className="text-foreground font-semibold mb-4">
                Currently Learning
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  Advanced ML algorithms & model optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  Model evaluation & validation techniques
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  MLOps and ML deployment workflows
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-foreground font-semibold mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-4">Interests</h3>
              <ul className="space-y-2">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="text-primary">▹</span>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
