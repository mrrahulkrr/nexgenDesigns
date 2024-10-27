'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Logo } from '../../components/ui/Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'HOME', id: 'hero', href: '/' },
    { label: 'SERVICES', id: 'services', href: '/#services' },
    { label: 'PROJECTS', id: 'projects', href: '/#projects' },
    { label: 'MEP SOLUTIONS', id: 'solutions', href: '/#solutions' },
    { label: 'ABOUT', id: 'about', href: '/#about' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white border-b-0 shadow-md'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center space-x-8 my-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="nav-link cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4" 
              onClick={() => scrollToSection('cta')}>
            {/* <Button variant="outline" size="sm">
              Contact Us
            </Button> */}
            <Button>
              REQUEST PROPOSAL
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="container-custom py-4 bg-white shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className="nav-link text-left"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4" onClick={() => scrollToSection('cta')}>
                {/* <Button variant="outline" fullWidth onClick={() => scrollToSection('contact')}>
                  Contact Us
                </Button> */}
                <Button fullWidth>
                  REQUEST PROPOSAL
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}