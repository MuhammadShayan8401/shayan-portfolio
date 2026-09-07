# Muhammad Shayan Ahmed — Portfolio

Personal portfolio site for **Muhammad Shayan Ahmed**, AI Engineer based in Karachi, Pakistan. Built with React + Vite, showcasing AI/ML projects, skills, and experience.

**Live site:** https://shayan-portfolio-eight.vercel.app/

---

## ✨ Features

- Dark / light theme toggle with persisted preference
- Scroll-reveal animations and custom cursor (desktop)
- Fully responsive layout — desktop, tablet, and mobile
- Interactive project cards with live screenshots, tech-stack tags, and links to live demos + source code
- Downloadable CV (PDF)
- Smooth-scroll navigation with active-section highlighting
- Back-to-top button and scroll progress indicator

## 🗂️ Featured Projects

| Project | Description | Stack |
|---|---|---|
| **Aeterna AI — Interior Designer** | Production-grade AI interior design platform: room photo → redesigned space using segmentation, depth estimation, and Stable Diffusion | SegFormer, Stable Diffusion, MiDaS, PyTorch, FastAPI, React |
| **MedAI — Medical Diagnostics Platform** | Full-stack dashboard unifying pneumonia detection and skin cancer classification via CNN models | TensorFlow, CNN, OpenCV, React, Flask |
| **Interactive Business Dashboard** | BI dashboard analyzing sales, profit, and customer performance on the Global Superstore dataset | Python, Streamlit, Pandas, Plotly |
| **FlyRank AI — Research Critic** | AI agent (built during ML Engineering internship at FlyRank AI) that critiques ML research ideas — methodology, evidence, and gaps | AI Agents, LLMs, Prompt Engineering |

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Plain CSS with CSS variables (theme-aware)
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd shayan-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview the production build locally

```bash
npm run preview
```

## 📁 Project Structure

```
shayan portfolio/
├── public/                  # Static assets (favicon, CV PDF, OG image)
├── src/
│   ├── assets/               # Images (profile photo, project screenshots)
│   ├── components/           # React components (Hero, Navbar, Projects, etc.)
│   ├── data/
│   │   └── projects.js       # Project content — edit here to add/update projects
│   ├── hooks/                # Custom hooks (theme, scroll-reveal)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Global styles + responsive breakpoints
├── index.html
├── package.json
└── vite.config.js
```

## ✏️ Updating Content

- **Projects:** edit `src/data/projects.js` — each entry controls the title, description, tags, links, image, and highlighted features shown on the project card.
- **Project images:** drop new screenshots into `src/assets/` and reference them in `projects.js`.
- **CV:** replace `public/Muhammad Shayan Ahmed.pdf` with an updated version (keep the same filename, or update the download link in `Hero.jsx` / `Navbar.jsx`).
- **Theme colors / fonts:** adjust CSS variables at the top of `src/index.css`.

## 📄 License

Personal project — all rights reserved.

## 📬 Contact

Muhammad Shayan Ahmed
- GitHub: [MuhammadShayan8401](https://github.com/MuhammadShayan8401)
