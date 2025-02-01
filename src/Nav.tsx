import { useEffect, useState } from 'react'
import About from './AboutMe.tsx'
import Project from './Projects.tsx'
import Contact from './Contact.tsx'

function Navbar() {

    const [isNavbarUserOpen, setIsNavbarUserOpen] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsNavbarUserOpen(false)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolling(true)
            } else {
                setIsScrolling(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full transition-all duration-300 ${isScrolling ? "bg-white shadow-md" : "bg-[#FFFCEF]"}`}>

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Phicharaya</span>
                    </a>

                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default" aria-expanded="false"
                        onClick={() => setIsNavbarUserOpen(!isNavbarUserOpen)}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className={`w-full md:block md:w-auto ${isNavbarUserOpen ? "block" : "hidden"}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <button onClick={() => scrollToSection("about")} className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-[#f0b67f] md:p-0">About Me</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("project")} className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-[#f0b67f] md:p-0">Projects</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("contact")} className="block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-[#f0b67f] md:p-0">Contact</button>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar
