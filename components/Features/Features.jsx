// components/Features/Features.jsx
import { 
    Cpu, 
    Clock, 
    FileText, 
    Building2, 
    PenTool,
    BarChart3,
    CheckCircle2,
    Layers
  } from 'lucide-react'
  
  export default function Features() {
    const features = [
      {
        icon: <Cpu className="w-6 h-6" />,
        title: "AI-Powered Automation",
        description: "Leverage cutting-edge AI technology to automate MEP drawings and calculations with unprecedented accuracy.",
        color: "blue"
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Fast Turnaround",
        description: "Get your MEP drawings and reports delivered quickly without compromising on quality.",
        color: "green"
      },
      {
        icon: <FileText className="w-6 h-6" />,
        title: "Detailed Documentation",
        description: "Receive comprehensive documentation including BOQ, specifications, and technical reports.",
        color: "purple"
      },
      {
        icon: <Building2 className="w-6 h-6" />,
        title: "Building Integration",
        description: "Seamless integration with architectural and structural elements for conflict-free designs.",
        color: "orange"
      },
      {
        icon: <PenTool className="w-6 h-6" />,
        title: "Custom Solutions",
        description: "Tailored MEP solutions designed to meet your specific project requirements.",
        color: "red"
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Performance Analysis",
        description: "Advanced system performance analysis and optimization recommendations.",
        color: "indigo"
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: "Quality Assurance",
        description: "Rigorous quality checks and compliance with international standards.",
        color: "teal"
      },
      {
        icon: <Layers className="w-6 h-6" />,
        title: "Multi-discipline Coordination",
        description: "Coordinated MEP services ensuring clash-free installation and optimal performance.",
        color: "pink"
      }
    ]
  
    return (
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Advanced MEP Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Combining AI technology with engineering expertise to deliver superior MEP consulting services
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
              />
            ))}
          </div>
  
          {/* Statistics Section */}
          <div className="mt-24 grid md:grid-cols-4 gap-8">
            <StatCard
              number="500+"
              label="Projects Completed"
              color="blue"
            />
            <StatCard
              number="98%"
              label="Client Satisfaction"
              color="green"
            />
            <StatCard
              number="25+"
              label="Countries Served"
              color="purple"
            />
            <StatCard
              number="15+"
              label="Years Experience"
              color="orange"
            />
          </div>
        </div>
      </section>
    )
  }
  
  function FeatureCard({ feature, index }) {
    const colors = {
      blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
      green: "bg-green-50 text-green-600 hover:bg-green-100",
      purple: "bg-purple-50 text-purple-600 hover:bg-purple-100",
      orange: "bg-orange-50 text-orange-600 hover:bg-orange-100",
      red: "bg-red-50 text-red-600 hover:bg-red-100",
      indigo: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
      teal: "bg-teal-50 text-teal-600 hover:bg-teal-100",
      pink: "bg-pink-50 text-pink-600 hover:bg-pink-100"
    }
  
    return (
      <div 
        className={`
          group p-8 rounded-xl transition-all duration-300
          ${colors[feature.color]}
          hover:shadow-lg hover:-translate-y-1
        `}
        style={{
          animationDelay: `${index * 100}ms`
        }}
      >
        <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600">
          {feature.description}
        </p>
      </div>
    )
  }
  
  function StatCard({ number, label, color }) {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600"
    }
  
    return (
      <div className={`
        relative overflow-hidden rounded-xl p-8
        bg-gradient-to-br ${colors[color]}
        transform transition-transform duration-300 hover:-translate-y-1
      `}>
        <div className="relative z-10 text-white">
          <div className="text-4xl font-bold mb-2">
            {number}
          </div>
          <div className="text-white/90">
            {label}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-x-8 translate-y-8" />
      </div>
    )
  }