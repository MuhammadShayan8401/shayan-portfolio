import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import useReveal from './hooks/useReveal'
import useTheme from './hooks/useTheme'

export default function App() {
  useReveal()
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}
