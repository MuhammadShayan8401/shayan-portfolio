import aeternaImg    from '../assets/project-aeterna.webp'
import medaiImg      from '../assets/project-medai.webp'
import dashboardImg  from '../assets/project-business-dashboard.webp'
import flyrankImg    from '../assets/project-flyrank.webp'

export const projects = [
  {
    id: 'aeterna',
    flagship: true,
    badge: '✦ Flagship Project',
    num: 'Project 01 · 2025',
    title: ['Aeterna AI', 'Interior Designer'],
    desc: 'A production-grade AI interior design platform that transforms room photos into professionally redesigned spaces — integrating semantic segmentation, depth estimation, preference learning, and Stable Diffusion.',
    tags: [
      { label: 'SegFormer', featured: true },
      { label: 'Stable Diffusion', featured: true },
      { label: 'MiDaS', featured: true },
      { label: 'PyTorch' },
      { label: 'FastAPI' },
      { label: 'React' },
      { label: 'Railway' },
    ],
    live: 'https://aeterna-ai-interior-designer.vercel.app/',
    code: 'https://github.com/MuhammadShayan8401/Aeterna-AI-Interior-Designer',
    image: aeternaImg,
    imageAlt: 'Aeterna AI interior design platform screenshot',
    outcome: 'Real-time pipeline — room photo to redesigned space in seconds, deployed on Railway + Vercel',
    features: [
      { label: 'SegFormer Segmentation' },
      { label: 'MiDaS Depth Estimation' },
      { label: 'Stable Diffusion Output', accent: true },
    ],
    caseStudy: {
      eyebrow: 'Case Study · Flagship Project',
      title: 'Aeterna AI',
      subtitle: 'AI Interior Designer',
      problem:
        'Interior redesign tools often generate visually appealing images without understanding the existing structure or spatial characteristics of the room they\u2019re working with.',
      approach:
        'Aeterna combines semantic segmentation, depth estimation, preference learning, and image-to-image generation into one structured redesign workflow — rather than a single-shot image generator.',
      pipeline: [
        {
          stage: '01 · Input',
          title: 'Interior Image Upload',
          desc: 'The user uploads a photo of an existing room as the starting point for the redesign.',
        },
        {
          stage: '02 · Segmentation',
          title: 'SegFormer Semantic Segmentation',
          desc: 'Identifies meaningful regions and objects in the image — walls, floors, furniture, windows — so later stages know what they\u2019re working with.',
        },
        {
          stage: '03 · Depth',
          title: 'MiDaS Depth Estimation',
          desc: 'Estimates spatial depth from the 2D photo, giving the pipeline a sense of the room\u2019s structure and proportions.',
        },
        {
          stage: '04 · Preference',
          title: 'ANN Preference Learning',
          desc: 'A custom 3-layer MLP with LayerNorm encodes room type, style, density, lighting, and past ratings into a 32-dimensional feature vector to personalise the output.',
        },
        {
          stage: '05 · Generation',
          title: 'Stable Diffusion v1.5 (img2img)',
          desc: 'Combines the segmentation, depth, and preference signals to guide an img2img generation pass, producing the redesigned interior.',
        },
      ],
      stack: [
        { title: 'Frontend', items: ['React', 'Vite'] },
        { title: 'Backend', items: ['FastAPI'] },
        { title: 'ML / AI', items: ['SegFormer', 'MiDaS', 'Custom ANN', 'Stable Diffusion v1.5'] },
        { title: 'Deployment', items: ['Vercel', 'Railway'] },
      ],
      whyItMatters:
        'Aeterna isn\u2019t a single-model image generator — it\u2019s an end-to-end AI application spanning computer vision, depth estimation, preference learning, generative AI, a FastAPI backend, a React frontend, and a production deployment on Vercel and Railway.',
      live: 'https://aeterna-ai-interior-designer.vercel.app/',
      code: 'https://github.com/MuhammadShayan8401/Aeterna-AI-Interior-Designer',
    },
  },
  {
    id: 'medai',
    num: 'Project 02 · Healthcare AI',
    title: ['AI Medical', 'Diagnostics Platform'],
    desc: 'A full-stack diagnostics dashboard unifying Pneumonia Detection and Skin Cancer Classification behind one React interface, backed by a Flask REST API and CNN models trained on chest X-ray and dermoscopic images.',
    tags: [
      { label: 'TensorFlow', featured: true },
      { label: 'CNN' },
      { label: 'OpenCV' },
      { label: 'React' },
      { label: 'Flask' },
    ],
    live: 'https://med-ai-lime.vercel.app/',
    code: 'https://github.com/MuhammadShayan8401/MedAI',
    image: medaiImg,
    imageAlt: 'MedAI medical diagnostics dashboard screenshot',
    outcome: '~90% accuracy on binary pneumonia classification (chest X-ray CNN)',
    features: [
      { label: 'Pneumonia Detection (Binary CNN)' },
      { label: 'Skin Cancer Classification (7-class CNN)' },
      { label: 'Confidence Score Visualisation' },
    ],
  },
  {
    id: 'business-dashboard',
    num: 'Project 03 · Business Intelligence',
    title: ['Interactive Business', 'Dashboard'],
    desc: 'A Streamlit + Plotly BI dashboard analysing sales, profit, and customer performance on the Global Superstore dataset — with dynamic region/category filters and monthly trend analytics.',
    tags: [
      { label: 'Python', featured: true },
      { label: 'Streamlit' },
      { label: 'Pandas' },
      { label: 'Plotly' },
    ],
    live: 'https://muhammadshayan8401-interactive-business-dashboard-app-sj2opj.streamlit.app/',
    code: 'https://github.com/MuhammadShayan8401/interactive-business-dashboard',
    image: dashboardImg,
    imageAlt: 'Global Superstore BI Dashboard showing total sales, profit, orders, and top customers by sales',
    outcome: '$2.3M in sales & $286K profit analysed across 5,009 orders, with region, category & top-customer breakdowns',
    features: [
      { label: 'Live KPI Cards (Sales, Profit, Orders)' },
      { label: 'Top 5 Customers by Sales' },
      { label: 'Region / Category Filters' },
    ],
  },
  {
    id: 'flyrank-research-critic',
    num: 'Project 04 · ML Engineering / AI Agent',
    internship: 'FlyRank AI · ML Engineering Internship',
    title: ['FlyRank AI', 'Research Critic'],
    desc: 'Developed and validated machine-learning workflows for content-visibility decline prediction during my ML Engineering internship at FlyRank AI — covering feature engineering, client-grouped evaluation, baseline comparison, and validation auditing. One deliverable from this internship: an AI research-critic agent that evaluates ML research ideas for methodology gaps and evidence quality.',
    tags: [
      { label: 'AI Agent',          featured: true },
      { label: 'LLMs',              featured: true },
      { label: 'Machine Learning' },
      { label: 'Research Analysis' },
      { label: 'Prompt Engineering' },
      { label: 'Methodology Critique' },
    ],
    live: 'https://ml-research-critic.vercel.app/',
    code: 'https://github.com/MuhammadShayan8401/ml-research-critic',
    image: flyrankImg,
    imageAlt: 'FlyRank AI Research Critic agent interface — showing research input, critique workflow and verdict panel',
    outcome: 'Research idea → AI analysis → structured critique with evidence evaluation and a confidence-rated verdict',
    features: [
      { label: 'Research Paper / Idea Input' },
      { label: 'Methodology & Evidence Evaluation' },
      { label: 'Structured Critique + Verdict', accent: true },
    ],
    impact: {
      label: 'Internship Impact — FlyRank AI',
      stats: [
        { value: '30K', label: 'Feature-vector rows' },
        { value: '32', label: 'Client groups' },
        { value: '78%', label: 'Precision@50 (ML-08)' },
        { value: '10', label: 'Gaps found in audit' },
      ],
      note: 'Built a client-grouped logistic-regression model on a 30K-row feature vector spanning 32 clients (54.21% decline rate in the modelling set), grouping by client to prevent leakage between train and test splits. ML-08 scored 78% Precision@50 against a 92% Week-4 baseline — a gap traced during a validation audit (ML-09) to 10 missing input features, now documented for the next iteration.',
    },
  },
]
