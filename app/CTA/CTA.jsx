// components/CTA/CTA.jsx
"use client"

import React, {useRef} from 'react'
// import emailjs from "@emailjs/browser"
import { Mail, Phone, ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/Button'

export default function CTA() {

  // const sendEmail = (e) => {
  //   e.preventDefault()
  //   emailjs
  //   .sendForm('')
  // }
  return (
    <section id='cta' className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-95" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Info */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Transform Your Queries or Projects?
            </h2>
            <p className="text-gray-300 text-lg">
              Get in touch with our experts for fast, coordinated, and accurate solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a 
                  href="tel:+919799858301" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91-9341075741
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a 
                  href="mailto:contact@pillarplus.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact@nexgendesign.in
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="project" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
              </div>

              <Button
                className="w-full group"
              >
                Request Proposal
                <ArrowRight className="ml-2 w-4 h-4 inline-block transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-center text-gray-500">
                We'll get back to you soon.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        {/* <div className="mt-16 grid md:grid-cols-3 gap-8 text-white">
          <div className="text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-2">Quick Response</h3>
            <p className="text-gray-300">24-hour response time for all inquiries</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-2">AI-Powered</h3>
            <p className="text-gray-300">Advanced technology for precise MEP solutions</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-2">Global Service</h3>
            <p className="text-gray-300">Supporting projects worldwide</p>
          </div>
        </div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </section>
  )
}