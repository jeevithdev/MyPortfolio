import './styles/index.css'
import Nav      from './components/Nav/Nav'
import Hero     from './components/Hero/Hero'
import Skills   from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import About    from './components/About/About'
import Contact  from './components/Contact/Contact'
import Footer   from './components/Footer/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
