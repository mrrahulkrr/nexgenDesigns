import Hero from '@/app/Hero/Hero'
import Solutions from '@/app/solutions/page'
import Features from '@/app/Features/Features'
import CTA from '@/app/CTA/CTA'
import Header from '@/app/Header/page'
import About from '@/app/About/page'
import Services from '@/app/Services/page'
import Projects from '@/app/Projects/page'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="solutions">
        <Solutions />
      </section>
      <section id="cta">
        <CTA />
      </section>
    </main>
  )
}