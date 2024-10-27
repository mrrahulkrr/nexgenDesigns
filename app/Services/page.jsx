
// components/Services/ServicesList.jsx
import { Flame, Droplets, Wind, Zap, Shield } from 'lucide-react';

export default function ServicesList() {
  const services = [
    {
      id: 1,
      title: "Fire Alarm Engineering",
      description: "State-of-the-art fire alarm systems designed to provide comprehensive coverage and rapid response. Our systems include advanced detection mechanisms, intelligent control panels, and seamless integration with building management systems.",
      icon: Flame,
      features: [
        "24/7 Monitoring Systems",
        "Intelligent Detection",
        "Emergency Response Integration",
        "Regular Maintenance Support"
      ],
      color: "rgb(239, 68, 68)"
    },
    {
      id: 2,
      title: "Fire Sprinkler Engineering",
      description: "Comprehensive sprinkler system design and implementation using cutting-edge software and industry best practices. Our solutions ensure optimal coverage and compliance with safety regulations.",
      icon: Shield,
      features: [
        "Automated Design Systems",
        "Pressure Calculations",
        "Coverage Analysis",
        "Cost Optimization"
      ],
      color: "rgb(34, 197, 94)"
    },
    {
      id: 3,
      title: "HVAC Solutions",
      description: "Advanced heating, ventilation, and air conditioning systems designed for maximum efficiency and comfort. We specialize in creating sustainable solutions that reduce energy consumption.",
      icon: Wind,
      features: [
        "Energy Efficiency",
        "Smart Temperature Control",
        "Air Quality Management",
        "Sustainable Design"
      ],
      color: "rgb(59, 130, 246)"
    },
    {
      id: 4,
      title: "Electrical Systems",
      description: "Complete electrical system design and implementation for commercial and residential projects. Our solutions focus on safety, efficiency, and future-proof installations.",
      icon: Zap,
      features: [
        "Power Distribution",
        "Lighting Design",
        "Emergency Systems",
        "Smart Integration"
      ],
      color: "rgb(234, 179, 8)"
    },
    {
      id: 5,
      title: "Plumbing Engineering",
      description: "Innovative plumbing solutions that maximize efficiency and minimize maintenance needs. Our designs incorporate the latest technologies for water conservation and system longevity.",
      icon: Droplets,
      features: [
        "Water Conservation",
        "Efficient Distribution",
        "Sustainable Materials",
        "Smart Monitoring"
      ],
      color: "rgb(14, 165, 233)"
    }
  ];

  return (
    <section id='services' className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Comprehensive <span className="text-primary">MEP Solutions & Services</span>
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Cutting-edge technology combined with engineering expertise
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={`/api/placeholder/600/400`}
                    alt={service.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover/item:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover/item:text-primary transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}