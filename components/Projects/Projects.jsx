"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Building2, Calendar, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'NPU',
    location: 'Palamu',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875270/NPU_hvn9kr.jpg',
    year: '2023',
    category: 'Educational'
  },
  {
    id: 2,
    name: 'Welkin',
    location: 'Bangalore',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875248/welkin_park_wfwdvg.jpg',
    year: '2023',
    category: 'Commercial'
  },
  {
    id: 3,
    name: 'Tropica',
    location: 'Bangalore',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875246/TROPICA_vfn8e9.jpg',
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
    name: 'Tech Park',
    location: 'Bangalore',
    image: 'https://res.cloudinary.com/dic3orh1e/image/upload/v1729875179/MOR_wume78.jpg',
    year: '2022',
    category: 'Commercial'
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    if (isMobile) return [currentIndex];
    const visibleIndexes = [];
    for (let i = 0; i < 3; i++) {
      visibleIndexes.push((currentIndex + i) % projects.length);
    }
    return visibleIndexes;
  };

  return (
    <section className="py-14 lg:py-24 relative overflow-hidden bg-gradient-to-br  bg-gray-50">
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
            Our Latest
            <span className="text-primary"> Work</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful MEP projects delivered across India, 
            showcasing our expertise in creating efficient and sustainable building systems.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex justify-center items-center gap-4 md:gap-6 h-[400px] md:h-[400px] lg:h-[500px]">
            {getVisibleProjects().map((index, i) => (
              <div
                key={projects[index].id}
                className={`relative group transition-all duration-500 ease-in-out
                  ${isMobile ? 'w-full' : i === 1 ? 'w-[600px] md:w-[800px] opacity-100 scale-100' : 'w-[400px] md:w-[500px] opacity-60 scale-90 hover:opacity-80'}`}
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                  {/* Project Image */}
                  <img
                    src={projects[index].image}
                    alt={projects[index].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-white/90">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm font-medium">{projects[index].category}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {projects[index].name}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-white/90">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{projects[index].location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{projects[index].year}</span>
                        </div>
                      </div>

                      <button className="inline-flex items-center gap-2 text-white hover:text-primary hover:gap-3 transition-all duration-300 mt-2 group">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
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