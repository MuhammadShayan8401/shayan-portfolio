const CATEGORIES = [
  {
    title: 'AI / ML',
    items: ['Python', 'PyTorch', 'TensorFlow', 'Keras', 'Scikit-Learn', 'OpenCV', 'SciPy'],
  },
  {
    title: 'Generative AI',
    items: ['Stable Diffusion', 'Hugging Face', 'SegFormer', 'MiDaS', 'Transformers', 'Diffusers'],
  },
  {
    title: 'Data Tooling',
    items: ['Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Streamlit'],
  },
  {
    title: 'Backend / Frontend',
    items: ['FastAPI', 'Flask', 'React', 'Node.js', 'MongoDB', 'MySQL', 'Railway · Vercel'],
  },
]

const LEARNING = [
  'Generative AI & LLM applications',
  'AI agents and agentic workflows',
  'Advanced machine learning engineering',
  'Research-oriented ML evaluation and validation',
  'Production deployment of AI applications',
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="sec-label reveal">Tech Stack</div>
        <h2 className="sec-h reveal rd1" style={{ marginBottom: 48 }}>
          Tools of the <em>trade</em>
        </h2>
        <div className="skills-grid reveal rd2">
          {CATEGORIES.map((cat) => (
            <div className="skill-cat" key={cat.title}>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-items">
                {cat.items.map((item) => (
                  <span className="skill-item" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="learning-panel reveal rd3">
          <div className="learning-head">
            <span className="learning-badge">In Progress</span>
            <span className="learning-title">Currently Learning</span>
          </div>
          <div className="learning-list">
            {LEARNING.map((item) => (
              <div className="learning-item" key={item}>
                <span className="learning-dot" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
