// components/About/About.jsx
import { Building2, Users2, CheckCircle2, Clock } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-semibold">About Us</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900">
              Leading MEP Consultancy in
              <span className="text-primary block mt-2">Engineering Excellence</span>
            </h2>
            
            <p className="text-gray-700 leading-relaxed">
              With over 15 years of experience, PillarPlus has been at the forefront of MEP engineering, 
              delivering innovative solutions for complex projects. Our team of expert engineers and 
              consultants work tirelessly to ensure every project meets the highest standards of quality 
              and efficiency.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <Building2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-4xl font-bold text-primary">500+</h3>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-4xl font-bold text-primary">98%</h3>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <Users2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-4xl font-bold text-primary">50+</h3>
                    <p className="text-gray-600">Expert Engineers</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-4xl font-bold text-primary">15+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            {/* Creative geometric pattern background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-all duration-500"></div>
            
            {/* Main content container */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              {/* Animated grid pattern */}
              <div className="absolute inset-0 opacity-20" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                }}>
              </div>
              
              {/* Engineering diagram visualization */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-50">
                {/* Animated lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-4 border-primary/30 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-primary/50 transition-colors duration-300"></div>
                  <div className="absolute w-48 h-48 border-4 border-primary/20 rounded-full animate-[spin_7s_linear_infinite_reverse] group-hover:border-primary/40 transition-colors duration-300"></div>
                  <div className="absolute w-32 h-32 border-4 border-primary/10 rounded-full animate-[spin_5s_linear_infinite] group-hover:border-primary/30 transition-colors duration-300"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/60 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-primary/40 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary/50 rounded-full animate-ping"></div>
                </div>
                
                {/* Blueprint-style grid */}
                <div className="absolute inset-0" 
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}>
                </div>
              </div>
            </div>
            
            {/* Floating info card */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl transform group-hover:-translate-y-2 transition-transform duration-300">
              <p className="text-2xl font-bold">Innovation First</p>
              <p className="text-sm mt-2">AI-Powered MEP Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}