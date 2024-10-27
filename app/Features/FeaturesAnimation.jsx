// components/Features/FeatureAnimations.jsx
'use client'

import { useEffect, useRef } from 'react'

export function useFeatureAnimations() {
  const featuresRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    const features = document.querySelectorAll('.feature-card')
    features.forEach((feature) => observer.observe(feature))

    return () => {
      features.forEach((feature) => observer.unobserve(feature))
    }
  }, [])

  return featuresRef
}