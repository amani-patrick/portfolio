import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar"

import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
     <Navbar/>
     {
      /*
     <Hero/>*/}
     <About/>
     <Education/>
     <Skills/>
     <Projects/>
     <Clients/>
     <Contact/>
     <Footer/>
     <Analytics />
    </>
  )
}

export default App
