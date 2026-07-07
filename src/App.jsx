import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero3D />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}

export default App
