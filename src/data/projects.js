import aeternaImg from '../assets/project-aeterna.webp'
import medaiImg from '../assets/project-medai.webp'
import dashboardImg from '../assets/project-business-dashboard.webp'

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
]
