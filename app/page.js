import Hero from '@/components/Hero/Hero'
import Solutions from '@/components/solutions/solutions'
import Features from '@/components/Features/Features'
import CTA from '@/components/CTA/CTA'
import Header from '@/components/Header/Header'
import About from '@/components/About/About'
import ServicesList from '@/components/Services/ServicesList'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Features />
      <About />
      <ServicesList />
      <CTA />
    </main>
  )
}