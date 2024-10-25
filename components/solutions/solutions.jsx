"use client"

// components/Services/Services.jsx
import { useState } from 'react';
import { ShieldCheck, Droplets, Wind, ZapIcon, Lock, FolderCheck } from 'lucide-react';

const servicesData = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    icon: <Droplets className="w-5 h-5" />,
    features: [
      'Drainage piping (internal and external)',
      'Water supply (internal and external)',
      'Vertical stake piping',
      'Plumbing wall elevations',
      'Schematics',
      'Bill of quantities',
      'Product recommendations'
    ],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875270/NPU_hvn9kr.jpg'
  },
  {
    id: 'fire-fighting',
    title: 'Fire-Fighting',
    icon: <ShieldCheck className="w-5 h-5" />,
    features: [
      'Fire sprinklers layouts',
      'Fire hydrant layouts',
      'Fire alarms',
      'Bill of quantities',
      'Product recommendations'
    ],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875248/welkin_park_wfwdvg.jpg'
  },
  {
    id: 'hvac',
    title: 'HVAC',
    icon: <Wind className="w-5 h-5" />,
    features: [
      'Air conditioning',
      'Copper piping',
      'Ducting layouts',
      'Air cooling layouts',
      'Air exhaust layouts',
      'Chiller plans',
      'Schematics',
      'Bill of quantities',
      'Product recommendations'
    ],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875246/TROPICA_vfn8e9.jpg'
  },
  {
    id: 'electrical',
    title: 'Electrical',
    icon: <ZapIcon className="w-5 h-5" />,
    features: ['Power layouts', 'Lighting layouts', 'Emergency systems', 'Bill of quantities'],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875179/MOR_wume78.jpg'
  },
  {
    id: 'safety',
    title: 'Safety and Security',
    icon: <Lock className="w-5 h-5" />,
    features: ['Access control', 'CCTV systems', 'Security protocols', 'Emergency response plans'],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875246/TROPICA_vfn8e9.jpg'
  },
  {
    id: 'noc',
    title: "NOC's/Site Supervision",
    icon: <FolderCheck className="w-5 h-5" />,
    features: ['Site inspections', 'Quality control', 'Documentation', 'Compliance checks'],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875179/MOR_wume78.jpg'
  }
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('plumbing');
  const activeService = servicesData.find(service => service.id === activeTab);

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left sidebar with tabs */}
          <div className="lg:col-span-3 space-y-2">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === service.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white hover:bg-gray-50 text-gray-700'
                }`}
              >
                {service.icon}
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Center image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src={activeService.image}
                alt={`${activeService.title} diagram`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side features */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {activeService.title}
              </h3>
              <ul className="space-y-2">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}