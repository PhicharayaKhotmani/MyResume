import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutMe from './AboutMe.tsx'
import Navbar from './Nav.tsx'
import Hero from './Hero.tsx'
import Project from './Projects.tsx'
import Footer from './Footer.tsx'
import Contact from './Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <AboutMe />
    <Project />
    <Contact />
    <Footer />
  </StrictMode>,
)
