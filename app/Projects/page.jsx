"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Building2, Calendar, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'NPU(Nilambar Pitambar University)',
    location: 'Palamu',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875270/NPU_hvn9kr.jpg',
    year: '2023',
    category: 'University'
  },
  {
    id: 2,
    name: 'Adarsh Welkin Park',
    location: 'Bangalore',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875248/welkin_park_wfwdvg.jpg',
    year: '2023',
    category: 'Residential'
  },
  {
    id: 3,
    name: 'Adarsh Tropica',
    location: 'Bangalore',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730005637/TROPICAAAAAAAAAAAAAA_tulpgx.jpg',
    year: '2022',
    category: 'Residential'
  },
  {
    id: 4,
    name: 'Mall of Ranchi',
    location: 'Ranchi',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875179/MOR_wume78.jpg',
    year: '2023',
    category: 'Commercial'
  },
  {
    id: 5,
    name: 'Purva ZenTech Business Park',
    location: 'Bangalore',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730005656/PURVA_ZENTEC_mcqvhr.jpg',
    year: '2022',
    category: 'Commercial'
  },
  {
    id: 6,
    name: 'Sadar Hospital',
    location: 'Ranchi',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730005635/SADAR_HOSPITAL_RANCHI_d9nxzu.jpg',
    year: '2022',
    category: 'Hospital'
  },
  {
    id: 7,
    name: 'Bihar Sharif Hotel',
    location: 'Bihar',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730005649/BIHAR_SARIF_lvhisu.jpg',
    year: '2022',
    category: 'Hotel'
  },
  {
    id: 8,
    name: 'Vacation Villa',
    location: 'Bangalore',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730005688/VACATATION_VILLA_qnunhw.jpg',
    year: '2022',
    category: 'Residential'
  },
  {
    id: 9,
    name: 'IARI Campus at Goria Karma',
    location: 'Jharkhand',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1730005638/IARI_CAMPS_OF_GORIA_KAMRA_bf9fdl.jpg',
    year: '2022',
    category: 'Institutional'
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id='projects' className="py-14 lg:py-24 relative overflow-hidden bg-gradient-to-br bg-gray-50">
      {/* Circuit lines background matching hero section */}
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

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-semibold">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
             {/* MEPF */}
              Our
            <span className="text-primary"> Portfolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio featuring real-time cutting-edge MEPF designs that embody efficiency and
            innovation, reflecting our commitment to excellence and client satisfaction.
          </p>
        </div>

        {/* Single Image Carousel */}
        <div className="relative max-w-[1000px] mx-auto">
          <div className="h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="relative h-full w-full">
              {/* Project Image with Animation */}
              <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-white/90">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm font-medium">{projects[currentIndex].category}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {projects[currentIndex].name}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-white/90">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{projects[currentIndex].location}</span>
                        </div>
                        {/* <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{projects[currentIndex].year}</span>
                        </div> */}
                      </div>

                      {/* <button className="inline-flex items-center gap-2 text-white hover:text-primary hover:gap-3 transition-all duration-300 mt-2 group">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Progress Bar */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 
                  ${index === currentIndex ? 'w-8 bg-primary' : 'w-4 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}