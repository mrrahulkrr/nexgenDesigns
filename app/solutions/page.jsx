
// components/Services/ServicesList.jsx
import { Flame, Droplets, Wind, Zap, Shield } from 'lucide-react';

export default function Solutions() {
  const services = [
    {
      id: 1,
      title: "Fire Sprinkler & Hydrant Systems",
      description: "We excel in designing fire sprinkler and hydrant systems,leveraging advanced software and industry standards. Our solutions guarantee comprehensive coverage and compliance with safety regulations, integrating Indian codes like the NBC and NFPA for optimal safety and performance",
      icon: Flame,
      features: [
        "Integrated Fire Protection Design",
        "Flow and Pressure Calculations", 
        "Coverage Assessment",
        "Cost-Effective Solutions"
      ],
      color: "rgb(239, 68, 68)"
    },
    {
      id: 2,
      title: "Fire Alarm Systems",
      description: "We specialize in designing fire alarm systems,employing advanced technology and industry standardsOur solutions ensure reliable detection and compliance with safety regulations, incorporating relevant Indian codes, specifically IS 2189 for fire alarm systems and IS13800 for alarm systems for buildings, to ensure optimal safety and performance",
      icon: Shield,
      features: [
        "Integrated System Design",
        "Addressable and Conventional Systems",
        "System Integration Analysis",
        "Cost-Effective Solutions"
      ],
      color: "rgb(34, 197, 94)"
    },
    {
      id: 3,
      title: "Electrical Systems",
      description: "We specialize in designing electrical systems, utilizing advanced technology and industry standards. Our solutions ensure reliable power distribution and compliance with safety regulations, incorporating relevant Indian codes, specifically IS 732 for wiring and IS 3043 for earthing, to ensure optimal safety and performance.",
      icon: Wind,
      features: [
        "Power Distribution Design",
        "Lighting Design",
        "Circuit Layouts",
        "Load Analysis",
        "Earthing Solutions"
      ],
      color: "rgb(59, 130, 246)"
    },
    {
      id: 4,
      title: "Plumbing Systems",
      description: "We provide expert design of plumbing systems, ensuring efficient water supply and drainage while adhering to Indian codes like IS 4985 and IS 5329 for optimal safety and performance.",
      icon: Zap,
      features: [
        "Water Supply Design",
        "Drainage Systems",
        "Rainwater Harvesting",
        "Pipe Layout",
        "Fixture Installation"
      ],
      color: "rgb(234, 179, 8)"
    },
    {
      id: 5,
      title: "CAD to BIM Engineering",
      description: "We specialize in converting CAD drawings to Building Information Modeling (BIM), enhancing project visualization and collaboration while improving accuracy and efficiency.",
      icon: Droplets,
      features: [
        "CAD Conversion",
        "3D Modeling",
        "Clash Detection",
        "Quantity Takeoff",
        "Project Coordination",
        "Documentation and Reporting",
      ],
      color: "rgb(14, 165, 233)"
    },
    {
      id: 6,
      title: "MEPF BOQ and Estimation",
      description: "We offer comprehensive MEPF Bill of Quantities (BOQ) and estimation services to ensure accurate project budgeting and resource allocation, enhancing project efficiency and cost management.",
      icon: Droplets,
      features: [
        "Detailed Bill of Quantities Preparation",
        "Cost Estimation",
      ],
      color: "rgb(23, 221, 218)"
    }
  ];

  return (
    <section id='solutions' className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Comprehensive <span className="text-primary">MEPF Solutions</span>
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