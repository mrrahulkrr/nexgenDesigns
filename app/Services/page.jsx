"use client"

// components/Services/Services.jsx
import { useState } from 'react';
import { ShieldCheck, Droplets, Wind, ZapIcon, Lock, FolderCheck } from 'lucide-react';

const servicesData = [
  {
    id: 'fire-fighting',
    title: 'Fire-Services',
    icon: <ShieldCheck className="w-5 h-5" />,
    features: [
      'Fire sprinklers layouts',
      'Fire hydrant layouts',
      'Fire alarms',
      'Bill of quantities',
      "Schematics",
      'Product Data Sheet'
    ],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730005836/FIRE_SERVICES_vjch3k.jpg'
  },
  {
    id: 'electrical',
    title: 'Electrical',
    icon: <ZapIcon className="w-5 h-5" />,
    features: ['Power layouts', 'Lighting layouts', 'Emergency systems', 'Bill of quantities'],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730005722/electrical_ee1rut.jpg'
  },
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
      'Product Data Sheet'
    ],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730005739/PLUMBING_yiwpm5.jpg'
  },
  
  {
    id: 'roadDesign',
    title: 'Road Design',
    icon: <Wind className="w-5 h-5" />,
    features: [
      'Alignment Studies',
      'Cross-Section Layouts',
      'Ducting layouts',
      'Drainage Design',
      'Pavement Design',
      'Bill of quantities',
    ],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730059645/roadServices_Nexgen_l77tut.jpg'
  },
  
  {
    id: 'cadToBim',
    title: 'CAD To BIM',
    icon: <Lock className="w-5 h-5" />,
    features: ['Model Conversion', 'Data Integration', 'Clash Detection', '3D Visualization'],
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730059647/bim_dpcmbh.jpg'
  },
  // {
  //   id: 'noc',
  //   title: "NOC's/Site Supervision",
  //   icon: <FolderCheck className="w-5 h-5" />,
  //   features: ['Site inspections', 'Quality control', 'Documentation', 'Compliance checks'],
  //   image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875179/MOR_wume78.jpg'
  // }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('plumbing');
  const activeService = servicesData.find(service => service.id === activeTab);

  return (
    <section id='services' className="py-16 lg:py-24 relative overflow-hidden bg-gray-50">

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
          <div className="lg:col-span-6 ">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src={activeService.image}
                alt={`${activeService.title} diagram`}
                className="w-full h-full object-cover transform scale-125"
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