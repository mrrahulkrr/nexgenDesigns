"use client"
import React from 'react';
import { Button } from '../../components/ui/Button';
import { Play, Zap, Droplets, Wind, Building2, Ruler, Cpu } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

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
      // setIsMenuOpen(false)
    }
  }


  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br via-transparent" />

      {/* Animated circuit lines background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(0deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'slide 20s linear infinite'
          }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-semibold">Advanced MEPF Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to {' '}
              <span className="block">
              <span className='text-primary'>NexGen</span>
               <br />
                Design{' '}
                <span className="text-primary text-base relative">
                  <br />
                  Your Trusted Partner
                  in MEPF Engineering Solutions
                  {/* <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
                  </svg> */}
                </span>
              </span>
            </h1>

            <p className="text-base md:text-sm text-gray-500 max-w-xl">
                At Nexgen Design, we deliver expert MEPF (Mechanical, Electrical, Plumbing, and Fire) design solutions for modern construction. Our experienced team creates efficient, precise designs using advanced tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90"  onClick={() => scrollToSection('cta')}>
                Request Proposal
              </Button>
              <Button onClick={() => window.open("https://www.linkedin.com/company/nexgen-design/", "_blank")}
                      variant="outline"
                      size="lg" className="group">
                <Play className="mr-2 ml-6 w-4 h-4 transition-transform group-hover:scale-110" />
                Our Works
              </Button>
            </div>
          </div>

          {/* Right Column - Services Hexagon */}
          <div className="relative aspect-square hidden md:block">
            {/* Central rotating hexagon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 lg:w-64 lg:h-64 border-4 border-primary/20 rotate-30 animate-[spin_15s_linear_infinite] group-hover:border-primary/40 transition-colors duration-300" />
            </div>

            {/* Floating MEP service cards in fixed positions */}
            <div className="absolute inset-0">
              {/* Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 transform animate-float-slow">
                <ServiceCard 
                title="BIM" 
                icon={<Building2 className="w-5 h-5" />}
                description="3D MEPF Modeling"
                color="indigo"
              />
              </div>

              {/* Top Right */}
              <div className="absolute top-1/4 right-0 animate-float-slow" style={{ animationDelay: "0.5s" }}>
                <ServiceCard 
                  title="Electrical" 
                  icon={<Zap className="w-5 h-5" />}
                  description="Smart Power Systems"
                  color="blue"
                />
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-1/4 right-0 animate-float-slow" style={{ animationDelay: "1s" }}>
                <ServiceCard 
                  title="Mechanical" 
                  icon={<Wind className="w-5 h-5" />}
                  description="Advanced HVAC Systems"
                  color="red"
                />
              </div>

              {/* Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform animate-float-slow" style={{ animationDelay: "1.5s" }}>
              <ServiceCard
                title="BOQ & Estimation"
                icon={<Building2 className="w-5 h-5" />}
                description="Cost & material breakdown"
                color="purple"
              />
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-1/4 left-0 animate-float-slow" style={{ animationDelay: "2s" }}>
                <ServiceCard 
                  title="Plumbing" 
                  icon={<Droplets className="w-5 h-5" />}
                  description="Efficient Water Solutions"
                  color="emerald"
                />
              </div>

              {/* Top Left */}
              <div className="absolute top-1/4 left-0 animate-float-slow" style={{ animationDelay: "2.5s" }}>
                <ServiceCard 
                  title="Fire Protection" 
                  icon={<Ruler className="w-5 h-5" />}
                  description="Fire prevention Systems"
                  color="amber"
                />
              </div>
            </div>
          </div>

          {/* Mobile Service Cards Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <ServiceCard 
              title="BIM" 
              icon={<Building2 className="w-5 h-5" />}
              description="3D MEPF Modeling"
              color="purple"
            />
            <ServiceCard 
              title="Electrical" 
              icon={<Zap className="w-5 h-5" />}
              description="Smart Power Systems"
              color="blue"
            />
            <ServiceCard 
              title="Mechanical" 
              icon={<Wind className="w-5 h-5" />}
              description="Advanced HVAC Systems"
              color="red"
            />
            <ServiceCard
              title="BOQ & Estimation"
              icon={<Building2 className="w-5 h-5" />}
              description="Cost & material breakdown"
              color="purple"
            />
            <ServiceCard
              title="Plumbing"
              icon={<Droplets className="w-5 h-5" />}
              description="Efficient Water Solutions"
              color="emerald"
            />
            <ServiceCard 
              title="Fire Protection" 
              icon={<Ruler className="w-5 h-5" />}
              description="Fire prevention Systems"
              color="amber"
              />
          </div>
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white pointer-events-none" />
    </section>
  );
}

function ServiceCard({ title, icon, description, color }) {
  const colors = {
    emerald: 'bg-emerald-500 shadow-emerald-500/20',
    red: 'bg-red-500 shadow-red-500/20',
    blue: 'bg-blue-500 shadow-blue-500/20',
    purple: 'bg-purple-500 shadow-purple-500/20',
    amber: 'bg-amber-500 shadow-amber-500/20',
    indigo: 'bg-indigo-500 shadow-indigo-500/20'
  };

  return (
    <div className={`${colors[color]} rounded-xl p-4 text-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer`}>
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <h3 className="font-bold text-sm md:text-base">{title}</h3>
          <p className="text-xs opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Add this to your global CSS
const styles = `
  @keyframes float-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  @keyframes slide {
    0% { transform: translateX(0) translateY(0); }
    100% { transform: translateX(40px) translateY(40px); }
  }

  .animate-float-slow {
    animation: float-slow 4s ease-in-out infinite;
  }

  .bg-gradient-radial {
    background-image: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
  }
`;